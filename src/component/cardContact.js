import { Text, StyleSheet, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

export default function CardContact({
  id,
  contactItem,
  navigation,
  removeData,
}) {
  return (
    <View>
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EditContact", { id: id })}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeData(id)}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate("DetailContact", { id: id })}
      >
        <View>
          <Text style={styles.name}>{contactItem.name}</Text>
          <Text style={styles.wa}>Whatsapp : {contactItem.wa}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
  wa: {
    fontSize: 12,
    color: "gray",
  },
  icon: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
