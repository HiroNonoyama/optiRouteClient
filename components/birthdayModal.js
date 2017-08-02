import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput, Dimensions, Keyboard, StyleSheet } from 'react-native';
import { styles } from './constraint';

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
  textIpnutContainer: {
    flex: 1,
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    width: 35,
    borderColor: styles.buttonColor,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 28,
    color: styles.buttonColor,
  },
});

export default class BirthdayModal extends Component {
  constructor(props) {
    super(props);
    this.state = { year1: null, year2: null, year3: null, year4: null, month1: null, month2: null, day1: null, day2: null };
  }

  render() {
    const { year1, year2, year3, year4, month1, month2, day1, day2 } = this.state;
    const padding = 30;
    const textInputContainerHeight = textInputContainerHeight;
    const isFill = year1 && year2 && year3 && year4 && month1 && month2 && day1 && day2;
    return (
      <Modal visible={this.props.birthdayModalVisible} animationType="slide">
        <View style={{ backgroundColor: styles.backgroundColor, height, width, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: width - padding, height: textInputContainerHeight, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 12 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={year1}
                    autoFocus={true}
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ year1: text });
                      text.length !== 0 ? this.refs.no2.focus() : null;
                    }}
                  />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={year2}
                    ref='no2'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ year2: text });
                      text.length !== 0 ? this.refs.no3.focus() : null;
                    }}
                  />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={year3}
                    ref='no3'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ year3: text });
                      text.length !== 0 ? this.refs.no4.focus() : null
                    }}
                  />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={year4}
                    ref='no4'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ year4: text });
                      text.length !== 0 ? this.refs.no5.focus() : null
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={month1}
                    ref='no5'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ month1: text });
                      text.length !== 0 ? this.refs.no6.focus() : null
                    }}
                  />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={month2}
                    ref='no6'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ month2: text });
                      text.length !== 0 ? this.refs.no7.focus() : null
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={day1}
                    ref='no7'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ day1: text });
                      text.length !== 0 ? this.refs.no8.focus() : null
                    }}
                  />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput
                    value={day2}
                    ref='no8'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => {
                      this.setState({ day2: text });
                      Keyboard.dismiss();
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: width - 30, height: 30, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'center', flex: 12 }}>
              <Text style={{ color: styles.buttonColor, fontSize: 12 }}>Year</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <Text style={{ color: styles.buttonColor, fontSize: 12 }}>Month</Text>
            </View>
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: 30, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <Text style={{ color: styles.buttonColor, fontSize: 12 }}>Day</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'center' }} />
          <TouchableOpacity
            style={{ backgroundColor: styles.buttonColor, width: width - 30, height: 45, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
            disabled={!isFill}
            onPress={() => {
              this.props.changeYear(`${year1}${year2}${year3}${year4}`);
              this.props.changeMonth(`${month1}${month2}`);
              this.props.changeDay(`${day1}${day2}`);
              this.props.updateBirthdayModalVisible(false);
            }}
          >
            <Text
              style={isFill ? { fontSize: 15, fontWeight: 'bold', color: 'white' } : { fontSize: 15, fontWeight: 'bold', color: styles.buttonTextColor }}
            >
              GO!
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}