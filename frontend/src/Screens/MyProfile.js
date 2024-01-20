
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const MyProfile = () => {
  return (
    <View style={styles.container}>

      <View style={styles.imageContainer}>
        <Image
          style={styles.imgStyle}
          source={require("../../assets/Selfphoto.jpg")}
        />
      </View>

      <Text style={styles.userName}>USER_NAME</Text>

      <TouchableOpacity
        style={styles.editProfileButton}
        // onPress={() => courseDetails()}
      >
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>

      <View style={styles.detailsContainer}>
        <Text style={styles.detailLabel}>Email</Text>
        <View style={styles.detailValueContainer}>
          <Text>xyz@gmail.com</Text>
        </View>

        <Text style={styles.detailLabel}>Contact Number</Text>
        <View style={styles.detailValueContainer}>
          <Text>7038571520</Text>
        </View>

        <Text style={styles.detailLabel}>Total Trips</Text>
        <View style={styles.detailValueContainer}>
          <Text>23</Text>
        </View>

        <Text style={styles.detailLabel}>Total Alerts</Text>
        <View style={styles.detailValueContainer}>
          <Text>2</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.editProfileButton}
        // onPress={() => xyz()}
      >
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.editProfileButton}
        // onPress={() => courseDetails()}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  imageContainer: {
    alignItems: 'center',
  },
  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  userName: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  editProfileButton: {
    backgroundColor: '#3498db',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailValueContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default MyProfile;
