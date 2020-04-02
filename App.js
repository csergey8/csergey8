import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import HomeScreen from './src/components/HomeScreen';
import Header from './src/components/Header';
import DetailsScreen from './src/components/DetailsScreen';
import RecipeScreen from './src/components/RecipeScreen';
import StartScreen from './src/components/StartScreen';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const StartStack = createStackNavigator();
const Home = createStackNavigator();
const Tab = createBottomTabNavigator();

Icon.loadFont();

const HomeStack = () => (
  <Home.Navigator>
    <Home.Screen
      name="Recipes"
      component={TabStack}
      options={{
        headerStyle: {
          backgroundColor: '#77E79B',
        },
        headerTitle: props => <Header {...props} />,
      }}
    />
    <Home.Screen name="Recipe" component={RecipeScreen} options={{
      
    }} />
  </Home.Navigator>
);

const App = () => (
  <NavigationContainer>
    <StartStack.Navigator>
      <StartStack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <StartStack.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
    </StartStack.Navigator>
  </NavigationContainer>
);

const TabStack = () => (
  <Tab.Navigator
    initialRouteName="HomeStack"
    tabBarOptions={{activeTintColor: '#77E79B'}}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Recipes',
        tabBarIcon: ({color, size}) => (
          <Icon name="food" size={30} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Details"
      component={DetailsScreen}
      options={{
        tabBarLabel: 'Favorite',
        tabBarIcon: ({color, size}) => (
          <Icon name="star" size={30} color={color} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default App;
