import React from "react";
import { FlatList, Text, View } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import Config from "../../config";
import useFetch from "../../hooks/useFetch/useFetch";
import styles from "./Categories.styles";

function Categories({ navigation }) {
  const { data, loading, error } = useFetch(`${Config.API_URL}`);

  const handleMealSelected = (strCategory) => {
    navigation.navigate("MealsPage", { strCategory });
  };

  const renderCategory = ({ item }) => (
    <CategoryCard
      category={item}
      onSelect={() => handleMealSelected(item.strCategory)}
    />
  );

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <FlatList
      keyExtractor={(item) => item.strCategory}
      style={styles.container}
      data={data.categories}
      renderItem={renderCategory}
    />
  );
}

export default Categories;
