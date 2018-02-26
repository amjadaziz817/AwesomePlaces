import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const listItem = props => (
  <TouchableOpacity onPress={props.onItemPressed}>
    <View style={styles.listItem}>
      <Image resizeMode="cover" source={props.placeImage} style={styles.placeImage} />
      <Text>{props.placeName}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: '100%',
        backgroundColor: '#eee',
        padding: 10,
        marginBottom: 5,
        flexDirection: "row",
        alignItems: 'center'
    },
    placeImage: {
        marginRight: 10,
        width: 30,
        height: 30
    }
});

export default listItem;
