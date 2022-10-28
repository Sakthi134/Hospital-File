import React,{useState,useEffect} from "react";
import { TouchableOpacity, View,Text,StyleSheet } from "react-native";
const Home = ({navigation}) => {
    const [greet, setGreet] = useState(' ');
  const findGreet = () => {
    const hrs = new Date().getHours();
    let val;
    if (hrs < 12) {
      val = 0;
    } else if (hrs <= 15) {
      val = 1;
    } else {
      val = 2;
    }
    switch (val) {
      case 0:
        return setGreet('Morning');
      case 1:
        return setGreet('Afternoon');
      case 2:
        return setGreet('Evening');
    }
  };
  useEffect(() => {
    findGreet();
  }, []);
    return(
        <View style={styles.main}>
            <Text style={{fontSize: 35, color: '#4287f5'}}>
        {'Good '}
        {greet},</Text>
      <View style={styles.container}>
        <TouchableOpacity
        style={styles.btn}
          onPress={() => navigation.navigate('Loginh')}>
          <Text style={{color: 'white'}}>Hospital</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Log')}>
          <Text style={{color: 'white'}}>User</Text>
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
        marginTop: 200,
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

})
export default Home;
