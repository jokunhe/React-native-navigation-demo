import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
      Image,
    TouchableOpacity,
} from 'react-native';
export default class login extends Component {
    constructor(props) {
    super(props);
    this.state = { text: ''  
                  };
  }

    navigatePress=()=>{
       alert(this.state.text);
    }
    // componentDidMount(){
    // this.props.navigation.setParams({
    //     title:'自定义Header',
    //     navigatePress:this.navigatePress
    // })
    // }
//     static navigationOptions = ({ navigation, screenProps }) => ({
//         title: '1234',
//         headerRight:(
//             <Text onPress={()=>navigation.state.params?navigation.state.params.navigatePress():null}>
//                 返回
//             </Text>
//         )
// });




  render() {
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>
      //     我是二级页面！
      //   </Text>
      //   <Text>我是首页传过来的 {this.props.navigation.state.params.MainText}</Text>
      // </View>
      <View style={styles.container}>

                 <TextInput
                style={styles.inputText}
                multiline={true}
                textAlignVertical='top'
                underlineColorAndroid="transparent"
                onChangeText={(text) => 
                                     this.setState({text}) 
                                   

                                }
                value={this.state.text}
                placeholder='默认内容'
                /> 


                {/* <View style={styles.topbg}>
                    <Image style={styles.userHead} source={require('../../../imgs/my_icon_head.png')}></Image>
                    <Text style={styles.userName}>阿凡达</Text>
                </View>
                <View style={styles.infoList}>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_card.png')}></Image>
                        <Text style={styles.text}>我的银行卡</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_id.png')}></Image>
                        <Text style={styles.text}>实名认证</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_set.png')}></Image>
                        <Text style={styles.text}>设置</Text>
                        <Image style={styles.arrow} source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_share.png')}></Image>
                        <Text style={styles.text}>分享</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_about.png')}></Image>
                        <Text style={styles.text}>关于</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                </View> 
                <View style={styles.infoList}>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_set.png')}></Image>
                        <Text style={styles.text}>设置</Text>
                        <Image style={styles.arrow} source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_share.png')}></Image>
                        <Text style={styles.text}>分享</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                    <View style={styles.item}>
                        <Image style={styles.icon} source={require('../../../imgs/my_icon_about.png')}></Image>
                        <Text style={styles.text}>关于</Text>
                        <Image  source={require('../../../imgs/arrow_right.png')}></Image>
                    </View>
                </View> */}
            </View>
    );
  }
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: '#F5FCFF',
  // },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
      container:{
        flex:1,
        backgroundColor:"#f5f5f5"
    },
    topbg:{
        height:220,
        width:375,
        backgroundColor:"#fe991b",
        alignItems:'center'
    },
    userHead:{
        width:70,
        height:70,
        marginTop:88
    },
    userName:{
        marginTop:14,
        fontSize:16,
        color:"#fff"
    },
    infoList:{
        backgroundColor:"#fff",
        marginTop:15,
        paddingLeft:15,
        paddingRight:15
    },
    item:{
        flexDirection:'row',
        height:40,
        borderStyle:'solid',
        borderBottomWidth:0.5,
        borderColor:'#e0e0e0',
        alignItems:'center'
    },
    icon:{
        height:20,
        width:20
    },
    text:{
        fontSize:15,
        color:"#454545",
        paddingLeft:15,
        flex:1
    }
});