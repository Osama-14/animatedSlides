
import React, { useRef, useState,useEffect } from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Image } from 'react-native';

const { width, height } = Dimensions.get('window');
const SCREEN_WIDTH = width;
const SCREEN_HEIGHT = height;

const data = [
  { id: '1', image: require('./src/assets/image1.jpeg'), heading: 'Heading 1', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: '2', image: require('./src/assets/image2.jpeg'), heading: 'Heading 2', text: 'Nulla vestibulum lorem ac tortor venenatis, et lacinia metus cursus.' },
];

const CarouselItem = ({ item }) => (
  <View style={styles.carouselItem}>
    <View style={styles.imageContainer}>
      <Image source={item.image} style={styles.image} />
    </View>
    <View style={styles.textContainer}>
      <Text style={styles.heading}>{item.heading}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  </View>
);
const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [dotsVisible, setDotsVisible] = useState(true); // Add this state

  const scrollViewRef = useRef(null);

  const handlePageChange = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(offsetX / SCREEN_WIDTH);
    setCurrentIndex(newIndex);
  };

  // Add this useEffect to hide dots when home page is visible
  useEffect(() => {
    if (currentIndex === data.length) {
      setDotsVisible(false);
    } else {
      setDotsVisible(true);
    }
  }, [currentIndex]);

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={(event) => handlePageChange(event)}
      >
        {data.map((item, index) => (
          <CarouselItem key={item.id} item={item} />
        ))}
        {/* Add your app's home page content here */}
        <View style={styles.homePage}>
          <Text style={styles.homeText}>Your Home Page</Text>
        </View>
      </ScrollView>
      {dotsVisible && (
        <View style={styles.dotsContainer}>
          {[...data, { id: 'dummy' }].map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentIndex ? '#333' : '#ccc' },
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselItem: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    flexDirection: 'column',
  },
  imageContainer: {
    width: '100%',
    height: '50%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
    height: '50%',
    padding: 16,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  homePage: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e5e5e5',
  },
  homeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default App;
























