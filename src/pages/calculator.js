import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Calculator() {
  const [hitung, setHitung] = useState(0);

  const masukkanAngka = (value) => {
    if (hitung == 0) {
      setHitung(value);
    } else {
      setHitung(hitung + "" + value);
    }
  };

  const hitungHasil = () => {
    let hasil = eval(hitung);
    setHitung(hasil);
  };

  return (
    <View style={style.container}>
      <StatusBar barStyle="light-content" backgroundColor="#212121" />

      <View style={style.titleDisplay}>
        <Text style={style.titleText}>Display</Text>
      </View>

      <View style={style.containerDisplay}>
        <Text style={style.display}>{hitung}</Text>
      </View>

      <View style={style.containerBoard}>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => setHitung(0)}
        >
          <Text style={style.textBoard}>Clear</Text>
        </TouchableOpacity>
      </View>

      <View style={style.containerBoard}>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(1)}>
          <Text style={style.textBoard}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(2)}>
          <Text style={style.textBoard}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => masukkanAngka("-")}
        >
          <Text style={style.textBoard}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => masukkanAngka("+")}
        >
          <Text style={style.textBoard}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={style.containerBoard}>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(3)}>
          <Text style={style.textBoard}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(4)}>
          <Text style={style.textBoard}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => masukkanAngka("/")}
        >
          <Text style={style.textBoard}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => masukkanAngka("*")}
        >
          <Text style={style.textBoard}>*</Text>
        </TouchableOpacity>
      </View>

      <View style={style.containerBoard}>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(5)}>
          <Text style={style.textBoard}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(6)}>
          <Text style={style.textBoard}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => masukkanAngka("%")}
        >
          <Text style={style.textBoard}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.boardOperator}
          onPress={() => hitungHasil()}
        >
          <Text style={style.textBoard}>=</Text>
        </TouchableOpacity>
      </View>

      <View style={style.containerBoard}>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(7)}>
          <Text style={style.textBoard}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(8)}>
          <Text style={style.textBoard}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(9)}>
          <Text style={style.textBoard}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.board} onPress={() => masukkanAngka(0)}>
          <Text style={style.textBoard}>0</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFA0A0",
  },
  titleDisplay: {
    marginLeft: 30,
    marginTop: 20,
  },
  titleText: {
    fontSize: 28,
    color: "white",
  },
  containerDisplay: {
    flex: 1,
    backgroundColor: "#ECECEC",
    borderRadius: 10,
    marginHorizontal: 20,
    marginVertical: 30,
  },
  display: {
    color: "black",
    fontSize: 50,
    textAlign: "right",
    marginHorizontal: 10,
    marginVertical: "auto",
  },
  containerBoard: {
    flexDirection: "row",
    marginBottom: 10,
    marginHorizontal: 20,
  },
  board: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#FF5757",
  },
  boardOperator: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 5,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#930707",
  },
  textBoard: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontSize: 50,
  },
});
