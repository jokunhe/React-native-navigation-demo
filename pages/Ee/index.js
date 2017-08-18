import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Alert,
  Platform,
  ToastAndroid,
  BackHandler,
  Image
} from 'react-native';
let lastClickTime = 0;

import {NavigationActions}from 'react-navigation'
export default class home extends Component {
       onBackAndroid=()=>{
        
        let now = new Date().getTime();
        if (now - lastClickTime < 2500 ){
            return false;
        }
        lastClickTime = now ;
        ToastAndroid.show('再按一次退出应用',ToastAndroid.SHORT);
        return true;
    }

    componentDidMount(){
        
    }


     

  componentWillMount(){
        console.log('componentWillMount');
        console.log(this.props)
        if (Platform.OS === 'android' & this.props.navigation.state.routeName==="Home"){
            BackHandler.addEventListener('handwareBackPress',this.onBackAndroid)
        }
    }
  // componentWillUnmount(){
  //       console.log('componentWillMount');
  //       if (Platform.OS === 'android'){
  //           BackHandler.addEventListener('handwareBackPress',this.onBackAndroid)
  //       }
  //   }





  _getPress(){
    if(this.state.text == ''){
      alert('没有输入内容啊！大傻逼！')
      this.setState({stylec: '2'});
      
    }
    else{
      this.props.navigation.navigate('Second')
    }
  }
  constructor(props) {
    super(props);
    this.state = { text: '' ,
                  stylec: '1' 
                  };
  }


  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputText}
          multiline={true}
          textAlignVertical='top'
          underlineColorAndroid="transparent"
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          placeholder='默认内容'
        />
        <Text style={ this.state.stylec ==1  ? styles.tj : styles.tjc
                    }
        onPress={()=>this._getPress()}
        >
          提交
        </Text >
        <Image
        style={styles.logo}
        source={{uri: 'http://img.99114.com/group1/M00/32/2C/wKgGSFldsxmAK3XhAAIjkVgpigI46.jpeg'}}
      />
      </View>
      
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection:'column'
  },
  inputText:{
    textAlign:'left',
    borderWidth: 1,
    borderColor: 'gray',
    height:200,
    margin:30,
    backgroundColor:'rgba(255,255,255,0.3)'
  },
  tj:{
    borderColor:'#2d78f4',
    backgroundColor:'#3385ff',
    height:40,
    width:100,
    alignSelf:'center',
    borderWidth: 1,
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius: 50,
    color:'#F5FCFF'
  },
  tjc:{
    borderColor:'#2d78f4',
    backgroundColor:'red',
    height:40,
    width:100,
    alignSelf:'center',
    borderWidth: 1,
    textAlign:'center',
    textAlignVertical:'center',
    borderRadius: 50,
    color:'#F5FCFF'
  },
  logo:{
    height:300,
    width:300
  }
});