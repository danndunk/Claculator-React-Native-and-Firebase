import { StatusBar } from "native-base";
import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Hoshi } from "react-native-textinput-effects";
import { Modal } from "react-native";

let data = [
  { todo: "Beli roti", check: false },
  { todo: "Beli tomat", check: false },
  { todo: "Beli bedak", check: false },
  { todo: "Beli lauk", check: false },
  { todo: "Beli topi", check: false },
];

export default function Todo() {
  const [todo, setTodo] = useState();

  const addNewTodo = () => {
    data.push({
      todo: todo,
      check: false,
    });
    setTodo("");
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#1976d2" barStyle="light-content" />
      <View
        style={{
          backgroundColor: "#2196f3",
          paddingVertical: 15,
          elevation: 1,
          marginBottom: 10,
        }}
      >
        <Text
          style={{
            color: "#FFFFFF",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          TODOLIST
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 5,
              borderWidth: 1,
              paddingVertical: 15,
              borderRadius: 5,
              backgroundColor: "#FFFFFF",
              borderColor: "#e0e0e0",
            }}
          >
            <Text style={{ marginLeft: 10 }}>{item.todo}</Text>
          </View>
        )}
        keyExtractor={(item) => item.todo}
        style={{ flex: 1, backgroundColor: "#f5f5f5" }}
      />

      <Hoshi
        label={"Add Todo"}
        // this is used as active border color
        borderColor={"#b76c94"}
        // active border height
        borderHeight={3}
        inputPadding={16}
        // this is used to set backgroundColor of label mask.
        // please pass the backgroundColor of your TextInput container.
        backgroundColor={"#F9F7F6"}
        value={todo}
        onChangeText={(text) => setTodo(text)}
        onSubmitEditing={() => addNewTodo()}
      />

      <Modal isVisible={true}>
        <View style={{ flex: 1 }}>
          <Text>I am the modal content!</Text>
        </View>
      </Modal>
    </View>
  );
}
