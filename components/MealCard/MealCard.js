import React from "react";
import {
  View,
  Image,
  Text,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import styles from "./MealCard.styles";

function MealCard({ meal, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container} onPress={onPress}>
        <ImageBackground
          style={styles.image}
          source={{ uri: meal.strMealThumb }}
        >
          <Text style={styles.title}>{meal.strMeal}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default MealCard;
