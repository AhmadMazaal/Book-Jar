import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Book from "../Components/Book";
import Colors from "../Constants/Colors";
// import { firebase } from "../Firebase/config";

import DetailsScreen from "./DetailsScreen";

export default function HomeScreen(props) {
  const [popularBooks, setPopularBooks] = React.useState([]);

  // old fetch ==> `https://www.googleapis.com/books/v1/volumes?q=nicholas+sparks&key=AIzaSyAtjF-Dwd3XE__QoyCU1-fewK18rg4dFZ8`
  React.useEffect(() => {
    fetch("http://192.168.0.101:3001/viewBooks/getBooks")
      .then((data) => data.json())
      .then((res) => setPopularBooks(res.book))
      .catch((err) => alert(err));

    return () => {};
  }, []);

  return (
    <ScrollView stlye={{ backgroundColor: "white" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Recommended Books</Text>
      </View>
      <View style={styles.container}>
        {popularBooks
          // .filter((book) => book._id !== undefined)
          .map((book) => (
            <Book {...book} key={book._id} type="customized" />
          ))}

        <Text></Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    // marginVertical: 100,
    flexWrap: "wrap",
    alignItems: "center",
  },
  title: {
    color: "#333",
    fontSize: 25,
    textAlign: "center",
    borderBottomWidth: 3,
    paddingBottom: 10,
    borderBottomColor: Colors.aestheticRed,
  },
  titleContainer: {
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "black",
    padding: 30,
  },
});

// const [entityText, setEntityText] = React.useState("");
// const [entities, setEntities] = React.useState([]);
// const entityRef = firebase.firestore().collection("entities");
// const userID = props.extraData.id;

// React.useEffect(() => {
//   entityRef
//     .where("authorID", "==", userID)
//     .orderBy("createdAt", "desc")
//     .onSnapshot(
//       (querySnapshot) => {
//         const newEntities = [];
//         querySnapshot.forEach((doc) => {
//           const entity = doc.data();
//           entity.id = doc.id;
//           newEntities.push(entity);
//         });
//         setEntities(newEntities);
//       },
//       (error) => {
//         console.log(error);
//       }
//     );
// }, []);

// const onAddButtonPress = () => {
//   if (entityText && entityText.length > 0) {
//     const timestamp = firebase.firestore.FieldValue.serverTimestamp();
//     const data = {
//       text: entityText,
//       authorID: userID,
//       createdAt: timestamp,
//     };
//     entityRef
//       .add(data)
//       .then((_doc) => {
//         setEntityText("");
//         Keyboard.dismiss();
//       })
//       .catch((error) => {
//         alert(error);
//       });
//   }
// };

// const renderEntity = ({ item, index }) => {
//   return (
//     <View style={styles.entityContainer}>
//       <Text style={styles.entityText}>
//         {index}. {item.text}
//       </Text>
//     </View>
//   );
// };
