import React, { useState } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  Pressable,
  SafeAreaView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import BtnComponent from "../components/BtnComponent";
import { Entypo } from "@expo/vector-icons";
import InputSign from "../components/InputSign";

export default function SignInScreen({ navigation }) {
  const [checked, setChecked] = useState(true);
  const [btnBackgroundColor, setBtnBackgroundColor] = useState(
    "rgba(0, 214, 216, 0.1)"
  );
  const [btnTextColor, setBtnTextColor] = useState("rgba(0, 214, 216, 1)");

  const handleInputChange = (text, inputType) => {
    if (inputType === "password" && text.length > 0) {
      setBtnBackgroundColor("rgba(0, 214, 216, 1)"), setBtnTextColor("#ffffff");
    } else {
      setBtnBackgroundColor("rgba(0, 214, 216, 0.1)"),
        setBtnTextColor("rgba(0, 214, 216, 1)");
    }
  };

  const SignInData={
    ScreenTitle:"Sign In & Continue",
    ScreenName:"SplashScreen",
    customStyle:style.btnSignIn,
    navigation:navigation,
    backgroundColor:btnBackgroundColor,
    color:btnTextColor,
  }

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
      <Text style={style.signIn}>Sign In</Text>
      <View style={style.multiInput}>
        <InputSign
          placeholder="Email"
          secureTextEntry={false}
          onInputChange={(text) => handleInputChange(text, "email")}
        />
        <InputSign
          placeholder="Password"
          secureTextEntry={true}
          onInputChange={(text) => handleInputChange(text, "password")}
        />
      </View>

      <View style={style.underInput}>
        <View style={style.checkbox}>
          <Pressable
            style={[style.checkboxBase, checked && style.checkboxChecked]}
            onPress={() => setChecked(!checked)}
          >
            {!checked && (
              <Ionicons name="checkmark-circle" size={24} color="#00d6d8" />
            )}
          </Pressable>
          <Text style={style.checkboxText}>Remember Me</Text>
        </View>

        <Pressable
          onPress={() => {
            navigation.navigate("ForgetPass");
          }}
        >
          <Text style={style.checkboxText}>Forgot your Password?</Text>
        </Pressable>
      </View>

      <BtnComponent {...SignInData}
      />
      <Text style={style.txtOr}>OR</Text>

      <View style={style.socialMedia}>
        <Entypo
          name="facebook-with-circle"
          size={56}
          color="#4267b2"
          style={style.facebook}
        />
        <Entypo
          name="twitter-with-circle"
          size={56}
          color="#1c9deb"
          style={style.facebook}
        />
      </View>

      <View style={style.termContent}>
        <Text style={style.termOfUse}>
          By signing in, creating an account, or checking out as a Guest, you
          are agreeing to our Terms of Use and our Privacy Policy
        </Text>
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
  signIn: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginTop: 35,
  },

  multiInput: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  underInput: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
    justifyContent: "space-between",
  },
  checkbox: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkboxChecked: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderStyle: "solid",
    backgroundColor: "#ffffff",
    borderWidth: 2,
    borderColor: "#d1dddf",
  },
  checkboxBase: {
    width: 24,
    height: 24,
  },
  checkboxText: {
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "left",
    color: "#afc1c4",
    paddingHorizontal: 5,
  },

  btnSignIn: {
    marginVertical: 20,
    alignSelf: "center",
  },

  txtOr: {
    width: 25,
    height: 18,
    fontSize: 15,
    alignSelf: "center",
    color: "#afc1c4",
    fontWeight: "500",
    textAlign: "center",
  },
  socialMedia: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  facebook: {
    marginHorizontal: 8,
    width: 56,
    height: 56,
    marginVertical: 20,
  },
  termContent: {
    flex: 1,
    justifyContent: "flex-end",
  },

  termOfUse: {
    fontSize: 11,
    fontWeight: "normal",
    textAlign: "center",
    color: "#afc1c4",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
