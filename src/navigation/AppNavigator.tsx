import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import LanguageScreen from '../screens/LanguageScreen';
import SearchScreen from '../screens/SearchScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useTranslation} from 'react-i18next';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search' : 'search-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{title: t('bottomTabHome')}}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{title: t('bottomTabSearch')}}
      />
    </Tab.Navigator>
  );
};

const AppNavigator: React.FC = () => {
  const {t} = useTranslation();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: 'transparent'},
          headerTintColor: 'black',
        }}>
        <Drawer.Screen
          name="News"
          component={MainTabNavigator}
          options={{title: t('drawerTabMenuName1')}}
        />
        <Drawer.Screen
          name="ChangeLanguage"
          component={LanguageScreen}
          options={{title: t('drawerTabMenuName2')}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
