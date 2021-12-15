import React from 'react'
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';

function Error() {
    return <ActivityIndicator source={require('../../assets/error.json')} autoPlay/>
}
export default Error

