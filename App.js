import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";
//import { SafeAreaView } from 'react-native-safe-area-context';
import Item from "./components/item";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Entypo from "@expo/vector-icons/Entypo";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    getData()
  },[])

  const todoData = [
    { id: 1, title: "Buy groceries", isChecked: false },
    { id: 2, title: "Read a book", isChecked: true },
    { id: 3, title: "Go for a walk", isChecked: false },
  ];
  const [data, setData] = useState([]);

  const handlePress = async ()=> {
    if (!inputText.trim()) return;
    try{
       const newItem = {
      id : Math.random(),
      title : inputText,
      isChecked: false
    };
      setData((prevData)=> [...prevData,newItem])
      setInputText('')
      Keyboard.dismiss()
      const jsonValue = JSON.stringify(data);
     await AsyncStorage.setItem('savedData', jsonValue);
    }
    catch(err){
      alert(err)
      console.log(err)
    } 
  }

const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('savedData');
    jsonValue != null ? setData(JSON.parse(jsonValue)) : null;

  } catch (e) {
    alert(e)
    console.log(e)
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      <FlatList
        data={data}
        renderItem={({ item }) => <Item data={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <KeyboardAvoidingView
        style={styles.inputMain}
        behavior="padding"
        keyboardVerticalOffset={10}
      >
        <TextInput
          placeholder="Type to add items..."
          placeholderTextColor="#888"
          style={styles.input}
          onChangeText={(text) => setInputText(text)}
          value = {inputText}
          autoCorrect={false}
        />
        <TouchableOpacity style={[styles.icon, {backgroundColor : inputText.trim() ? "blue" : "#374151"}]} onPress={handlePress}>
          <Entypo name="plus" size={26} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1F2937",
  },
  inputMain: {
    flexDirection: "row",
    paddingHorizontal: 15,
    alignItems: "center",
    gap: 5,
    marginBottom: 10,
    
  },
  input: {
    flex: 1,
    backgroundColor: "",
    fontSize: 16,
    borderRadius: 10,
    color: "#fff",
    padding: 10,
    borderBottomWidth:0.9,
    borderColor:"#374151"
  },
  icon: {
    backgroundColor: "blue",
    padding: 8,
    borderRadius: 10,
    marginLeft: 5,
  },
});
