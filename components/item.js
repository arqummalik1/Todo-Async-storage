import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import Checkbox from 'expo-checkbox'
import Octicons from '@expo/vector-icons/Octicons';


const Item = ({data}) => {
   // console.log("daata ==>",data)
  return (
    <View style={styles.main}>
        <Checkbox 
        value = {data.isChecked}
        color ={data.isChecked ? "blue" : "#1F2937"}
        />
      <Text style={[styles.title, data.isChecked && {textDecorationColor:"#1F2937",textDecorationLine : "line-through"}]}>{data.title}</Text>
      <TouchableOpacity onPress={()=> alert("Deleted" + " " + data.id)}>
      <Octicons name="trash" size={20} color="#1F2937" style={styles.icon}/>
      </TouchableOpacity>
    </View>
  )
}



const styles = StyleSheet.create({
main : {
    padding :15,
    marginHorizontal:10,
    backgroundColor:"#374151",
    marginBottom:15,
    borderRadius:10,
    width : "90%",
    alignSelf:"center",
    flexDirection:"row",
    gap:10,
    justifyContent:"space-between",
    alignItems:"center"
    
},
title : {
    color : "#D1D5DB",
    flex:1,
},
icon : {
    //flex :1
}


})

export default Item;