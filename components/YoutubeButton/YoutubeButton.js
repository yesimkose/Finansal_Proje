import React, { useCallback } from "react";
import { Alert, Button, Linking, StyleSheet, View } from "react-native";

const YoutubeButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);
  return <Button color="#8E0505" title={children} onPress={handlePress} />;
};

export default YoutubeButton;
