import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Search extends Component {
	render() {
		return (
			<TouchableOpacity onPress={Actions.pop}>
				<Text>search</Text>
			</TouchableOpacity>
		)
	}
}