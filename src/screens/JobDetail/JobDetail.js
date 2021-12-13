import React from 'react'
import { View,Text,FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch/useFetch';
import Config from "../../../config"
import styles from './JobDetail.styles'
import JobDetailCard from '../../components/JobDetail/JobDetailCard';
import RenderHtml from 'react-native-render-html';
import { useWindowDimensions } from 'react-native';
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
import FavoriteButton from '../../components/Button/FavoriteButton';


function JobDetail({route}) {
    const { id } = route.params;
    const { loading, error, data } = useFetch(`${Config.API_DETAIL_URL}/${id}`);
console.log(data)


const { width } = useWindowDimensions();

const source = {
  html: `${data.contents}`
};


if (error) {
  return <Error />;
}

if (loading) {
  return <Loading />;
}

    
    return (
      <View>
         
        <RenderHtml
      contentWidth={width}
      source={source}
   />
   <FavoriteButton/>
      </View>
      
    )
}

export default JobDetail
