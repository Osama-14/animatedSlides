// import React from 'react';
// import { View, Button, StyleSheet } from 'react-native';
// import SliderComponent from '../components/SliderComponent';

// const HomeScreen = ({ navigation }) => {
  // const sliderImages = [
  //   require('../assets/image1.jpeg'),
  //   require('../assets/image2.jpeg'),
  //   require('../assets/image3.jpeg'),
  // ];

//   return (
//     <View style={styles.container}>
//       <SliderComponent images={sliderImages} />
//       <Button
//         title="Continue to Home"
//         onPress={() => navigation.navigate('Main')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default HomeScreen;





// import React from 'react';
// import { View, StyleSheet } from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';
// import SliderComponent from '../components/SliderComponent';

// const HomeScreen = ({ navigation }) => {
//   const sliderImages = [
//     require('../assets/image1.jpeg'),
//     require('../assets/image2.jpeg'),
//     require('../assets/image3.jpeg'),
//   ];

//   return (
//     <View style={styles.container}>
//       <SwiperFlatList
//         data={sliderImages}
//         renderItem={({ item }) => <SliderComponent images={[item]} />}
//         onChangeIndex={({ index }) => {
//           if (index === 2) {
//             navigation.navigate('Main');
//           }
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
// });

// export default HomeScreen;
import React, { useState } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';

const HomeScreen = ({ navigation }) => {
  const sliderImages = [
    require('../assets/image1.jpeg'),
    require('../assets/image2.jpeg'),
    require('../assets/image3.jpeg'),
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
    <View style={styles.container}>
      <SwiperFlatList
        data={sliderImages}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <Image source={item} style={{ width: windowWidth, height: windowHeight }} resizeMode="cover" />
          </View>
        )}
        onChangeIndex={({ index }) => {
          setCurrentIndex(index);

          if (index === 2) {
            navigation.navigate('Main');
          }
        }}
      />
      <View style={styles.pagination}>
        {sliderImages.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 'purple', // Adjust this value as needed
    left: 0,
    right: 0,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#ccc',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'pink', // Change color for active dot
  },
});

export default HomeScreen;
