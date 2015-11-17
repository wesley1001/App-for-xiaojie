'use strict';

import React from 'react-native';
let {
  Image,
  StyleSheet,
  Text,
  View,
  Component,
} = React;

class SignalCard extends Component {

  static propTypes = {
    avatar: React.propTypes.string.isRequired,
    name: React.propTypes.string.isRequired,
  }

  static defaultProps = {
    avatar: '',
    name: '',
  }

  constructor(props) {
    super(props);

  }

  render() {
    return (
       <View style={styles.container}>
          <Image style={styles.avatar} source={{uri: this.props.avatar}} />
          <View style={styles.textBlock}>
            <Text style={styles.name}>{this.props.name}</Text>
          </View>
       </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBlock: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    textAlign: 'center',
  },
  // 头像
  avatar: {
    borderRadius: 5,
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
})

export default SignalCard;