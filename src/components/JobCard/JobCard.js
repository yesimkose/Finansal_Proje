import React from "react";
import { View, Image, Text, TouchableWithoutFeedback } from "react-native";
import styles from "./JobCard.styles";
import { MaterialIcons } from "@expo/vector-icons";
function JobCard({ job, onSelect }) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Text style={styles.title}>{job.name}</Text>
          <Text style={styles. company_name}>{job.company.name}</Text>
          <View style={styles.location}>
            <MaterialIcons name="place" size={20} color="#CD1818" />
            <Text> {job.locations[0].name}</Text>
          </View>

          <Text style={styles.level}>{job.levels && job.levels.length > 0
            ? job.levels[0].name
            : 'Unknown Level'}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default JobCard;
