// Home.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/safe-drive logo.jpeg')} style={styles.logo} />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Safe-Drive Guardian</Text>
        <Text style={styles.subtitle}>Stay Alert, Stay Safe</Text>

        <TouchableOpacity style={styles.button} onPress={() => console.log('Start Detection pressed')}>
          <Text style={styles.buttonText}>Start Detection</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>Version 1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logo: {
    width: 350,
    height: 150,
    borderRadius: 75,
    marginTop: 20,
  },
  contentContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 30,
  },
  button: {
    backgroundColor: 'tomato',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 20,
  },
  footerText: {
    color: '#888',
    fontSize: 14,
  },
});

export default Home;
