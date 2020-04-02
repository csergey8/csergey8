import React from 'react';
import {ScrollView, Text, ImageBackground, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'contain',
    height: 200,
  },
});

const RecipeScreen = ({route: {params}, navigation}) => {
  const {recipe} = params;
  return (
    <ScrollView>
      <ImageBackground
        style={styles.imageBackground}
        source={{uri: recipe.image}}
        imageStyle={{
          resizeMode: 'cover',
          opacity: 0.5,
          backgroundColor: 'red'
        }}>
        <Text>{recipe.label}</Text>
      </ImageBackground>
    </ScrollView>
  );
};

export default RecipeScreen;
