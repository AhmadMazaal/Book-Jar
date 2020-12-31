import React, { useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Colors from "../Constants/Colors";
// import { firebase } from "../Firebase/config";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // firebase.firestore().enablePersistence();

  // const onLoginPress = () => {
  //   firebase
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((response) => {
  //       const uid = response.user.uid;
  //       const usersRef = firebase.firestore().collection("users");
  //       usersRef
  //         .doc(uid)
  //         .get()
  //         .then((firestoreDocument) => {
  //           if (!firestoreDocument.exists) {
  //             alert("User does not exist anymore.");
  //             return;
  //           }
  //           const user = firestoreDocument.data();
  //           navigation.navigate("Home", { user });
  //         })
  //         .catch((error) => {
  //           alert(error);
  //         });
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  // };
  const onFooterLinkPress = () => {
    navigation.navigate("Registration");
  };

  return (
    <View>
      <Text style={styles.quoteTitle}>
        “A reader lives a thousand lives before he dies . . . The man who never
        reads lives only one.” – George R.R. Martin
      </Text>
      <View style={styles.container}>
        <KeyboardAwareScrollView
          //   flex: 1,
          style={{ width: "100%" }}
          keyboardShouldPersistTaps="always"
        >
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
          <TouchableOpacity
            style={styles.button}
            onPress={() => onLoginPress()}
          >
            <Text style={styles.buttonTitle}>Log in</Text>
          </TouchableOpacity>
          <View style={styles.footerView}>
            <Text style={styles.footerText}>
              Don't have an account?{" "}
              <Text onPress={onFooterLinkPress} style={styles.footerLink}>
                Sign up
              </Text>
            </Text>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  quoteTitle: {
    margin: 30,
    fontSize: 20,
    fontStyle: "italic",
  },
  container: {
    // flex: 1,
    marginTop: 20,
    alignItems: "center",
  },
  title: {},
  logo: {
    // flex: 1,
    height: 120,
    width: 90,
    alignSelf: "center",
    margin: 30,
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
});
