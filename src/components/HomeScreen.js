import React, {useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  TouchableHighlight,
  StyleSheet,
} from 'react-native';
import {recipesActions} from '../redux/recipesReducer';
import {connect} from 'react-redux';
import RecipeCard from './RecipeCard';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 25,
  },
  scroll_container: {
    display: 'flex',
    flex: 1,
  },
  search_button: {
    position: 'absolute',
    bottom: 30,
    width: 50,
    height: 50,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77E79B',
    borderRadius: 50,
  },
});

const HomeScreen = ({
  navigation,
  getRecipes,
  isLoading,
  recipes,
  inputText,
  clearRecipes,
}) => {
  // useEffect(() => {
  //   getRecipes();
  //   console.log(isLoading);
  // }, []);

  useEffect(() => {
    console.log(inputText);
  }, [inputText]);

  const searchButtonHandler = () => {
    clearRecipes();
    navigation.navigate('Start');
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll_container}>
        <Button onPress={getRecipes} title="load recipes" />
        {!recipes ? (
          <Text>Loading</Text>
        ) : (
          recipes
            .slice(0, 6)
            .map(({recipe}, i) => (
              <RecipeCard
                onPress={(() => navigation.navigate('Recipe'), recipe)}
                recipe={recipe}
                key={i}
              />
            ))
        )}
      </ScrollView>
      <View style={styles.search_button}>
        <TouchableHighlight
          activeOpacity={0.2}
          underlayColor="#77E79B"
          onPress={searchButtonHandler}>
          <Icon name="magnify" size={40} color={'#FFF'} />
        </TouchableHighlight>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  getRecipes: () => dispatch({type: recipesActions.GET_RECIPES}),
  clearRecipes: () => dispatch({type: recipesActions.CLEAR_RECIPES}),
});

const mapStateToProps = state => ({
  isLoading: state.recipesReducer.isLoading,
  recipes: state.recipesReducer.recipes,
});

const HomeScreenWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);

export default HomeScreenWithRedux;
