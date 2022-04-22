import react, { useEffect, useState } from "react";
import { StatusBar } from "native-base";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import FIREBASE from "../config/firebase";
import CardContact from "../component/cardContact";
import { Ionicons } from "@expo/vector-icons";

export default function Todos(props) {
  const [contacts, setContacts] = useState({});
  const [contactKey, setContactKey] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    FIREBASE.database()
      .ref("Contact")
      .once("value", (querySnapShot) => {
        let data = querySnapShot.val() ? querySnapShot.val() : {};
        let contactItem = { ...data };

        setContacts(contactItem);
        setContactKey(Object.keys(contactItem));
      });
  };

  const removeData = (id) => {
    FIREBASE.database()
      .ref("Contact/" + id)
      .remove();
    getData();
  };

  return (
    <View style={styles.page}>
      <StatusBar backgroundColor="#1976d2" barStyle="light-content" />

      <View style={styles.header}>
        <Text style={styles.title}>Contact List</Text>
        <View style={styles.garis}></View>
      </View>

      <View style={styles.listContact}>
        {contactKey.length > 0 ? (
          contactKey.map((key) => (
            <CardContact
              key={key}
              contactItem={contacts[key]}
              id={key}
              {...props}
              removeData={removeData}
            />
          ))
        ) : (
          <Text>Daftar Kosong</Text>
        )}
      </View>

      <View style={styles.wrapperButton}>
        <TouchableOpacity
          style={styles.btnTambah}
          onPress={() => props.navigation.navigate("AddContact")}
        >
          <Ionicons name="person-add-sharp" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  garis: {
    borderWidth: 1,
    marginTop: 10,
  },
  wrapperButton: {
    flex: 1,
    position: "absolute",
    right: 0,
    margin: 30,
    bottom: 0,
  },
  listContact: {
    paddingHorizontal: 30,
    marginTop: 20,
  },
  btnTambah: {
    padding: 15,
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
