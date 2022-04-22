import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, RefreshControl } from "react-native";
import { ListItem, Avatar } from "react-native-elements";

import axios from "axios";

const DetailData = (props) => {
  const { title, body, id } = props.route.params;

  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getComment();
  }, []);

  // Create Function to fetch
  const getComment = () => {
    setIsLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        setComments(res.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error fetch data");
        setIsLoading(false);
      });
  };

  const _renderItem = ({ item }) => {
    return (
      <ListItem key={item.id.toString()} bottomDivider>
        <ListItem.Content>
          <ListItem.Title h4 numberOfLines={1}>
            {item.email}
          </ListItem.Title>
          <ListItem.Subtitle numberOfLines={2}>
            {`${item.name} - ${item.body}`}
          </ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  return (
    <View style={style.container}>
      <Text h2 style={{ fontWeight: "bold" }}>
        This Is Post Detail
      </Text>

      <Text h2 style={{ marginTop: 20 }}>
        {title}
      </Text>
      <Text style={{ marginTop: 20 }}>{body}</Text>
      <Text style={{ marginTop: 20, color: "grey" }}>Comments</Text>
      <FlatList
        data={comments}
        renderItem={_renderItem}
        keyExtractor={(item) => item.id.toString()}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={getComment} />
        }
      />
    </View>
  );
};

export default DetailData;

const style = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    padding: 16,
    flex: 1,
  },
});
