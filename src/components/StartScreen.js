import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {recipesActions} from '../redux/recipesReducer';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {TouchableHighlight} from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    //backgroundImage: `linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);`
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#77E79B',
    paddingTop: 200,
    flex: 1,
  },
  text: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    fontFamily: 'Hiragino Sans',
    marginBottom: 30,
  },
  input: {
    width: 260,
    height: 60,
    fontSize: 18,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.5)',
    paddingLeft: 20,
    color: '#77E79B',
    fontWeight: '900',
    backgroundColor: 'rgba(255,255,255,1)',
    marginBottom: 60,
  },
  button: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255,255,255,1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  icon: {
    position: 'relative',
    top: 8,
  },
});

const StartScreen = ({navigation, setRecipeWord}) => {
  const [inputText, setInputText] = useState('');

  const onPressHandler = () => {
    setRecipeWord(inputText);
    navigation.replace('HomeStack');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter dish or product name : </Text>
      <TextInput
        style={styles.input}
        value={inputText}
        onChangeText={value => setInputText(value)}
      />
      <TouchableHighlight
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        style={styles.button}
        onPress={onPressHandler}>
        <Icon style={styles.icon} name="magnify" size={90} color={'#77E79B'} />
      </TouchableHighlight>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setRecipeWord: word =>
    dispatch({type: recipesActions.SET_RECIPE_WORD, payload: word}),
});

const StartScreenWithRedux = connect(
  null,
  mapDispatchToProps,
)(StartScreen);

export default StartScreenWithRedux;
