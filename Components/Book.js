import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import DetailsScreen from "../Screens/DetailsScreen";

export default function Book(props) {
  // const apiKey = "AIzaSyAtjF-Dwd3XE__QoyCU1-fewK18rg4dFZ8";
  // <View style={{ ...styles.box, ...props.style }}>{props.children}</View>
  const [isHidden, setIsHidden] = React.useState(false);
  return (
    <View>
      {props.type !== "customized" ? (
        <TouchableOpacity
          style={{ ...styles.box, ...props.style }}
          onPress={() => setIsHidden(true)}
        >
          <Image
            style={{ width: 160, height: 250 }}
            source={{
              uri: props.volumeInfo.imageLinks.smallThumbnail,
            }}
          />
          <Modal
            style={styles.modalContent}
            visible={isHidden}
            animationType={"slide"}
            onRequestClose={() => setIsHidden(false)}
          >
            <DetailsScreen setIsHidden={setIsHidden} book={props} />
          </Modal>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={{ ...styles.box, ...props.style }}
          onPress={() => setIsHidden(true)}
        >
          <Image
            style={{ width: 160, height: 250 }}
            source={{
              uri: props.CoverImage,
            }}
          />
          <Modal
            style={styles.modalContent}
            visible={isHidden}
            animationType={"slide"}
            onRequestClose={() => setIsHidden(false)}
          >
            <DetailsScreen
              setIsHidden={setIsHidden}
              book={props}
              type="customized"
            />
          </Modal>
        </TouchableOpacity>
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    marginVertical: 10,
    marginHorizontal: 10,
    width: 160,
    height: 250,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 5,
    elevation: 3,
  },
});
