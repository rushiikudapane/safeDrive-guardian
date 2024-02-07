
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  const imageSource = require('../../../assets/landing-image.jpg');

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.image} />

      <Text style={styles.title}>Welcome to Safe-Drive Guardian</Text>
      <Text style={styles.description}>Stay Safe on the road!</Text>

      <TouchableOpacity style={[styles.getStartedButton, styles.button]} onPress={handleGetStarted}>
        <Text style={[styles.buttonText, styles.largeButtonText]}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    borderRadius: 15,
    marginBottom: 16,
    marginTop: '5%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    marginTop: '5%',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 15,
    marginBottom: 12,
    width: '100%',
    padding: 16,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  largeButtonText: {
    fontSize: 20,
  },
});

export default LandingPage;









