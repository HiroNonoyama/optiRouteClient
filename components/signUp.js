import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal, Keyboard, StyleSheet } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import BirthdayModal from './birthdayModal';
import SexModal from './sexModal';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userActions from '../actions/userActions';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({

});

class SignUp extends Component {
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

	handleSubmit() {
		// ここで、アカウント登録のAPIをたたく
		console.log('called');
		Actions.search();
	}

	render() {
		const { sex, year, month, day } = this.props;
		const isBirthdayFill = year && month && day;
		const isSexFill = sex === 0 || sex === 1;
		const isFill = isBirthdayFill && isSexFill;
		const birthdayText = isBirthdayFill ? `${year}/${month}/${day}` : 'Birthday :';
		const sexText = !isSexFill ? 'Sex :' : (sex === 0 ? 'male' : 'female');
		return (
			<View style={{ backgroundColor: 'rgb(14,34,66)', height, width, justifyContent: 'center', alignItems: 'center' }}>
				<TouchableOpacity
					style={{ width: width - 140, height: 45, borderBottomWidth: 1, borderColor: 'rgb(20,75,126)', justifyContent: 'center', flexDirection: 'row' }}
					onPress={() => this.setState({ birthdayModalVisible: true })}
				>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Icon name="calendar" color='rgb(20,75,126)' size={20} /></View>
					<View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center' }}><Text style={{ color: 'rgb(20,75,126)', fontSize: 18 }}>{birthdayText}</Text></View>
				</TouchableOpacity>
				<View style={{ height: 20 }} />
				<TouchableOpacity
					style={{ width: width - 140, height: 45, borderBottomWidth: 1, borderColor: 'rgb(20,75,126)', justifyContent: 'center', flexDirection: 'row' }}
					onPress={() => this.setState({ sexModalVisible: true })}
				>
					<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}><Icon name="intersex" color='rgb(20,75,126)' size={20} /></View>
					<View style={{ flex: 5, alignItems: 'flex-start', justifyContent: 'center' }}><Text style={{ color: 'rgb(20,75,126)', fontSize: 18 }}>{sexText}</Text></View>
				</TouchableOpacity>
				<View style={{ height: 70 }} />
				<TouchableOpacity
				  disabled={!isFill}
				  style={{ backgroundColor: 'rgb(88,157,184)', width: width - 100, height: 45, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
				  onPress={this.handleSubmit}
				>
					<Text
					  style={isFill ? { fontSize: 15, fontWeight: 'bold', color: 'white' } : { fontSize: 15, fontWeight: 'bold', color: 'rgb(158,202,223)' }}
					>
					  REGISTER
					</Text>
				</TouchableOpacity>
				<BirthdayModal
				  birthdayModalVisible={this.state.birthdayModalVisible}
				  updateBirthdayModalVisible={() => this.updateBirthdayModalVisible()}
				  year={this.props.year}
				  month={this.props.month}
				  day={this.props.day}
				  changeYear={this.props.changeYear}
				  changeMonth={this.props.changeMonth}
				  changeDay={this.props.changeDay}
				/>
				<SexModal
				  sexModalVisible={this.state.sexModalVisible}
				  updateSexModalVisible={() =>this.updateSexModalVisible()}
				  sex={this.props.sex}
				  changeSex={this.props.changeSex}
				/>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		sex: state.user.sex,
		year: state.user.year,
		month: state.user.month,
		day: state.user.day,
	}
}

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(userActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);