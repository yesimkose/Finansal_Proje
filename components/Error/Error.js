import React from 'react'
import { ActivityIndicator } from 'react-native'


function Error() {
    return <ActivityIndicator source={require('../../assets/error.json')} autoPlay/>
}
export default Error

