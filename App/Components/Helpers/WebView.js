var React = require('react-native');

var {
  View,
  WebView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    flexDirection: 'column',
  }
});

class Web_View extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <WebView url={this.props.url}/>
      </View>
    );
  }
};

Web_View.propTypes = {
  url: React.PropTypes.string.isRequired
};

module.exports = Web_View;