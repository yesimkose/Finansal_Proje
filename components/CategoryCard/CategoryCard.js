import React from 'react'
import {View,Text,Image,TouchableWithoutFeedback} from 'react-native'
import styles from './CategoryCard.styles'

function CategoryCard({category,onSelect}) {


    return (
      <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <View style={styles.body_container}>
          <Image source={{uri:category.strCategoryThumb}} style={styles.image}/>
          <Text style={styles.title}>{category.strCategory}</Text>
          </View>
      </View>
      </TouchableWithoutFeedback>
    )
}

export default CategoryCard
