import React, { useState } from "react";
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
// import { firebase } from "../Firebase/config";
import axios from "axios";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "../Constants/Colors";
export default function RegistrationScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onFooterLinkPress = () => {
    navigation.navigate("Login");
  };
  // if (!global.btoa) {
  //   global.btoa = encode;
  // }
  // if (!global.atob) {
  //   global.atob = decode;
  // }

  // const onRegisterPress = () => {
  //   if (password !== confirmPassword) {
  //     alert("Passwords don't match.");
  //     return;
  //   }
  //   firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       const uid = response.user.uid;
  //       const data = {
  //         id: uid,
  //         email,
  //         fullName,
  //       };
  //       const usersRef = firebase.firestore().collection("users");
  //       usersRef
  //         .doc(uid)
  //         .set(data)
  //         .then(() => {
  //           navigation.navigate("Home", { user: data });
  //         })
  //         .catch((error) => {
  //           alert(error);
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };
  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!fullName || !email || !password || !confirmPassword) {
      alert("Please fill all the required fields!");
      return;
    }
    const user = {
      fullName,
      email,
      password,
      confirmPassword,
    };
    axios
      .post("http://192.168.0.102:3001/users/signup", user)
      .then(
        (res) => {
          alert(res.data.message);
          if (res.status === 201) navigation.navigate("Home", user);
        },
        (err) => alert(err)
      )
      .catch((err) => alert(err.message));
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.push("Login")}
        style={styles.back}
      >
        <SimpleLineIcons
          name="arrow-left"
          size={24}
          color={Colors.aestheticBlue}
        />
        <Text style={styles.backTxt}>Back to log in</Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          //   flex: 1,
          style={{ width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
          {/* <Image style={styles.logo} source={require("../assets/book.png")} /> */}
          <TextInput
            style={styles.input}
            placeholder="Full Name"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setFullName(text)}
            value={fullName}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#aaaaaa"
            onChangeText={(text) => setEmail(text)}
            value={email}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Password"
            onChangeText={(text) => setPassword(text)}
            value={password}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholderTextColor="#aaaaaa"
            secureTextEntry
            placeholder="Confirm Password"
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
            underlineColorAndroid="transparent"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => onRegisterPress()}
          >
            <Text style={styles.buttonTitle}>Create account</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Already got an account?{" "}
              <Text
                onPress={() => onFooterLinkPress()}
                style={styles.footerLink}
              >
                Log in
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    // flex: 1,
    alignItems: "center",
  },
  title: {},
  logo: {
    // flex: 1,
    height: "auto",
    width: 160,
    alignSelf: "center",
    margin: 20,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30,
    paddingLeft: 16,
  },
  button: {
    backgroundColor: Colors.aestheticBlue,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footerView: {
    // flex: 1,
    alignItems: "center",
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: "#2e2e2d",
  },
  footerLink: {
    color: Colors.aestheticBlue,
    fontWeight: "bold",
    fontSize: 16,
  },
  back: {
    flexDirection: "row",
    padding: 13,
    alignItems: "center",
  },
  backTxt: {
    fontSize: 19,
    paddingLeft: 5,
    color: "black",
  },
});
