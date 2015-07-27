var React = require('react-native');
var api = require('../Utils/api');
var Dashboard = require('./Dashboard');

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
    // 65 is important to make sure content is not covered by menubar
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
    // fetch data from github
    api.getBio(this.state.username)
      .then(
        (res) => { // response from API call is json object
          if (res.message === 'Not Found') {
            this.setState({
              error: 'User not found!',
              isLoading: false
            })
          } 
          else {
          // reroute to the next view (Dashboard)
            this.props.navigator.push({
              title: res.name || 'Select an Option',
              component: Dashboard,
              //  passing that github info
              passProps: {userInfo: res} 
            })
            // in case user comes back to this page
            this.setState({
              isLoading: false,
              error: false,
              username: ''
            })
          }
        })
  }

  render () {
    // empty view that will show text only when there is an error
    var showErr = (
      this.state.error ? <Text> {this.state.error} </Text> : <View></View>
    )

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
        <ActivityIndicatorIOS 
          animating={this.state.isLoading} 
          color='#111' 
          size='large'> 
        </ActivityIndicatorIOS> 
        {showErr}
      </View>
    )
  }
};

module.exports = Main;