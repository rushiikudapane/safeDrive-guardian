// // Notifications.js

// import React from 'react';
// import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

// const Notifications = ({ navigation }) => {
//   const notifications = [
//     { id: '1', title: 'New Message', message: 'John sent you a message', icon: require('../../assets/Icons/notification.png'), details: 'Details about the message...' },
//     { id: '2', title: 'New Follower', message: 'You have a new follower', icon: require('../../assets/Icons/notification.png'), details: 'Details about the new follower...' },
//     // Add more notifications as needed
//   ];

//   const renderNotificationItem = ({ item }) => (
//     <TouchableOpacity
//       style={styles.notificationItem}
//       onPress={() => navigation.navigate('NotificationDetails', { notification: item })}
//     >
//       <Image source={item.icon} style={styles.notificationIcon} />
//       <View style={styles.notificationContent}>
//         <Text style={styles.notificationTitle}>{item.title}</Text>
//         <Text style={styles.notificationMessage}>{item.message}</Text>
//       </View>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* <Text style={styles.header}>Notifications</Text> */}
//       <FlatList
//         data={notifications}
//         keyExtractor={(item) => item.id}
//         renderItem={renderNotificationItem}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f4f4f4',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   notificationItem: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     padding: 15,
//     backgroundColor: '#fff',
//     borderRadius: 12,
//     marginBottom: 10,
//     elevation: 2,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   notificationIcon: {
//     width: 40,
//     height: 40,
//     marginRight: 15,
//     borderRadius: 20,
//   },
//   notificationContent: {
//     flex: 1,
//   },
//   notificationTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   notificationMessage: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default Notifications;

// Notifications.js

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Notifications = ({ navigation }) => {
  const [clickedNotifications, setClickedNotifications] = useState([]);
  const notifications = [
    {
      id: "1",
      title: "New Message",
      message: "John sent you a message",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the message...",
    },
    {
      id: "2",
      title: "New Follower",
      message: "You have a new follower",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the new follower...",
    },
    {
      id: "3",
      title: "New Message",
      message: "John sent you a message",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the message...",
    },
    {
      id: "4",
      title: "New Follower",
      message: "You have a new follower",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the new follower...",
    },
    {
      id: "5",
      title: "New Message",
      message: "John sent you a message",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the message...",
    },
    {
      id: "6",
      title: "New Follower",
      message: "You have a new follower",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the new follower...",
    },
    {
      id: "7",
      title: "New Message",
      message: "John sent you a message",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the message...",
    },
    {
      id: "8",
      title: "New Follower",
      message: "You have a new follower",
      icon: require("../../assets/Icons/notification.png"),
      details: "Details about the new follower...",
    },
    // Add more notifications as needed
  ];

  const handleNotificationClick = (notification) => {
    // Check if the notification has already been clicked
    if (!clickedNotifications.includes(notification.id)) {
      // Update the state to mark the notification as clicked
      setClickedNotifications([...clickedNotifications, notification.id]);
    }

    // Navigate to the detailed notification page
    navigation.navigate("NotificationDetails", { notification });
  };

  const renderNotificationItem = ({ item }) => (
    <View className="items-center mt-1">
      <TouchableOpacity
        className="flex flex-row items-center w-11/12 px-3 py-3 bg-blue-200 shadow-xl shadow-black my-1 rounded-xl"
        onPress={() => handleNotificationClick(item)}
      >
        <Image source={item.icon} style={styles.notificationIcon} />
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="bg-blue-50 w-full h-full">
      <FlatList
        className="w-full h-full"
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotificationItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  notificationItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  notificationIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
    borderRadius: 20,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  notificationMessage: {
    fontSize: 16,
    color: "#666",
  },
});

export default Notifications;
