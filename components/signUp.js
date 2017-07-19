import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal, Keyboard, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BirthdayModal from './birthdayModal';
import SexModal from './sexModal';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

});

export default class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { birthdayModalVisible: false, sexModalVisible: false };

		this.updateBirthdayModalVisible = this.updateBirthdayModalVisible.bind(this);
		this.updateSexModalVisible = this.updateSexModalVisible.bind(this);
	}

	updateBirthdayModalVisible() {
		this.setState({ birthdayModalVisible: false });
	}

	updateSexModalVisible() {
		this.setState({ sexModalVisible: false });
	}

	render() {
		return (
			<View style={{ backgroundColor: 'rgb(14,34,66)', height, width, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					style={{ width: width - 140, height: 45, borderBottomWidth: 1, borderColor: 'rgb(20,75,126)', justifyContent: 'center', flexDirection: 'row' }}
					onPress={() => this.setState({ birthdayModalVisible: true })}
				>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Icon name="calendar" color='rgb(20,75,126)' size={20} /></View>
					<View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center' }}><Text style={{ color: 'rgb(20,75,126)', fontSize: 18 }}>Birthday :</Text></View>
				</TouchableOpacity>
				<View style={{ height: 20 }} />
				<TouchableOpacity
					style={{ width: width - 140, height: 45, borderBottomWidth: 1, borderColor: 'rgb(20,75,126)', justifyContent: 'center', flexDirection: 'row' }}
					onPress={() => this.setState({ sexModalVisible: true })}
				>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Icon name="intersex" color='rgb(20,75,126)' size={20} /></View>
					<View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center' }}><Text style={{ color: 'rgb(20,75,126)', fontSize: 18 }}>Sex :</Text></View>
				</TouchableOpacity>
				<View style={{ height: 70 }} />
				<TouchableOpacity style={{ backgroundColor: 'rgb(88,157,184)', width: width - 100, height: 45, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
					<Text style={{ fontSize: 15, fontWeight: 'bold', color: 'rgb(158,202,223)' }}>REGISTER</Text>
				</TouchableOpacity>
				<BirthdayModal birthdayModalVisible={this.state.birthdayModalVisible} updateBirthdayModalVisible={() => this.updateBirthdayModalVisible()} />
				<SexModal sexModalVisible={this.state.sexModalVisible} updateSexModalVisible={() =>this.updateSexModalVisible()} />
			</View>
		)
	}
}