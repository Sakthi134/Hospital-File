import React,{useState,useEffect} from "react";
import { TouchableOpacity, View,Text,StyleSheet } from "react-native";
const Logh = ({navigation}) => {

    return(
        <View style={styles.main}>
      <View style={styles.container}>
        
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Formh')}>
          <Text style={{color: 'white'}}>Add Doctor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}>
          <Text style={{color: 'white'}}>Update</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
    main: {
      height: '100%',
      width: '100%',
      backgroundColor: 'white',
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        marginTop: 220,
      },
    btn: {
        width: 230,
        height: 70,
        backgroundColor: '#4287f5',
        textAlign: 'center',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      },

})
export default Logh;
