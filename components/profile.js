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
  AppRegistry,
  StyleSheet,
  Text,
  View,
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
      .then(res => {
        this.setState({
        startTime: res.startTime,
        endTime: res.endTime
        });
        this.calcDate();
      })
      .catch(err => console.warn(err));
  }

  calcDate() {
    let start = (new Date(this.state.startTime)).getTime();
    let end = (new this.state.endTime)),getTime();
    
    let count = (end - start) / 1000 / 60 / 60 / 24;

    this.setState({withYouDay: count});
  }

  render() {
    return (
       <View style={styles.container}>
        <View style={styles.imageBorder}>
          <Image style={style.avatar} source={{uri: this.props.boyData.avatar}}
          <View style={styles.and}>
            <Text style={styles.textAnd}>and</Text>
          </View>
          <Image style={style.avatar} source={{uri: this.props.girlData.avatar}}
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
  container: {},
  // 大的背景框，图片的外面
  imageBorder: {},
  // 头像
  avatar: {},
  // 两个头像之间的and
  and: {},
  // 两个头像之间的文字
  textAnd: {},
  // 统计时间的视图模型
  countDate: {},
  // 统计时间的文字
  countDateText: {}
});

export default Profile;