import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';

export default class Header extends Component{
	constructor(){
		super();
	}
	render(){
		return (
			<View style={styles.header}>
				<Text style={styles.headerTitle}>{this.props.header}</Text>
			</View>
		)
	}
}
var styles = StyleSheet.create({
	header:{
		paddingTop:25,
		paddingBottom:12,
		backgroundColor:"#ee735c"
	},
	headerTitle:{
		color:"#fff",
		fontSize:16,
		textAlign:'center',
		fontWeight:'600'
	}
});