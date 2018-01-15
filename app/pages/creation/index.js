/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	ListView,
} from 'react-native';
import Header from '../../components/header'
import Item from './subpage/Item'
import Loading from '../../components/loading'
import Nomore from '../../components/nomore'
import request from '../../common/requirest'
import config from '../../common/config'

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

var cacheResults = {
	nextPage:1,
	dataList:[],
	total:0
}
export default class Creation extends Component<{}> {
	constructor(){
		super();
		var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			dataSource: ds.cloneWithRows([]),
			isLoadingTail:false,

		};
	}
	componentDidMount(){
		this.getData(cacheResults.nextPage);
	}
	getData(page){
		let self = this;
		this.setState({
			isLoadingTail:true,
		})
		request.get(config.api.creations,{accountToken:123,page:page})
			.then((responseJson) => {
				let list = cacheResults.dataList.slice();
				list = list.concat(responseJson.data);
				cacheResults.dataList = list;
				cacheResults.total = responseJson.total;
				cacheResults.nextPage++
				setTimeout(()=>{
					self.setState({
						isLoadingTail:false,
						dataSource:ds.cloneWithRows(cacheResults.dataList)
					})
				},2000)
				console.log(cacheResults);
			})
			.catch((error) => {
				console.error(error);
				self.setState({
					isLoadingTail:false,
				})
			});

	}
	hasMore(){
		return cacheResults.dataList.length!==cacheResults.total;
	}
	getMoreData(){
		if(!this.hasMore() || this.state.isLoadingTail){
			return;
		}
		this.getData();
	}
	renderFooter(){
		if(!this.hasMore()&&cacheResults.dataList.length!==0){
			return (
				<Nomore/>
			)
		}

		if(!this.state.isLoadingTail){
			return <View/>
		}

		return <Loading/>



	}
	render() {
		return (
			<View style={styles.container}>
				<Header header="列表页面"/>
				<ListView
					dataSource={this.state.dataSource}
					onEndReachedThreshold={20}
					onEndReached={this.getMoreData.bind(this)}
					renderFooter={this.renderFooter.bind(this)}
					renderRow={(row)=><Item data={row}/>}
					enableEmptySections={true}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		backgroundColor:'#f5f5f5',
	},
});
