import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
} from "react-native";
import BtnComponent from "../components/BtnComponent";

const bgImg = require("../assets/bgSplash.png");

export default function SplashScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={"#00D6D8"} barStyle={"light-content"} />
      <ImageBackground source={bgImg} style={style.image}>
        <BtnComponent
          ScreenTitle={"Sign In"}
          ScreenName={"SignInScreen"}
          customStyle={style.btnSignIn}
          navigation={navigation}
          backgroundColor={"#ffffff"}
          color={"rgba(0, 214, 216, 1)"}
        />
        <BtnComponent
          ScreenTitle={"Sign Up"}
          ScreenName={"SignUpScreen"}
          customStyle={style.btnSignUp}
          navigation={navigation}
          backgroundColor={"#FFEB00"}
          color={"rgba(0, 214, 216, 1)"}
        />
      </ImageBackground>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00D6D8",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 80,
  },
  btnSignIn: {
    backgroundColor: "white",
    marginVertical: 20,
  },
  btnSignUp: {
    backgroundColor: "#FFEB00",
    marginBottom: 50,
  },
  btnTextStyle: {
    color: "rgba(0, 214, 216, 1)",
  },
});
