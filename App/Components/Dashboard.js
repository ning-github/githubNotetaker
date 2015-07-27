var React = require('react-native');

var {
  Text,
  StyleSheet,
  View
} = React;

var styles = StyleSheet.create({
  container: {
    // 65 is important to make sure content is not covered by menubar
    marginTop: 65, 
    flex: 1
  },
  image: {
    height: 350,
  },
  buttonText: {
    fontSize: 24,
    color: 'yellow',
    alignSelf: 'center'
  }
});

class Dashboard extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <Text> This is the Dashboard </Text>
        <Text> {this.props.userInfo} </Text>
      </View>
    )
  }
}

module.exports = Dashboard;