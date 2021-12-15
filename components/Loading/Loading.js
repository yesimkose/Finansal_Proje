import React from 'react'
import LottieView from 'lottie-react-native';
import { ActivityIndicator } from 'react-native';

function Loading() {
    return <ActivityIndicator source={require('../../assets/loading.json')} autoPlay/>
}
export default Loading
