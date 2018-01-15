import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
var width = Dimensions.get('window').width;
export default class Header extends Component{
	constructor(){
		super();
		this.state={
			up:false,
		}
	}
	up(){
		console.log(12312)
		this.setState({
			up:!this.state.up
		})
	}

	render(){
		var row = this.props.data;
		return (
			<TouchableHighlight>
				<View style={styles.item}>
					<Text style={styles.title}>{row.title}</Text>
					<View style={styles.thumbBox}>
						<Image
							style={styles.thumb}
							source={{uri:row.thumb}}
						/>
						<Icon name="play-circle" size={28} style={styles.play}/>
					</View>
					<View style={styles.itemFooter}>
						<View style={styles.handleBox}>
							<Icon name="heart" size={28} style={[styles.up,this.state.up?null:styles.down]}  onPress={this.up.bind(this)}/>
							<Text style={styles.handleText} onPress={this.up.bind(this)}>喜欢</Text>
						</View>
						<View style={styles.handleBox}>
							<Icon name="comments" size={28} style={styles.commentIcon} />
							<Text style={styles.handleText}>评论</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		)
	}
}
var styles = StyleSheet.create({
	item: {
		width: width,
		marginBottom: 10,
		backgroundColor: '#fff'
	},
	thumbBox:{
		width: width,
		height: width * 0.56,
	},
	thumb: {
		width: '100%',
		height: '100%',
		resizeMode: 'cover'
	},

	title: {
		padding: 10,
		fontSize: 18,
		color: '#333'
	},

	itemFooter: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#eee'
	},

	handleBox: {
		padding: 10,
		flexDirection: 'row',
		width: width / 2 - 0.5,
		justifyContent: 'center',
		backgroundColor: '#fff'
	},

	play: {
		position: 'absolute',
		bottom: 14,
		right: 14,
		width: 46,
		height: 46,
		paddingTop: 9,
		paddingLeft: 12,
		backgroundColor: 'transparent',
		borderColor: '#fff',
		borderWidth: 1,
		borderRadius: 23,
		color: '#ed7b66'
	},

	handleText: {
		paddingLeft: 12,
		fontSize: 18,
		color: '#333'
	},

	down: {
		fontSize: 22,
		color: '#333'
	},

	up: {
		fontSize: 22,
		color: '#ed7b66'
	},

	commentIcon: {
		fontSize: 22,
		color: '#333'
	},

	loadingMore: {
		marginVertical: 20
	},

	loadingText: {
		color: '#777',
		textAlign: 'center'
	}
});