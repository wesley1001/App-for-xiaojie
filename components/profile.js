/**
 * Author: AnnatarHe
 * Github: AnnatarHe
 * Email: iamhele1994@gmail.com
 *
 * 个人信息展示页面，读取过数据之后展示
 */
'use strict';

import React from 'react-native';
let {
  Image,
  StyleSheet,
  Text,
  View,
  Component,
} = React;

class Profile extends Component {

  static propTypes = {
    hostUrl: React.PropTypes.string.isRequired,
    boyData: React.PropTypes.object.isRequired,
    girlData: React.PropTypes.object.isRequired,
  }

  static defaultProps = {
    hostUrl: '',
    boyData: {},
    girlData: {}
  }

  constructor(props) {
    super(props);
    this.fetchDate();
    console.log(props.hostUrl);
    console.log(props.girlData);
    console.log(props.boyData);

    this.state = {
      startTime: '',
      endTime: '',
      withYouDay: 0,
    }
  }

  /**
   * 获取日期
   */
  fetchDate() {
    let dateId = '5649db661b3a739c2a777bef';
    let url = `${this.props.hostUrl}/times/${dateId}`;

    fetch(url)
      .then(data => data.json())
      .then(res => {
        this.setState({
        startTime: res.startTime,
        endTime: res.endTime
        })
      })
      .then(() => this.calcDate())
      .catch(err => console.warn(err));
  }

  /**
   * 计算两个时间差，设定日期
   */
  calcDate() {
    let start = (new Date(this.state.startTime)).getTime();
    let end = (new Date(this.state.endTime)).getTime();
    
    let count = (end - start) / 1000 / 60 / 60 / 24;

    this.setState({withYouDay: count});
  }

  render() {
    return (
       <View style={styles.container}>
        <View style={styles.imageBorder}>
          <Image style={styles.avatar} source={{uri: this.props.boyData.avatar}} />
          <View style={styles.and}>
            <Text style={styles.textAnd}>{this.props.boyData.name}and {this.props.girlData.name}</Text>
          </View>
          <Image style={styles.avatar} source={{uri: this.props.girlData.avatar}} />
        </View>
        <View style={styles.countDate}>
          <Text style={styles.countDateText}>
          已经在一起 {this.state.withYouDay} 天
          </Text>
        </View>
       </View>
    );
  }
}

let styles = StyleSheet.create({
  // 容器
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#00BCD4',
  },
  // 大的背景框，图片的外面
  imageBorder: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 5,
  },
  // 头像
  avatar: {
    borderRadius: 5,
    justifyContent: 'center',
    width: 70,
    height: 70,
  },
  // 两个头像之间的and
  and: {
    flex: 1,
    justifyContent: 'center',
  },
  // 两个头像之间的文字
  textAnd: {
    textAlign: 'center',
    color: '#ffffff',
  },
  // 统计时间的视图模型
  countDate: {
    flex: 1,
    paddingTop: 5,
  },
  // 统计时间的文字
  countDateText: {
    textAlign: 'center',
  },
});

export default Profile;