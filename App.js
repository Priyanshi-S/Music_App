import React,{useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from "./src/navigations/Navigator"
import Language from './src/components/Language';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Artist from './src/components/Artists';
import Genre from './src/components/Genre';
import Profile from './src/screens/Profile';
import Home from './src/screens/Home';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Detail from './src/screens/Detail';
import Detail1 from './src/screens/Detail1';
import Detail2 from './src/screens/Detail2';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Favourite from './src/screens/Favourite'
import Playlist from './src/screens/Playlist';
import Download from './src/screens/Download';
import Karaoke from './src/screens/Karaoke';
import {Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Download2 from './src/screens/Download2';
import Favourite2 from './src/screens/Favourite2';
import Playlist2 from './src/screens/Playlist2';
import Home2 from './src/screens/Home2';
import Profile2 from './src/screens/Profile2';
import Users from './src/screens/users';
import PlayListInputModal from './src/screens/PlayListInputModal';
import Playlist3 from './src/screens/Playlist3';

const tabBarListeners = ({ navigation, route }) => ({
  tabPress: () => navigation.navigate('Favourite'),
});

const tabBarListenersPlaylist=({ navigation, route }) => ({
  tabPress: () => navigation.navigate('Playlist'),
});

const Tab = createBottomTabNavigator();
const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            /*tabBarOptions={{
                style:{
                    height:65,
                    justifyContent:"center",
                    paddingVertical:15,
                    backgroundColor:"#eff4f0",
                    elevation:2
                }
            }}*/
            screenOptions={{
              tabBarStyle: [
                {
                  display: 'flex'
                },
                null
              ]
            }}
        >
            <Tab.Screen
                name="Home"
                component={Home2}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                      <Icon name="home" type="fontAwesome" color="black" size={19}
                      style={{ paddingTop:15 }}/>
                    )
                }}
            />

            <Tab.Screen
                name="Playlist"
                component={Playlist}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                      <Icon1 name="playlist-add" type="MaterialIcons" color="black"  size={24}
                      style={{ paddingTop:15 }}/>
                    ),
                    unmountOnBlur: true
                }}
                listeners={tabBarListenersPlaylist}
            />

            <Tab.Screen
                name="Favourite"
                component={Favourite2}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                      <Icon name="heart" type="AntDesign" color="red"  size={17}
                      style={{ paddingTop:15 }}/>
                    ),
                    unmountOnBlur: true
                }
            }
                listeners={tabBarListeners}
            />

            <Tab.Screen
                name="Karaoke"
                component={Karaoke}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                      <Icon name="microphone" type="fontAwesome" color="black"  size={20}
                      style={{ paddingTop:15 }}/>
                    )
                }}
            />


            <Tab.Screen
                name="Profile"
                component={Profile2}
                options={{
                    tabBarLabel:"",
                    tabBarIcon:({color, size}) => (
                      <Icon name="user" type="fontAwesome" color="black" size={17} 
                      style={{ paddingTop:15 }}/>
                    )
                }}
            />
        </Tab.Navigator>
    );
};

const Stack = createNativeStackNavigator();
const screenOptionStyle = {
  headerShown: false
}
const App = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false}}
        />
        <Stack.Screen
          name="Language"
          component={Language}
          options={{ title: 'Choose Languages' }}
        />
        <Stack.Screen
          name = "Detail"
          component = {Detail}
        />
        <Stack.Screen
          name = "Detail1"
          component = {Detail1}
        />
        <Stack.Screen
          name = "Detail2"
          component = {Detail2}
        />
        <Stack.Screen
          name = "Download"
          component = {Download2}
        />
        <Stack.Screen 
          name="Artists" 
          component={Artist} 
          options={{ title: 'Choose Artists'}}
        />
        <Stack.Screen 
          name="Genre" 
          component={Genre} 
          options={{ title: 'Choose Genre'}}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{title: 'Profile'}}
        />
        <Stack.Screen
          name = "Main"
          component = {BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name = "Favourite"
          component = {Favourite2}
          options={{title: 'Favourite'}}
        />
        <Stack.Screen
          name = "Playlist"
          component = {Playlist}
          options={{title: 'Playlist'}}
        />
        <Stack.Screen
          name = "Users"
          component = {Users}
          options={{title: 'Users'}}
        />
         <Stack.Screen
          name = "PlayListInputModal"
          component = {PlayListInputModal}
          options={{title: 'PlayListInputModal'}}
        />
          <Stack.Screen
          name = "Playlist3"
          component = {Playlist3}
          options={{title: 'Playlist3'}}
        />
        <Stack.Screen
          name = "Playlist2"
          component = {Playlist2}
          options={{title: 'Playlist'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;