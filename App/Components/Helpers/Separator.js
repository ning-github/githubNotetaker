var React = require('react-native');

var {
  View,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: 'blue',
    flex: 1,
    marginLeft: 15
  },
});

class Separator extends React.Component{
  render() {
    return (
      <View style={styles.separator} />
    )
  }
}

module.exports = Separator;