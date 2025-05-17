import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = () => {
  return (
    <View style={styles.main}>
    <AntDesign name="search1" size={20} color="#888"  style={styles.icon}/>
      <TextInput
      placeholder='Search an item'
      placeholderTextColor= "#888"
      style={styles.input}
      clearButtonMode="always"
      />

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    main :{
        padding :10,
      //  backgroundColor:"#374151",
        width:"90%",
        alignSelf:"center",
        borderRadius:20,
        flexDirection:"row"    ,
        marginBottom : 20,
        borderBottomWidth:0.5,
        borderColor:"#374151"
    },
    input : {
      //  backgroundColor:"red",
        flex:1,
        fontSize : 16,
        color : "#fff",
        
    },
    icon: {
        marginRight:10,
        alignSelf:"center"
    }
})