import AsyncStorage from '@react-native-async-storage/async-storage';
export const storeData = async (key, value) => {
  try {
    //console.log('StoreData', key, value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + key, jsonValue);
    //  alert(jsonValue)
  } catch (e) {
    console.log(e);
  }
};

export const getData = async key => {
  try {
    //console.log('value', key);
    const jsonValue = await AsyncStorage.getItem('@' + key);
    //   console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {}
};

export const setInfo = async (key, value) => {
  try {
    //console.log('setInfo', key, value);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('@' + key, jsonValue);
    //  alert(jsonValue)
  } catch (e) {
    console.log(e);
  }
};

export const retrieveInfo = async key => {
  try {
    //console.log('retrieveInfo', key);
    const jsonValue = await AsyncStorage.getItem('@' + key);
    //   console.log(JSON.stringify(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {}
};
