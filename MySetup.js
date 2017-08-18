import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    DeviceEventEmitter
} from 'react-native';

export default  class MySetup extends Component{
    static navigationOptions = {
        title:'设置',
        drawerLabel: '设置',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./image/1.png')}
                style={[styles.tabIcon, {tintColor: tintColor}]}
            />
        ),
    };

    Changeroute = ()=>{
        DeviceEventEmitter.emit('Changeroute', '1');
    }

    render() {
        return (
             <View style={{backgroundColor:'#fff'}}>
                <Button
                    style={{padding:20}}
                    onPress={() => this.props.navigation.navigate('DrawerOpen')}
                    title="点击打开侧滑菜单"
                />
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="返回我的界面"
                />
                <Button
                    onPress={this.Changeroute}
                    title="切换到路由二"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabIcon: {
        width: 24,
        height: 24,
    },
});

