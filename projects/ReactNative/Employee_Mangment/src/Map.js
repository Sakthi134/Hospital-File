import React from 'react';
import {View, StyleSheet,Image} from 'react-native';
//import MapView from 'react-native-maps';
const Map = () => {
  return (
  <View style={styles.body}>
  
            <Image
              style={styles.map}
              source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/thumbnail.jpeg')}></Image>
              <Image
              style={styles.map1}
              source={require('/home/divum/projects/ReactNative/Employee_Mangment/assets/images.jpeg')}></Image>
          </View>
  
  )
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    //alignItems: 'center',
  },
  map:{
    //width:'100%',
    //height:'100%'
  },
  map1:{
    width:'100%'
  }
});
export default Map;
