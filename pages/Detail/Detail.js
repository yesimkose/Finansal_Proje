import React from "react";
import { View, Text, FlatList } from "react-native";
import DetailCard from "../../components/DetailCard/DetailCard";
import Error from "../../components/Error/Error";
import Loading from "../../components/Loading/Loading";
import useDetail from "../../hooks/useDetail/useDetail";

function Detail({ route }) {
  const { idMeal } = route.params;
  const { dataDetail, loading, error } = useDetail(idMeal);

  const renderDetail = ({ item }) => <DetailCard detail={item} />;
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return (
    <FlatList
      keyExtractor={(item) => item.idMeal}
      data={dataDetail.meals}
      renderItem={renderDetail}
    />
  );
}
export default Detail;
