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

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gold'
  },
});

class githubNotetaker extends React.Component{
  render () {
    return (
      <NavigatorIOS
        style = {styles.container}
        initialRoute = {{
          title: 'Github Notetaker',
          component: Main
        }} />
    );
  }
};


AppRegistry.registerComponent('githubNotetaker', () => githubNotetaker);
