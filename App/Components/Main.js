var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  TextInput, // capture text input
  TouchableHighlight, // capture touch event
  ActivityIndicatorIOS // show or hide a spinner base a on set bool
} = React;

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'teal'
  },
  title: {
    marginBottom: 20,
    fontSize: 20,
    textAlign: 'center',
    color: 'yellow'
  },
  searchInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white',
    backgroundColor: 'grey'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Main extends React.Component{
  constructor(props) { // gets passed properties
    super(props); // super calls the thing we are extending (React.Component) and passes it props
    
    // set initial state of component
    this.state = {
      username: '',
      isLoading: false,
      error: false
    }
  };

  handleChange(event) {
    this.setState({
      username: event.nativeEvent.text
    })
  };

  handleSubmit(event) {
    // update our indicatorIOS spinner
    this.setState({
      isLoading: true
    });
    console.log('submitting search for ', this.state.username);
    // fetch data from github
    // reroute to the next view, passing that github info
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.title}> Search for a github user </Text>
        <TextInput
          style = {styles.searchInput}
          value = {this.state.username} 
          onChange = {this.handleChange.bind(this)} />
          <TouchableHighlight
            style = {styles.button} 
            onPress={this.handleSubmit.bind(this)} 
            underlayColor = "white">
              <Text style={styles.buttonText}> GO </Text>
            </TouchableHighlight>
      </View>
    )
  }
};

module.exports = Main;