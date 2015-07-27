/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./App/Components/Main');

// destructuring (ES6)
var {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  View,
} = React;
/*
  without destrucutring, this would look like:
  var AppRegistry = React.AppRegistry;
  var StyleSheet = React.StyleSheet;
  ...etc
*/

class githubNotetaker extends React.Component{
  render () {
    return (
      <NavigatorIOS
        initialRoute = {{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'yellow'
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
