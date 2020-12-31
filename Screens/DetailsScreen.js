import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Linking,
} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Colors from "../Constants/Colors";
import Header from "../Components/Header";
import axios from "axios";

export default function DetailsScreen(props) {
  const { setIsHidden, book } = props;
  const [favorites, setFavorites] = React.useState([]);

  const setFavoritesHandler = (e) => {
    setFavorites(e);
    axios
      .post("http://192.168.0.102", { favorites })
      .then((res) => alert(res))
      .catch((err) => alert(err));
  };
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor={Colors.aestheticRed} />
      <Header title="Book Jar" />
      {props.type !== "customized" ? (
        <View>
          <TouchableOpacity
            onPress={() => setIsHidden(false)}
            style={styles.back}
          >
            <SimpleLineIcons
              name="arrow-left"
              size={24}
              color={Colors.aestheticRed}
            />
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>

          <View style={styles.bookContainer}>
            <Text style={styles.title}>Title: {book.volumeInfo.title}</Text>
            <Image
              style={styles.bookImage}
              source={{
                uri: book.volumeInfo.imageLinks.smallThumbnail,
              }}
            />
            <View style={styles.bookDetails}>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Book author(s):{" "}
                </Text>
              </Text>
              {book.volumeInfo.authors.map((author) => (
                <View style={{ paddingLeft: 10 }} key={author}>
                  <Text>○ {author}</Text>
                </View>
              ))}

              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Published At:{" "}
                </Text>
                {book.volumeInfo.publishedDate}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Avarage Rating:{" "}
                </Text>
                {book.volumeInfo.averageRating !== undefined ? (
                  book.volumeInfo.averageRating
                ) : (
                  <Text>Not available</Text>
                )}
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                  Number of Pages:
                </Text>{" "}
                {book.volumeInfo.pageCount}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                  Price:{" "}
                </Text>
                {book.saleInfo.saleability === "NOT_FOR_SALE" ? (
                  <Text>Not for sale</Text>
                ) : book.saleInfo.listPrice !== undefined ? (
                  <Text>
                    {book.saleInfo.listPrice.amount}{" "}
                    {book.saleInfo.listPrice.currencyCode}
                  </Text>
                ) : (
                  "FREE"
                )}
              </Text>
              <View style={{ margin: 10, marginTop: 25 }}>
                <Button
                  color={Colors.aestheticBeige}
                  onPress={() => Linking.openURL(book.saleInfo.buyLink)}
                  title="Add to favorites"
                />
              </View>
              {book.saleInfo.saleability === "FOR_SALE" ? (
                <View style={{ margin: 10, marginTop: 25 }}>
                  <Button
                    color={Colors.aestheticBeige}
                    onPress={() => Linking.openURL(book.saleInfo.buyLink)}
                    title="Buy Book"
                  />
                </View>
              ) : (
                <Text></Text>
              )}
            </View>
            <Text
              style={{
                borderBottomWidth: 2,
                textAlign: "center",
                fontSize: 20,
                borderBottomColor: Colors.aestheticRed,
                paddingBottom: 10,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              Overview:
            </Text>
            <Text>{book.volumeInfo.description}</Text>
          </View>
        </View>
      ) : (
        // ----------------------- our boooks -----------------------
        <View>
          <TouchableOpacity
            onPress={() => setIsHidden(false)}
            style={styles.back}
          >
            <SimpleLineIcons
              name="arrow-left"
              size={24}
              color={Colors.aestheticRed}
            />
            <Text style={styles.backTxt}>Back</Text>
          </TouchableOpacity>

          <View style={styles.bookContainer}>
            <Text style={styles.title}>Title: {book.BookName}</Text>
            <Image
              style={styles.bookImage}
              source={{
                uri: book.CoverImage,
              }}
            />
            <View style={styles.bookDetails}>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Book author(s):{" "}
                </Text>
              </Text>

              <View style={{ paddingLeft: 10 }} key={book.Author}>
                <Text>○ {book.Author}</Text>
              </View>

              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Published At:{" "}
                </Text>
                {book.PublishDate}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 23 }}>
                  Avarage Rating:{" "}
                </Text>
                {book.AverageRating !== undefined ? (
                  book.AverageRating
                ) : (
                  <Text>Not available</Text>
                )}
              </Text>

              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                  Number of Pages:
                </Text>{" "}
                {book.NumberOfPages}
              </Text>
              <Text>
                <Text style={{ fontWeight: "bold", lineHeight: 22 }}>
                  Price:{" "}
                </Text>
                {book.Price === "Not for sale" ? (
                  <Text>Not for sale</Text>
                ) : book.Price !== undefined ? (
                  <Text>{book.Price} </Text>
                ) : (
                  "FREE"
                )}
              </Text>

              <View style={{ margin: 10, marginTop: 25 }}>
                <Button
                  color={Colors.aestheticBeige}
                  onPress={() => setFavoritesHandler(book.BookName)}
                  title="Add to favorites"
                />
              </View>
              <View style={{ margin: 10, marginTop: 25 }}>
                <Button
                  color={Colors.aestheticBeige}
                  onPress={() => Linking.openURL(book.saleInfo.buyLink)}
                  title="Buy Book"
                />
              </View>
            </View>
            <Text
              style={{
                borderBottomWidth: 2,
                textAlign: "center",
                fontSize: 20,
                borderBottomColor: Colors.aestheticRed,
                paddingBottom: 10,
                alignSelf: "center",
                marginBottom: 10,
              }}
            >
              Overview:
            </Text>
            <Text>{book.OverView}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    margin: 0,
    padding: 0,
  },
  bookContainer: {
    padding: 20,
  },
  back: {
    flexDirection: "row",
    padding: 13,
    alignItems: "center",
  },
  title: {
    fontSize: 25,
    textAlign: "center",
  },
  bookImage: {
    width: 160,
    height: 220,
    margin: 25,
    alignSelf: "center",
  },
  bookDetails: {
    fontSize: 15,
  },
  backTxt: {
    fontSize: 22,
    paddingLeft: 5,
    color: "black",
  },
});
