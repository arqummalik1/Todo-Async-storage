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
  Keyboard,Platform
} from "react-native";
//import { SafeAreaView } from 'react-native-safe-area-context';
import Item from "./components/item";
import Header from "./components/header";
import SearchBar from "./components/searchBar";
import Entypo from "@expo/vector-icons/Entypo";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  const [inputText, setInputText] = useState("");
  const [query,setQuery] = useState('');
  const [searchItems,setSearchItems] = useState('')

  useEffect(() => {
    getData()
  },[])

 /*  const todoData = [
    { id: 1, title: "Buy groceries", isChecked: false },
    { id: 2, title: "Read a book", isChecked: true },
    { id: 3, title: "Go for a walk", isChecked: false },
  ]; */
  const [data, setData] = useState([]);

  const handlePress = async ()=> {
    if (!inputText.trim()) return;
    try{
       const newItem = {
      id : Math.random(),
      title : inputText,
      isChecked: false
    };
      setData((prevData)=> [...prevData, newItem])
      setInputText('')
      Keyboard.dismiss()
      const jsonValue = JSON.stringify([...data,newItem]);
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

const deleteItem = async (id) => {
  try {
   console.log("Id is ==>>",id)
  const afterDelete = data.filter((item)=> item.id !== id)
  await AsyncStorage.setItem("savedData",JSON.stringify(afterDelete));
  setData(afterDelete)
  }
  catch(err){
 console.log("error : ", err)
  }
 
}

const updateChecked = async (id) => {
  try {
    const updatedData = data.map((item) => {
       if (item.id == id) {
        item.isChecked = !item.isChecked
       }
       return item;
    })
    await AsyncStorage.setItem("savedData", JSON.stringify(updatedData));
    setData(updatedData)
  }
  catch(err){
    console.log(err)
  }
};

const handleSearch = (text) => {
  setQuery(text);
  if (!text.trim()) {
    setSearchItems([])
    return;
  }
  const items = data.filter((item)=> item.title.toLowerCase().includes(text.toLowerCase()));
  setSearchItems(items);
}




return (
  <LinearGradient
   colors={["#1E3A8A", "#6366F1", "#1E3A8A"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.gradient}
  >
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar  value={query} onSubmit = {handleSearch}/>
      <FlatList
        data={query ? searchItems : data}
        renderItem={({ item }) => (
          <Item data={item} delProp={deleteItem} update={updateChecked} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
      <KeyboardAvoidingView
        style={styles.inputMain}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={20}
      >
        <TextInput
          placeholder="Type to add items..."
          placeholderTextColor='rgba(255, 255, 255, 0.54)'
          style={styles.input}
          onChangeText={(text) => setInputText(text)}
          value={inputText}
          autoCorrect={false}
          onSubmitEditing={handlePress}
        />
        <TouchableOpacity
          style={[
            styles.icon,
            { backgroundColor: inputText.trim() ? "rgba(66, 239, 27, 0.89)" : "#3247" },
          ]}
          onPress={handlePress}
        >
          <Entypo name="plus" size={inputText ?  28 : 25} color="white" />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  </LinearGradient>
);
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
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
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    fontSize: 16,
    borderRadius: 25,
    color: "#F9FAFB",
    padding: 15,
    marginTop:10,
//borderBottomWidth: 0.9,
    //borderColor: "#6B7280",
  },
  icon: {
    padding: 12,
    borderRadius: 50,
    marginLeft: 5,
    alignSelf:"flex-end"

  },
});