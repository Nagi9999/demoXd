import React from "react";
import { TextInput, StyleSheet } from "react-native";

const InputSign = ({ placeholder, secureTextEntry, onInputChange }) => {
  return (
    <TextInput
      style={style.input}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      onChangeText={(text) => onInputChange(text)}
    />
  );
};

export default InputSign;

const style = StyleSheet.create({
  input: {
    height: 56,
    width: 335,
    margin: 20,
    marginHorizontal: 20,
    marginVertical: 5,
    marginBottom: 5,
    opacity: 0.5,
    borderRadius: 218,
    backgroundColor: "#edeff3",
    padding: 20,
    fontSize: 17,
    fontWeight: "500",
    textAlign: "left",
    letterSpacing: 1,
  },
});
