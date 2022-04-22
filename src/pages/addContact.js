import React, { useState } from "react";
import { Text, StyleSheet, View, TouchableOpacity, Alert } from "react-native";
import { TextInput } from "react-native-gesture-handler";

import FIREBASE from "../config/firebase/index";

export default function AddContact(props) {
  const [data, setData] = useState({
    name: "",
    wa: "",
    address: "",
  });

  const handleChange = (name, value) => {
    setData({
      ...data,
      [name]: value,
    });
  };

  const onSubmit = () => {
    if (data.name && data.wa && data.address) {
      const ContactReference = FIREBASE.database().ref("Contact");
      const contact = {
        name: data.name,
        wa: data.wa,
        address: data.address,
      };
      ContactReference.push(contact)
        .then((data) => {
          Alert.alert("Success", "Contact saved");
          props.navigation.replace("Todos");
        })
        .catch((error) => {
          console.log("error : ", error);
        });

      console.log(data);
      props.navigation.replace("Todos");
    } else {
      Alert.alert("Error", "Lengkapi data");
    }
  };
  return (
    <View style={styles.pages}>
      <Text style={styles.label}>Name :</Text>
      <TextInput
        placeholder="Name"
        onChangeText={(text) => handleChange("name", text)}
        value={data.name}
        style={styles.TextInput}

        // keyboardType={keyboardType}
      ></TextInput>

      <Text style={styles.label}>Whatsapp :</Text>
      <TextInput
        placeholder="Whatsapp"
        style={styles.TextInput}
        value={data.wa}
        onChangeText={(text) => handleChange("wa", text)}
        keyboardType="numbers-and-punctuation"
      ></TextInput>

      <Text style={styles.label}>Alamat :</Text>
      <TextInput
        placeholder="Adress"
        style={styles.TextInput}
        multiline={true}
        numberOfLines={4}
        value={data.address}
        onChangeText={(text) => handleChange("address", text)}
      ></TextInput>

      <TouchableOpacity style={styles.tombol} onPress={() => onSubmit()}>
        <Text style={styles.textTombol}>SUBMIT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  pages: {
    flex: 1,
    padding: 30,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  TextInputArea: {
    textAlignVertical: "top",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  tombol: {
    backgroundColor: "black",
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
  },
  textTombol: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
