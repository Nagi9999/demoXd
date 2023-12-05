import React from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  Pressable,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BtnComponent from "../components/BtnComponent";
import InputSign from "../components/InputSign";

export default function ForgetPass({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar barStyle={"dark-content"} />
      <Pressable
        onPress={() => {
          navigation.navigate("SplashScreen");
        }}
      >
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          style={style.backIcon}
        />
      </Pressable>
      <Text style={style.forgotPassword}>Forgot Password</Text>

      <View style={style.emailContainer}>
        <InputSign placeholder="Email" secureTextEntry={false} />
        <BtnComponent
          ScreenTitle={"Send Email"}
          ScreenName={"SplashScreen"}
          customStyle={style.btnSend}
          navigation={navigation}
          backgroundColor={"rgba(0, 214, 216, 1)"}
          color={"#ffffff"}
        />
      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  backIcon: {
    paddingTop: 60,
    marginHorizontal: 10,
  },
  forgotPassword: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 35,
  },
  emailContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  btnSend: {
    backgroundColor: "rgba(0, 214, 216, 0.1)",
    marginVertical: 20,
    alignSelf: "center",
  },
});
