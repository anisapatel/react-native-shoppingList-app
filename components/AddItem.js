import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const handleChange = (text) => {
    console.log(text);
    setText(text);
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Add Item..."
        onChangeText={handleChange}
      />
      <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
        <Text style={styles.buttonText}>
          <Icon name="plus" size={20} />
          Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#c2bad8",
    padding: 9,
    margin: 5,
  },
  buttonText: {
    color: "darkslateblue",
    fontSize: 20,
    textAlign: "center",
  },
});
