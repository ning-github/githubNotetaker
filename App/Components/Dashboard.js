var React = require('react-native');

var {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableHighlight
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
  // fn for button styleing
  makeBackground(btn) {
    var obj = {
      flexDirection: 'row',
      alignSelf: 'stretch',
      justifyContent: 'center',
      flex: 1
    }
    if (btn === 0){
      obj.backgroundColor = '#48BBEC';
    }
    else if (btn === 1){
      obj.backgroundColor = '#E77AAE';
    }
    else {
      obj.backgroundColor = '#758BF4';
    }
    return obj;
  };

  // nav to profile
  goToProfile(){
    console.log('Going to Profile Page')
  };

  // nav to repos
  goToRepos(){
    console.log('Going to repos')
  };

  // nav to notes
  goToNotes(){
    console.log('Going to notes')
  };

  render() {
    return (
      <View style={styles.container}>
        <Image source={{uri: this.props.userInfo.avatar_url}} style={styles.image}/>
        {/* 3 buttons */}
        <TouchableHighlight
          style={this.makeBackground(0)}
          onPress={this.goToProfile.bind(this)} 
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Profile </Text>
        </TouchableHighlight>   

        <TouchableHighlight
          style={this.makeBackground(1)}
          onPress={this.goToRepos.bind(this)} 
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Repos </Text>
        </TouchableHighlight>   

        <TouchableHighlight
          style={this.makeBackground(2)}
          onPress={this.goToNotes.bind(this)} 
          underlayColor='#88D4F5'>
          <Text style={styles.buttonText}> View Notes </Text>
        </TouchableHighlight>
      </View>
    )
  };
}

module.exports = Dashboard;