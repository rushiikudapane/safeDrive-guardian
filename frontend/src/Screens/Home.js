import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";

import Geolocation from "@react-native-community/geolocation";

const requestLocationPermission = async () => {
  try {
    const isGranted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: "Geolocation Permission",
        message: "Can we access your location?",
        buttonNeutral: "Ask me later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );

    if (isGranted === "granted") {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

if (requestLocationPermission) {
  Geolocation.watchPosition(
    (position) => {
      console.log(position.coords.speed);
    },
    (err) => {
      console.log(err.code, err.message);
    },
    {
      enableHighAccuracy: true,
      distanceFilter: 0,
      interval: 1000,
      fastestInterval: 500,
    }
  );
} else {
  console.log("you need to allow the permission");
}

const Home = () => {
  return (
    <ScrollView>
      {/* <TouchableOpacity onPress={requestLocationPermission}>
        <Text>Click me</Text>
      </TouchableOpacity> */}

      <View className="bg-blue-100 flex flex-col items-center h-full mb-10">
        <View className="w-full">
          <View className="px-6 py-4">
            <Text className="font-thin text-4xl text-cyan-900 rounded-t-3xl">
              Hello, User
            </Text>
            <Text className="font-thin text-sm text-cyan-900 rounded-t-3xl">
              Stay Alert, Stay Safe
            </Text>
          </View>
          <View className="flex flex-row w-full items-start text-start px-3 my-3 justify-evenly">
            <View className="w-2/5 h-32 rounded-xl shadow-xl shadow-black justify-center pl-5 bg-blue-300">
              <Text className="text-6xl">7</Text>
              <Text className="text-lg">Alerts Raised</Text>
            </View>
            <View className="w-2/4 h-32 rounded-xl shadow-xl shadow-black justify-center pl-5 bg-blue-200">
              <Text className="text-6xl">3</Text>
              <Text className="text-lg">Sleep Count</Text>
            </View>
          </View>
          <View className="flex flex-row w-full items-start text-start px-3 my-3 justify-evenly">
            <View className="w-2/4 h-32 rounded-xl shadow-xl shadow-black justify-center pl-5 bg-blue-200">
              <View className="flex flex-row items-baseline">
                <Text className="text-6xl">55</Text>
                <Text className="text-2xl pl-2">km/hr</Text>
              </View>
              <Text className="text-lg">Inst. Speed</Text>
            </View>
            <View className="w-2/5 h-32 rounded-xl shadow-xl shadow-black justify-center pl-5 bg-blue-300">
              <View className="flex flex-row items-baseline">
                <Text className="text-6xl">40</Text>
                <Text className="text-2xl pl-1">km/hr</Text>
              </View>
              <Text className="text-lg">Avg. Speed</Text>
            </View>
          </View>
          <View className="flex flex-row w-full items-start text-start px-3 my-3 justify-evenly">
            <View className="w-2/5 h-32 rounded-xl shadow-xl shadow-black justify-center pl-5 bg-blue-300">
              <Text className="text-6xl">3</Text>
              <Text className="text-lg">Call Blocks Count</Text>
            </View>
            <View className="w-2/4 h-32 rounded-xl shadow-xl shadow-black justify-center px-5 bg-blue-200">
              <Text className="text-6xl text-gray-700">-</Text>
              <Text className="text-lg text-gray-700">Reward Points</Text>
              <Text className="text-sm text-gray-700">
                feature to be launch
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={require("../../assets/safe-drive logo.jpeg")}
          className="h-36 w-96 rounded-full mt-2"
        />
        {/* 
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Safe-Drive Guardian</Text>
        <Text style={styles.subtitle}>Stay Alert, Stay Safe</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => console.log("Start Detection pressed")}
        >
          <Text style={styles.buttonText}>Start Detection</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View> */}
      </View>
    </ScrollView>
  );
};

export default Home;
