// import React from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from 'react-native';
// import {TextInput} from 'react-native-paper';
// import {storeData, getData} from './Asynstorage';

// const Update = ({route, navigation}) => {
//   //console.log(route);
//   const value = route.params.value;
//   //alert("ID",value.ID)
//   const [text, setText] = React.useState(value.FirstName);
//   const [text1, setText1] = React.useState(value.LastName);
//   const [text2, setText2] = React.useState(value.Designation);
//   const [text3, setText3] = React.useState(value.DOB);
//   const [text4, setText4] = React.useState(value.DOJ);
//   const [text5, setText5] = React.useState(value.EmployeeID);
//   const [text6, setText6] = React.useState(value.gender);
//   const [alternateImage, setAlternateImage] = React.useState(true);

//   const changeImage = () => {
//     setAlternateImage(alternateImage => !alternateImage);
//   };
//   const [alternateImage1, setAlternateImage1] = React.useState(true);

//   const changeImage1 = () => {
//     setAlternateImage1(alternateImage1 => !alternateImage1);
//   };
//   const person = {
//     ID: value.ID,
//     FirstName: text,
//     LastName: text1,
//     Designation: text2,
//     DOB: text3,
//     DOJ: text4,
//     EmployeeID: text5,
//     gender: text6,
//   };

//   const Update = async () => {
//     // console.log(person);
//     let data = await getData('allInfo');
//     data[value.ID] = person;
//     //alert(value.ID)
//     // console.log('Existing data===>', data);
//     // data.push(person);
//     storeData('allInfo', data);
//     route.params.max();
//     navigation.navigate('List')
//   };

//   return (
//     <ScrollView>
//       <TouchableOpacity
//         onPress={() => setText6('Male')}
//         onPressIn={changeImage1}>
//         {alternateImage1 && (
//           <Image
//             source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/person-icon-transparent-background-6.jpg')}
//             style={{height: 150, width: 150, marginLeft: 30, marginTop: 20}}
//           />
//         )}
//         {!alternateImage1 && (
//           <Image
//             source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Check-Mark-Tick-Transparent-Clip-Art-Background.png')}
//             style={{height: 150, width: 150, marginLeft: 30, marginTop: 20}}
//           />
//         )}
//       </TouchableOpacity>
//       <TouchableOpacity
//         onPress={() => setText6('Female')}
//         onPressIn={changeImage}>
//         {alternateImage && (
//           <Image
//             source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Female_Dark.png')}
//             style={{height: 150, width: 150, marginLeft: 220, marginTop: -150}}
//           />
//         )}
//         {!alternateImage && (
//           <Image
//             source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Check-Mark-Tick-Transparent-Clip-Art-Background.png')}
//             style={{height: 150, width: 150, marginLeft: 220, marginTop: -150}}
//           />
//         )}
//       </TouchableOpacity>

//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'space-evenly',
//           marginTop: 40,
//         }}>
//         <TextInput
//           label="First Name"
//           value={text}
//           onChangeText={text => setText(text)}
//           style={styles.Name}
//         />
//         <TextInput
//           label="Last Name"
//           value={text1}
//           onChangeText={text1 => setText1(text1)}
//           style={styles.Name}
//         />
//       </View>
//       <View>
//         <TextInput
//           label="Designation"
//           value={text2}
//           onChangeText={text2 => setText2(text2)}
//           style={styles.Bal}
//         />
//         <TextInput
//         keyboardType='numeric'
//           label="DOB"
//           value={text3}
//           onChangeText={text3 => setText3(text3)}
//           style={styles.Bal}
//         />
//         <TextInput
//         keyboardType='numeric'
//           label="Date of Joining"
//           value={text4}
//           onChangeText={text4 => setText4(text4)}
//           style={styles.Bal}
//         />
//         <TextInput
//         keyboardType='numeric'
//           label="Employee ID"
//           value={text5}
//           onChangeText={text5 => setText5(text5)}
//           style={styles.Bal}
//         />
        
//         <View
//           style={{
//             height: 150,
//             width: 150,
//             marginLeft: 220,
//             marginTop: -160,
//             marginBottom: 80,
//           }}>
//           <TouchableOpacity style={styles.btn} onPress={() => Update()}>
//             <Text style={{color: 'purple'}}>Update</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </ScrollView>
//   );
// };
// const styles = StyleSheet.create({
//   Name: {
//     //backgroundColor: 'deepskyblue',
//     width: 178,
//     height: 50,
//     borderRadius: 5,
//     padding: 10,
//     borderColor: 'black',
//     marginTop: 10,
//   },

//   btn: {
//     width: 150,
//     height: 50,
//     backgroundColor: 'pink',
//     textAlign: 'center',
//     borderRadius: 40,
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 160,
//     //marginBottom: 100,
//     marginLeft: -100,
//   },

//   Bal: {
//     //backgroundColor: 'deepskyblue',
//     height: 50,
//     borderRadius: 5,
//     padding: 10,
//     marginTop: 20,
//     margin: 10,
//     color: 'black',
//     borderColor: 'black',
//     justifyContent: 'center',
//   },
// });

// export default Update;
