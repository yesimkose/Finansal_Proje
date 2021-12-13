import React from 'react'
import { FlatList } from 'react-native';
import JobCard from '../../components/JobCard/JobCard';
import useFetch from "../../hooks/useFetch/useFetch";
import Config from '../../../config'
import Error from '../../components/Error/Error';
import Loading from '../../components/Loading/Loading';
function Jobs({navigation}) {
    const { loading, data, error } = useFetch(Config.API_JOBS_URL);
console.log(data)
console.log(data.results)
  const handleJobSelect = (id) => {
    navigation.navigate("DetailPage",{id});
  };

  const renderJob= ({ item }) => (
    <JobCard job={item} onSelect={()=>handleJobSelect(item.id)} />
  );
  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }
  return <FlatList style={{backgroundColor:"white"}} data={data.results} renderItem={renderJob} />;
}

export default Jobs
