import React, {useState,useEffect} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
//import { retrieveInfo, setInfo } from './Asynstorage';
const Splashs = ({navigation}) => {
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 1000);
  // useEffect(()=>{
  //   replaceScreen();
  // },[])

  // const replaceScreen=async()=>{
    
  //   let userInfo=await retrieveInfo('userInfo');
  //   if(userInfo.LoginId && userInfo.Pwd)
  //   navigation.replace('Landing')
  // }

  if (!timePassed) {
    return (
      <View style={styles.main}>
        <View style={styles.splash}>
          <View style={styles.logo}>
            <Image
              style={styles.img}
              source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Medical_-01-512.webp')}></Image>
          </View>
        </View>
      </View>
    );
  }
  navigation.navigate('Home');
  //return null;
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  splash: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'white',
    padding: 200,
  },
  img: {
    width: 200,
    height: 200,
    justifyContent: 'center',
  },

  logo: {
    //flex:1,

    alignItems: 'center',
    //justifyContent:'flex-end',
    // height:'30%'
    marginTop: 50,
  },
});

export default Splashs;
