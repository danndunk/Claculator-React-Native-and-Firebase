import { Text, View, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import FIREBASE from "../config/firebase";

export default function DetailContact(props) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    FIREBASE.database()
      .ref("Contact/" + props.route.params.id)
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = { ...data };

        setContact(contactItem);
      });
  }, []);
  return (
    <View style={styles.pages}>
      <Text>Nama :</Text>
      <Text style={styles.text}>{contact.name}</Text>

      <Text>Whatsapp :</Text>
      <Text style={styles.text}>{contact.wa}</Text>

      <Text>Address :</Text>
      <Text style={styles.text}>{contact.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    padding: 20,
    margin: 30,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
