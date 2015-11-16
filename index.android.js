/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React from 'react-native';
import Profile from './components/profile';

let {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var AppForXiaojie = React.createClass({

  constructor(props) {
    super(props);

    this.state = {
      host: 'http://localhost:3000/',
      loading: true,
      boyId: '5649da64146d9e5023f933c0',
      girlId: '5649da3c146d9e5023f933bf',
      boyData: {},
      girlData: {},
    };

  }

  loading() {

    if (this.state.loading == true) {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>
          获取数据中，请等一下啦~
          </Text>
        </View>
        );
    }else {
      return <Profile boyData={this.state.boyData} grilData={this.state.girlData} hostUrl={this.state.host}/>
    }

  }

  render: function() {
    return (
      <View style={styles.container}>
        {this.loading()}
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppForXiaojie', () => AppForXiaojie);
