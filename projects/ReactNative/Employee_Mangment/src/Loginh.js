import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput} from 'react-native-paper';
const Loginh = ({navigation}) => {
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  
  const valid = () => {
    if((UserName.trim()==='vijay') && (Password.trim()==2580))
    navigation.replace('Logh')
    else
    alert("Incorrect Username or Password");
  }

  return (
    <ScrollView style={{flex:1}}>
    <View style={styles.main}>
     
      <View style={styles.container}>
        <TextInput
          label="UserName"
          onChangeText={text => setUsername(text)}
          style={styles.input}

        />
        <TextInput
          keyboardType='numeric'
          style={styles.input}
          label="Enter Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry
        />
        <TouchableOpacity style={styles.btn} onPress={() => valid()}>
          <Text style={{color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    //height: '100%',
    //width: '100%',
    //backgroundColor: 'white',
    marginTop:10
    
  },
  logo: {
    //flex:1,
    //backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // height:'30%'
    marginTop: 100,
  },
  container: {
    flex: 1,
    //backgroundColor: 'white',
    alignItems: 'center',
    marginTop: 220,
  },
  btn: {
    width: 200,
    height: 50,
    backgroundColor: '#4287f5',
    textAlign: 'center',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  input: {
    //backgroundColor:"#6ecbt4",
    height: 50,
    width: '80%',
    //borderRadius: 20,
    borderColor: 'black',
    borderWidth: 2,
    padding: 10,
    margin: 10,
  },
});

export default Loginh;
