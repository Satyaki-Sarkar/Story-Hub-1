import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import WriteStory from './screens/WriteStoryScreen';
import ReadStory from './screens/ReadStoryScreen';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends Component{
  render(){
    return (
      <AppContainer/>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory : {screen : WriteStory},
  ReadStory :  {screen : ReadStory}
},{
    defaultNavigationOptions : ({navigation}) =>({
      tabBarIcon : () => {
        const routeName = navigation.state.routeName;
        if(routeName==="WriteStory"){
          return(
            <Image
              source={require("./assets/write.png")}
              style={{width : 40, height : 40}}
            />
          )
        }else if(routeName==="ReadStory"){
          return(
            <Image
              source={require("./assets/read.png")}
              style={{width : 40, height : 40}}
            />
          )
        }
      }
    }),
    tabBarOptions : {
      activeBackgroundColor : "#FF7CFD",
      activeTintColor : "#17002D",
      inactiveBackgroundColor : "#FFA28C",
      inactiveTintColor : "#005A5A",
      showLabel : true,
      style : {
        height : 70,
        width : 600,
        alignSelf : 'center',
        position : 'absolute',
        borderRadius : 10,
        borderWidth : 5,
        justifyContent : 'center'
      },
      labelStyle : {
        fontSize : 10,
        fontWeight : 'bold'
      }
    }
  } 
);

const AppContainer = createAppContainer(TabNavigator);
