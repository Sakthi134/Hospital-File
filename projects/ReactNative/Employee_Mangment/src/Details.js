import React,{useState,useEffect} from "react";
import { TouchableOpacity, View,Text,StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
const Details = ({navigation}) => {
  const [text, setText] = useState('');
  const Valid = () => {
    navigation.navigate('Home')
    alert('Appointment Fixed')
  }
    return(
        <View style={styles.main}>
      <View style={styles.container}>
      <TextInput
          label="Date"
          keyboardType="numeric"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.Name}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => Valid()}>
          <Text style={{color: 'white'}}>Make Appointment</Text>
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
        marginTop: 20,
      },
      Name: {
        //backgroundColor: 'deepskyblue',
        width: 250,
        height: 50,
        borderRadius: 5,
        padding: 10,
        borderColor: 'black',
        marginTop: 10,
    
      },
})
export default Details;
