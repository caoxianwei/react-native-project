/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	Text,
	View
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';

import Creation from './pages/creation'
import Account  from './pages/account'
import Edit from './pages/edit'

export default class App extends Component<{}> {
	constructor(){
		super();
		this.state={
			selectedTab : 'list'
		}
	}
	render() {
		return (
			<TabNavigator
				tabBarStyle={styles.tabBar}
				sceneStyle={styles.tabScene}
			>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'list'}
					renderIcon={() => <FontAwesome name="video-camera" size={24} color="#ccc"/>}
					renderSelectedIcon={() => <FontAwesome name="video-camera" size={24} color="#ee735c"/>}
					selectedTitleStyle={{color:"#ff8c00"}}
					onPress={() => this.setState({ selectedTab: 'list' })}>
					<Creation />
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'edit'}
					renderIcon={() => <FontAwesome name="home" size={24} color="#ccc"/>}
					renderSelectedIcon={() => <FontAwesome name="home" size={24} color="#ee735c"/>}
					badgeText=""
					selectedTitleStyle={{color:"#ff8c00"}}
					onPress={() => this.setState({ selectedTab: 'edit' })}>
					<Edit/>
				</TabNavigator.Item>
				<TabNavigator.Item
					selected={this.state.selectedTab === 'account'}
					renderIcon={() => <FontAwesome name="user" size={24} color="#ccc"/>}
					renderSelectedIcon={() => <FontAwesome name="user" size={24} color="#ee735c"/>}
					selectedTitleStyle={{color:"#ff8c00"}}
					onPress={() => this.setState({ selectedTab: 'account' })}>
					<Account />
				</TabNavigator.Item>
			</TabNavigator>
		);
	}
}

const styles = StyleSheet.create({
	tabBar:{
		height:50,
		borderTopWidth:1,
		borderStyle:'solid',
		borderTopColor:'#eee',
	},
	tabScene:{

	},
});
