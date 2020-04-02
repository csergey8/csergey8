import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 140,
  },
  iconSize: {
    width: 40,
    height: 30,
  },
  titleText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

const Header = (props) => {
  console.log(props);
  return (
    <View style={styles.container}>
      <Image
        // eslint-disable-next-line react-native/no-inline-styles
        style={styles.iconSize}
        source={require('../../assets/img/logo.gif')}
      />
      <Text style={styles.titleText}>Recipes</Text>
    </View>
  );
};

export default Header;
