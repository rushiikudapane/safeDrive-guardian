// Map.js

import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import axios from "axios";
import polyline from "@mapbox/polyline";
import { FontAwesome5 } from "@expo/vector-icons";

const Map = () => {
  const [currentLocation, setCurrentLocation] = useState({
    coords: {
      latitude: 18.5088743,
      longitude: 73.7814113,
    },
  });

  const [coords, setCoords] = useState([]);
  const [destinationLocation, setDestinationLocation] = useState("");
  const [destinationCoordinates, setDestinationCoordinates] = useState(null);

  const getCoordinates = async (location) => {
    try {
      const resp = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?q=${location}&key=7088625cd7834f9db3c6e91b9ccbcf76`
      );

      return resp.data.results[0].geometry;
    } catch (err) {
      console.log("Error converting location to coords:", err);
    }
  };

  const getDirections = async () => {
    const startCoordinates = {
      lng: currentLocation.coords.longitude,
      lat: currentLocation.coords.latitude,
    };
    // console.log(startCoordinates);
    const destinationCoordinates = await getCoordinates(destinationLocation);
    setDestinationCoordinates(destinationCoordinates);
    // console.log(destinationCoordinates);
    try {
      const resp = await axios.get(
        `http://router.project-osrm.org/route/v1/driving/${startCoordinates.lng},${startCoordinates.lat};${destinationCoordinates.lng},${destinationCoordinates.lat}?overview=full`
      );

      // console.log("Response data: ", resp.data.geometry);

      if (resp.data.routes && resp.data.routes[0].geometry) {
        const points = polyline.decode(resp.data.routes[0].geometry);
        const coords = points.map((point) => {
          return {
            latitude: point[0],
            longitude: point[1],
          };
        });
        // console.log(coords);
        setCoords(coords);
      } else {
        console.log("No routes found");
      }
    } catch (err) {
      console.log("Error getting routes: ", err);
    }
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.getForegroundPermissionsAsync();
      if (status !== "granted") {
        Alert.alert(
          "Permissions to access location was denied, please provide necessary permissions."
        );
        return;
      }

      await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 500,
          distanceInterval: 1,
        },
        (newLocation) => {
          // console.log(newLocation);
          setCurrentLocation(newLocation);
        }
      );
    })();
  }, []);

  return (
    <View className="w-full h-full bg-blue-100">
      <TextInput
        className="bg-blue-50 border-2 border-blue-300 text-center rounded-lg shadow-inner shadow-black"
        style={styles.input}
        onChangeText={setDestinationLocation}
        value={destinationLocation}
        placeholder="Enter destination location"
      />
      <View className="flex flex-row justify-center pb-3 border-b-2 border-cyan-900">
        <TouchableOpacity
          className="bg-cyan-900 h-10 w-4/5 flex justify-center rounded-xl shadow-xl shadow-black"
          onPress={getDirections}
        >
          <Text className="text-center text-white">Get Directions</Text>
        </TouchableOpacity>
      </View>
      {currentLocation && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: currentLocation.coords.latitude,
            longitude: currentLocation.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: currentLocation.coords.latitude,
              longitude: currentLocation.coords.longitude,
            }}
            title="You are here"
          >
            <FontAwesome5 name="car" size={36} color="black" />
          </Marker>
          {destinationCoordinates && (
            <Marker
              coordinate={{
                latitude: destinationCoordinates.lat,
                longitude: destinationCoordinates.lng,
              }}
              title="Destination"
            />
          )}
          <Polyline
            coordinates={coords}
            strokeWidth={5}
            strokeColor="rgb(25, 89, 158)"
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
  },
});

export default Map;
