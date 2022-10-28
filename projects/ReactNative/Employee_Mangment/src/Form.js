import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {TextInput} from 'react-native-paper';
//import { useValidation } from 'react-native-form-validator';
import {storeData, getData} from './Asynstorage';




const Form = ({navigation}) => {
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [text3, setText3] = useState('');
  const [text4, setText4] = useState('');
  const [text5, setText5] = useState('');
  const [text6, setText6] = useState('Male');
  const [Count, setCount] = useState();
  const [isMaleSelected, setIsMaleSelected] = useState(true);
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    let data = await getData('allInfo');
    // console.log(data);
    setCount(data.length);
  };
  // const checkTextInput = () => {
  //   //Check for the Name TextInput
  //   if (!text) {
  //     alert('Please Enter Name');
  //     return;
  //   }
  //   //Check for the Email TextInput
  //   if (!text1) {
  //     alert('Please Enter Email');
  //     return;
  //   }
  //   //Checked Successfully
  //   //Do whatever you want
  //   alert('Success');
  // };
  

  const changeImage = gender => {
    if (gender == 'female') {
      setText6('Female');
      setIsMaleSelected(false);
    } else {
      setText6('Male');
      setIsMaleSelected(true);
    }
    //console.log('changeImage====>', gender);
  };
  let person = {
    ID: Count,
    FirstName: text,
    LastName: text1,
    Designation: text2,
    DOB: text3,
    DOJ: text4,
    EmployeeID: text5,
    gender: text6,
  };
  const valid = () => {
    if (text && text1 && text2 ) {
      navigation.navigate('Log')
      alert('Submitted Successfully')
    }
    //Check for the Email TextInput
    else{
    //Checked Successfully
    //Do whatever you want
    alert('Enter all Details');
    }
  }

  return (
    <ScrollView>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableOpacity onPress={() => changeImage('male')}>
          {/* Male Image */}
          <Image
            source={
              !isMaleSelected
                ? require('/home/divum/projects/ReactNative/Employee_Mangment/assets/person-icon-transparent-background-6.jpg')
                : require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Check-Mark-Tick-Transparent-Clip-Art-Background.png')
            }
            style={{height: 150, width: 150, marginLeft: 30, marginTop: 20}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => changeImage('female')}>
          <Image
            source={
              isMaleSelected
                ? require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Female_Dark.png')
                : require('/home/divum/projects/ReactNative/Employee_Mangment/assets/Check-Mark-Tick-Transparent-Clip-Art-Background.png')
            }
            style={{
              height: 150,
              width: 150,
              marginLeft: 30,
              marginTop: 20,
            }}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: 40,
        }}>
        <TextInput
          label="First Name"
          value={text}
          onChangeText={text => setText(text)}
          style={styles.Name}
        />
        <TextInput
          label="Last Name"
          value={text1}
          onChangeText={text1 => setText1(text1)}
          style={styles.Name}
        />
      </View>
      <View>
        <TextInput
        keyboardType='numeric'
          label="Age"
          value={text2}
          onChangeText={text2 => setText2(text2)}
          style={styles.Bal}
        />
        <TextInput
          label="Disease"
          value={text3}
          onChangeText={text3 => setText3(text3)}
          style={styles.Bal}
          
        />
        <TextInput
          keyboardType="numeric"
          label="Height"
          value={text4}
          onChangeText={text4 => setText4(text4)}
          style={styles.Bal}
        />
        <TextInput
          keyboardType="numeric"
          label="Weight"
          value={text5}
          onChangeText={text5 => setText5(text5)}
          style={styles.Bal}
          maxLength={5}
        />
        
        
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => valid()}>
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  Name: {
    //backgroundColor: 'deepskyblue',
    width: 178,
    height: 50,
    borderRadius: 5,
    padding: 10,
    borderColor: 'black',
    marginTop: 10,
  },

  btn: {
    width: 150,
    height: 50,
    backgroundColor: '#4287f5',
    textAlign: 'center',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
    marginBottom: 60,
    marginLeft: 115,
  },

  Bal: {
    //backgroundColor: 'deepskyblue',
    height: 50,
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
    margin: 10,
    color: 'black',
    borderColor: 'black',
    justifyContent: 'center',
  },
});

export default Form;
