import React from "react";
import { StyleSheet, Button, Text, View } from "react-native";
// import { firebase } from "../Firebase/config";
import { YellowBox } from "react-native";
import _ from "lodash";
// const signOut = () => {
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       alert("Sign out successful!");
//     })
//     .catch(function (error) {
//       alert(error);
//     });
// };
const Logged = (props) => {
  return (
    <View>
      <Text>Logged in as user</Text>
      <Button title="Log out" onPress={() => signOut()} />
    </View>
  );
};

export default Logged;

const styles = StyleSheet.create({});
YellowBox.ignoreWarnings(["Setting a timer"]);
const _console = _.clone(console);
console.warn = (message) => {
  if (message.indexOf("Setting a timer") <= -1) {
    _console.warn(message);
  }
};
