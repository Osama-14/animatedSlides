import React from 'react';
import { View, StyleSheet, Dimensions, ImageBackground } from 'react-native';

const { width, height } = Dimensions.get('window');

const SliderComponent = ({ images }) => {
  return (
    <View style={styles.container}>
      {/* {images.map((image, index) => (
        <ImageBackground key={index} source={image} style={styles.image} resizeMode="cover" />
      ))} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    height: height,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default SliderComponent;
