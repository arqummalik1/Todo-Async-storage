import { StyleSheet, Text, TouchableOpacity, View, ViewComponent ,Platform} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Header = () => {
  return (
        <View style={styles.container}>
            <TouchableOpacity>
            <Entypo name="menu" size={24} color="#F9FAFB" />
            </TouchableOpacity>
            <Text style={styles.title}>ToDo</Text>
            <TouchableOpacity>
            <FontAwesome5 name="user-circle" size={24} color="#F9FAFB" />
            </TouchableOpacity>
        </View>
  )
}

export default Header

const styles = StyleSheet.create({
container : {
   // backgroundColor:"#0e672b",
    flexDirection:"row",
    justifyContent:"space-between",
    marginHorizontal:20,
    marginVertical:10,
    marginTop:Platform.OS == "android" ? 40 : 0
},
title:{
    fontSize : 24,
    fontWeight:600,
    color : "#F9FAFB"


}
})