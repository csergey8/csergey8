import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const RecipeCard = ({recipe}) => {
  const styles = StyleSheet.create({
    card: {
      height: 190,
      width: 360,
      marginBottom: 15,
      backgroundColor: '#000',
      borderRadius: 10,
    },
    image: {
      height: 190,
      width: 360,
      resizeMode: 'contain',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    text: {
      width: 200,
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      fontWeight: '900',
      textShadowColor: '#fff',
      textShadowRadius: 1,
    },
    calories: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      left: 10,
      bottom: 10,
    },
    weight: {
      position: 'absolute',
      alignItems: 'center',
      display: 'flex',
      bottom: 10,
    },
    yield: {
      position: 'absolute',
      display: 'flex',
      alignItems: 'center',
      bottom: 10,
      right: 10,
    },
    infoText: {
      color: '#fff',
      fontWeight: '600',
    },
  });

  const navigateToHandler = () => {
    navigation.navigate('Recipe', {recipe});
  };

  const navigation = useNavigation();

  const recipeLabel =
    recipe.label.length > 35
      ? recipe.label.substring(0, 35) + '...'
      : recipe.label;
  return (
    <View>
      <TouchableOpacity style={styles.card} onPress={navigateToHandler}>
        <ImageBackground
          style={styles.image}
          // eslint-disable-next-line react-native/no-inline-styles
          imageStyle={{
            borderRadius: 10,
            resizeMode: 'cover',
            opacity: 0.6,
            backgroundColor: '#fff',
          }}
          source={{uri: recipe.image}}>
          <Text style={styles.text}>{recipeLabel}</Text>
          <View style={styles.calories}>
            <Icon name="flash" size={20} color="#77E79B" />
            <Text style={styles.infoText}>
              {parseInt(recipe.calories, 10)}Kcal
            </Text>
          </View>
          <View style={styles.weight}>
            <Icon name="weight-gram" size={20} color="#77E79B" />
            <Text style={styles.infoText}>
              {parseInt(recipe.totalWeight, 10)}g.
            </Text>
          </View>
          <View style={styles.yield}>
            <Icon name="account-multiple-plus" size={20} color="#77E79B" />
            <Text style={styles.infoText}>{recipe.yield}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

export default RecipeCard;
