// import { TouchableOpacity,StyleSheet,View,Text,Image } from 'react-native'
// import React from 'react';
// import { useNavigation } from '@react-navigation/native';

// // import { JosefinSans_400Regular,JosefinSans_500Medium,JosefinSans_700Bold,JosefinSans_1000Medium } from "@expo-google-fonts/josefin-sans";
// // import { useFonts } from "expo-font";
// // import AppLoading from "expo-app-loading";

// const Menu = () => {

//   // let [fontsLoaded]=useFonts({
//   //   JosefinSans_400Regular,
//   //   JosefinSans_500Medium,
//   //   JosefinSans_700Bold,
//   //   JosefinSans_1000Medium
//   // });
  
//   // if(!fontsLoaded){
//   //   <AppLoading/>;
//   // }

//     const navigation=useNavigation();

//     return (
//     <View style={styles.menuContainer}>
//       <TouchableOpacity 
//         style={styles.buttonStyle}
//         onPress={()=>navigation.navigate("Home")}
//         >
//         <Image 
//             style={styles.iconStyle}
//             source={require("../../assets/Icons/home.png")}
//         />
//         <Text style={styles.textStyle}>Home</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={styles.buttonStyle}
//         onPress={()=>navigation.navigate("Notifications")}
//         >
//         <Image 
//             style={styles.iconStyle}
//             source={require("../../assets/Icons/notification.png")}
//         />
//         <Text style={styles.textStyle}>Notifications</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={styles.buttonStyle}
//         onPress={()=>navigation.navigate("Map")}
//         >
//         <Image 
//             style={styles.iconStyle}
//             source={require("../../assets/Icons/map.png")}
//         />
//         <Text style={styles.textStyle}>Map</Text>
//       </TouchableOpacity>

//       <TouchableOpacity 
//         style={styles.buttonStyle}
//         onPress={()=>navigation.navigate("Myprofile")}
//         >
//         <Image 
//             style={styles.iconStyle}
//             source={require("../../assets/Icons/myprofile.png")}
//         />
//         <Text style={styles.textStyle}>My Profile</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// export default Menu

// const styles = StyleSheet.create({
//     menuContainer:{
//         flexDirection:"row",
//         justifyContent:'space-evenly'
//     },

//     textStyle:{
//         fontFamily:"JosefinSans_500Medium"
//     },

//     iconStyle:{
//         width:"100%",
//         height:50,
//         aspectRatio:1,
//     }
// })

// BottomTabNavigator.js


