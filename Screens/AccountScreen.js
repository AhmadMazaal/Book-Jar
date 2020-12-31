import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
// import { decode, encode } from "base-64";
// import { firebase } from "../Firebase/config";

import Logged from "./Logged";
// if (!global.btoa) {
//   global.btoa = encode;
// }
// if (!global.atob) {
//   global.atob = decode;
// }

const Stack = createStackNavigator();

export default function AccountScreen() {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState(null);
  // React.useEffect(() => {
  //   const usersRef = firebase.firestore().collection("users");
  //   firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       usersRef
  //         .doc(user.uid)
  //         .get()
  //         .then((document) => {
  //           const userData = document.data();
  //           setLoading(false);
  //           setUser(userData);
  //         })
  //         .catch((error) => {
  //           setLoading(false);
  //         });
  //     } else {
  //       setLoading(false);
  //     }
  //   });
  // }, []);
  React.useEffect(() => {}, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      // headerStyle: {
      // backgroundColor: "black",
      // height: 200,
      // elevation: 5,
      // shadowColor: "black",
      // shadowRadius: 5,
      // shadowOpacity: 0.1,
      // shadowOffset: {
      //   height: 3,
      //   width: 0,
      // },
      // },

      // headerTintColor: "#fff",
      // headerTitleStyle: {
      // fontWeight: "bold",
      // textAlign: "center",
      // },
      // headerTitleAlign: "center",
    >
      {user ? (
        <Stack.Screen name="Logged">
          {(props) => <Logged {...props} extraData={user} />}
        </Stack.Screen>
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Registration" component={RegistrationScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
