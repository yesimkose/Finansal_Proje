import React from "react";
import { FlatList } from "react-native";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import MealCard from "../../components/MealCard/MealCard";
import Config2 from "../../config";
import useMeal from "../../hooks/useMeal/useMeal";

function Meals({ route, navigation }) {
  const { strCategory } = route.params;
  const { dataMeal, loading, error } = useMeal(strCategory);

  console.log("api2", Config2.API_URL2);
  console.log("daa", dataMeal);

  const handleMealDetail = (idMeal) => {
    navigation.navigate("DetailPage", { idMeal });
  };

  const renderMeals = ({ item }) => (
    <MealCard meal={item} onPress={() => handleMealDetail(item.idMeal)} />
  );
  // if (error) {
  //   return <Error />;
  // }

  // if (loading) {
  //   return <Loading />;
  // }
  return (
    <FlatList
      keyExtractor={(item) => item.idMeal}
      data={dataMeal.meals}
      renderItem={renderMeals}
    />
  );
}

export default Meals;
