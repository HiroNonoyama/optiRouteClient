import React, { Component } from 'react';
import { View, Modal, Text, TouchableOpacity, TextInput, Dimensions, Keyboard, StyleSheet } from 'react-native';
import styles from './constraint';

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
  }

  render() {
    const padding = 30;
    const textInputContainerHeight = textInputContainerHeight;
    return (
      <Modal visible={this.props.birthdayModalVisible} animationType="slide">
        <View style={{ backgroundColor: styles.backgroundColor, height, width, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ width: width - padding, height: textInputContainerHeight, flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 12 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    autoFocus={true}
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no2.focus() : null} />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no2'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no3.focus() : null} />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no3'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no4.focus() : null} />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no4'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no5.focus() : null} />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no5'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no6.focus() : null} />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no6'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no7.focus() : null} />
                </View>
              </View>
            </View>
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 1 }} />
            <View style={{ flexDirection: 'row', height: textInputContainerHeight, alignItems: 'center', justifyContent: 'center', flex: 6 }}>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no7'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => text.length !== 0 ? this.refs.no8.focus() : null} />
                </View>
              </View>
              <View style={style.textIpnutContainer}>
                <View>
                  <TextInput 
                    ref='no8'
                    style={style.textInput}
                    maxLength={1}
                    keyboardType='number-pad'
                    onChangeText={(text) => Keyboard.dismiss()} />
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
            onPress={() => this.props.updateBirthdayModalVisible(false)}
          >
            <Text style={{ fontSize: 15, fontWeight: 'bold', color: styles.buttonTextColor }}>GO!</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}