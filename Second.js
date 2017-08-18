import React, { Component } from 'react';
import {
    Button,
    Image,
    View,
    Text
} from 'react-native';

export default class Second extends Component {
    static navigationOptions = {
        title:'第二页',
    };

    render() {
        const {params} = this.props.navigation.state;
        return (
        <View style={{backgroundColor:'#fff',flex:1}}>
            <Text style={{padding:20}}>第二页 {params.chuanzhang}</Text>

        </View>

        );
    }
}
 