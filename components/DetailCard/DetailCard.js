import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import YoutubeButton from "../YoutubeButton/YoutubeButton";
import styles from "./DetailCard.styles";

function DetailCard({ detail }) {
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image style={styles.image} source={{ uri: detail.strMealThumb }} />
        <Text style={styles.title}>{detail.strMeal}</Text>
        <Text style={styles.strArea}>{detail.strArea}</Text>
        <View
          style={{
            borderWidth: 2,
            borderColor: "#D4D7DD",
            borderBottomWidth: StyleSheet.hairlineWidth,
            alignSelf: "stretch",
          }}
        />
        <Text style={styles.strInstructions}>{detail.strInstructions}</Text>
        <YoutubeButton url={detail.strYoutube}>Watch on Youtube</YoutubeButton>
      </View>
    </View>
  );
}

export default DetailCard;
