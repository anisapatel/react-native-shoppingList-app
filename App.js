import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  Button,
  Alert,
  Platform,
  Dimensions,
  FlatList,
} from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

export default function App() {
  const [items, setItems] = useState([
    { id: 1, text: "Milk" },
    { id: 2, text: "Eggs" },
    { id: 3, text: "Bread" },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id != id);
    });
  };

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter an item", { text: "Ok" });
    }
    setItems((prevItems) => {
      return [{ id: Math.random() * 10, text }, ...prevItems];
    });
  };
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

// export default function App() {
//   console.log(Dimensions.get("screen"));
//   const handlePress = () => {
//     console.log("text pressed");
//   };
//   return (
//     <SafeAreaView style={[styles.container, containerStyle]}>
//       <View
//         style={{ backgroundColor: "dodgerblue", width: "100%", height: "30%" }}
//       ></View>
//       <Text onPress={handlePress}>Hello, my name is Anisa!</Text>
//       {/* <Image source={require("./assets/icon.png")} /> */}
//       <TouchableOpacity onPress={() => console.log("image tapped")}>
//         {/* <View
//           style={{ width: 200, height: 70, backgroundColor: "purple" }}
//         ></View> */}
//         <Image
//           // fadeDuration={1000}
//           // blurRadius={10}
//           source={{
//             uri: "https://picsum.photos/200/300",
//             width: 200,
//             height: 300,
//           }}
//         />
//       </TouchableOpacity>
//       <Button
//         title="Click Me"
//         color="blue"
//         // onPress={() => alert("button tapped")}
//         onPress={() =>
//           Alert.alert("You clicked", "My message", [
//             { text: "Yes", onPress: () => console.log("yes button tapped") },
//             { text: "No", onPress: () => console.log("no button tapped") },
//           ])
//         }
//       />
//       <Button
//         title="Click again"
//         onPress={() =>
//           Alert.prompt("Second title", "Second message", (text) =>
//             console.log(text)
//           )
//         }
//       />
//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const containerStyle = { backgroundColor: "green" };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     // paddingTop: Platform.OS === "android" ? 20 : 0,
//     paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
// });
