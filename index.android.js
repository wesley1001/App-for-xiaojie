/**
 * Author: AnnatarHe
 * Github: AnnatarHe
 * Email: iamhele1994@gmail.com
 *
 * 个人信息展示页面，读取过数据之后展示
 */
'use strict';
import React from 'react-native';
import Profile from './components/profile';

let {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
} = React;

class AppForXiaojie extends Component {

  constructor(props) {
    super(props);

    this.state = {
      host: 'http://xiaojie.daxuedogs.com/',
      loading: 0,
      boyId: '5649da64146d9e5023f933c0',
      girlId: '5649da3c146d9e5023f933bf',
      boyData: {},
      girlData: {},
    };

    this.fetchData();

  }

  fetchData() {
    let boyUrl = `${this.state.host}users/${this.state.boyId}`;
    let girlUrl = `${this.state.host}users/${this.state.girlId}`;

    
    fetch(girlUrl)
      .then(girlRes => girlRes.json())
      .then(girlFetched => this.setState({girlData: girlFetched, loading: this.state.loading+1}))
      .then(() => console.log(this.state.loading))
      .catch(err => console.warn(err));
    fetch(boyUrl)
      .then(boyRes => boyRes.json())
      .then(boyFetched => this.setState({boyData: boyFetched, loading: this.state.loading+1}))
      .then(() => console.log(this.state.loading))
      .catch(err => console.warn(err));
  }

  loading() {
      return (
        <View style={styles.loading}>
          <Text style={styles.loadingText}>
          获取数据中，请等一下啦~
          </Text>
        </View>
        );
  }

  renderData() {
    return (<Profile boyData={this.state.boyData} girlData={this.state.girlData} hostUrl={this.state.host} />);
  }

  render() {
    if (this.state.loading < 2) {
      return this.loading();
    }else {
      return this.renderData();
    }
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    margin: 10,
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AppForXiaojie', () => AppForXiaojie);
