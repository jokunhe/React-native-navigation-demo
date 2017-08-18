
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity
} from 'react-native';

//首页
import Home from './pages/Ee'

const Homeicon = require('./imgs/home12x.png');
const Homeicons = require('./imgs/home22x.png');
//我的
const Mineicon = require('./imgs/mine12x.png');
const Mineicons = require('./imgs/mine22x.png');
//返回
const backicon =require('./imgs/nav_icon_back2x.png');
import Web from './pages/Login/index2'
import Second from './pages/Ee/second'


const MyTab = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: ()=> TabOptions('首页',Homeicon,Homeicons,'首页'),
    },
    Mine:{
        screen:Web,
        navigationOptions: ()=> TabOptions('我的',Mineicon,Mineicons,'我的'),
    },    

},
    {
    tabBarPosition: 'bottom',
    // tabBarComponent:TabBarBottom,
    swipeEnabled:true,
    animationEnabled:true,
    backBehavior:'none',
    lazy:true,
    tabBarOptions: {
        showIcon:true,
        // tabbar上label的style
        labelStyle: {
            color:'#323232',
            fontSize:12,

        },
        // tabbar的style
        style: {
            backgroundColor:'#FFFFFF',
            height:60,
            
        },
        // label和icon的背景色 活跃状态下
        // activeBackgroundColor:'green',
        // // label和icon的前景色 活跃状态下（选中）
        // activeTintColor:'green',
        // // label和icon的背景色 不活跃状态下
        // inactiveBackgroundColor:colors.text_color_gray_dark,
        // // label和icon的前景色 不活跃状态下(未选中)
        // inactiveTintColor:colors.text_color_gray_dark,
        // 是否显示label，默认为true
        showLabel:true,
        // 不透明度为按选项卡(iOS和Android < 5.0)
        pressOpacity:0.3,
        
        indicatorStyle :{
            height:0, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        }
    }
});

const MyApp = StackNavigator({
    MyTab: {
        screen: MyTab,
        navigationOptions:{
            header:null
        },
        headerMode: 'screen'
    },
    Second:{
        screen:Second,
        navigationOptions: ({navigation}) => StackOptions({navigation}),
        headerMode: 'screen'
    },   
     
    
}, {
    headerMode: 'screen',
});






export const TabOptions = (tabBarTitle,normalImage,selectedImage,navTitle) => {
    // console.log(navigation);
    const tabBarLabel = tabBarTitle;
    const tabBarIcon = (({tintColor,focused})=> {
        return(
            focused
                ?
                <Image
                    source={selectedImage}
                    style={[styles.TabBarIcon]}
                />
                :
                <Image
                    source={normalImage}
                    style={[styles.TabBarIcon]}
                />
        )
    });
    const headerTitle = navTitle;
    const headerTitleStyle = {fontSize:20,color:'red'};
    // header的style
    const headerStyle = {backgroundColor:'blue'};
    return {tabBarLabel,tabBarIcon,headerTitle,headerTitleStyle,headerStyle};
};

const StackOptions = ({navigation}) => {
    // console.log(navigation);
    let {state,goBack} = navigation;
    // if (!state.params.isVisible){
    //     return;
    // }
    let headerTitles ='1234';
    const headerStyle = {backgroundColor:'#4ECBFC'};
    const headerTitle = '1234'
    const headerTitleStyle = {fontSize:20,color:'white',fontWeight:'500',alignSelf:'center'}
    const headerBackTitle = false;
    const headerLeft = (
    <TouchableOpacity onPress={()=>{goBack()}}>
                            <Image
                                style={{marginLeft:13,width:20,height:20}}
                                source={backicon}
                            />
        </TouchableOpacity>       
    );
    let headerRight;
    if (state.params.headerRight){
        headerRight = state.params.headerRight;
    }
    else {
        headerRight :null
    }
    let header;
    if (state.params.isVisible === true){
        header = null;
    }
    return {headerStyle,headerTitle,headerTitleStyle,headerBackTitle,headerLeft,header,headerRight}




};


const styles = StyleSheet.create({
    TabBarIcon:{
        width:24,
        height:24
    }
});


export default MyApp;
