import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

const BtnComponent = ({
  ScreenTitle,
  ScreenName,
  customStyle,
  navigation,
  backgroundColor,
  color,
}) => {
  return (
    <Pressable
      onPress={() => {
        navigation.navigate(ScreenName);
      }}
    >
      <View style={[customStyle, style.btnStyle, { backgroundColor }]}>
        <Text style={[style.textStyle, { color }]}>{ScreenTitle}</Text>
      </View>
    </Pressable>
  );
};

export default BtnComponent;

const style = StyleSheet.create({
  btnStyle: {
    width: 335,
    height: 56,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 118,
  },

  textStyle: {
    fontWeight: "500",
    fontSize: 17,
    textAlign: "center",
  },
});
