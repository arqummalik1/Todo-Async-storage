import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const SearchBar = ({value,onSubmit}) => {

  return (
    <View style={styles.main}>
    <AntDesign name="search1" size={20} color="#fff"  style={styles.icon}/>
      <TextInput
      placeholder='Search an item'
      placeholderTextColor= 'rgba(255, 255, 255, 0.54)'
      style={styles.input}
      clearButtonMode="always"
      onChangeText={onSubmit}
      value={value}
      />

    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    main :{
        padding :10,
        backgroundColor:'rgba(255, 255, 255, 0.1)',
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