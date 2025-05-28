import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import { LinearGradient } from 'expo-linear-gradient';

const Item = ({ data, delProp, update }) => {
  return (
    <LinearGradient
      colors={["#3242", "#3242"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradientItem}
    >
      <View style={styles.itemInner}>
        {/* ✅ Touchable for Checkbox */}
        <TouchableOpacity onPress={() => update(data.id)} style={styles.checkbox}>
          <Entypo
            name={data.isChecked ? "check" : "circle"}
            size={20}
            color="#fff"
          />
        </TouchableOpacity>

        {/* ✅ Text */}
        <Text
          style={[
            styles.itemText,
            { textDecorationLine: data.isChecked ? "line-through" : "none" ,textDecorationColor: data.isChecked ? "red" : "" },
          ]}
        >
          {data.title}
        </Text>

        {/* ✅ Delete button */}
        <TouchableOpacity onPress={() => delProp(data.id)}>
          <Entypo name="trash" size={18} color="#fff" />
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientItem: {
    marginHorizontal: 16,
    marginVertical: 6,
    borderRadius: 12,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  itemInner: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  checkbox: {
    padding: 4,
  },
});

export default Item;