import React from 'react';
import { View, Modal, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default SexModal = (props) => {
  const maleIconBorderWidth = props.sex === 0 ? 3 : 1;
  const femaleIconBorderWidth = props.sex === 1 ? 3 : 1;
  return (
    <Modal
      visible={props.sexModalVisible}
      animationType="slide"
    >
      <View style={{ backgroundColor: 'rgb(14,34,66)', height, width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 3 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: 80, width: 80, borderRadius: 40, borderWidth: maleIconBorderWidth, justifyContent: 'center', alignItems: 'center', borderColor: 'blue' }}
            onPress={() => {
              props.changeSex(0); // 男は0
              props.updateSexModalVisible(false);
            }}
          >
            <Icon name='male' color='blue' size={40} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: 80, width: 80, borderRadius: 40, borderWidth: femaleIconBorderWidth, justifyContent: 'center', alignItems: 'center', borderColor: 'red' }}
            onPress={() => {
              props.changeSex(1); // 女は1
              props.updateSexModalVisible(false);
            }}
          >
            <Icon name='female' color='red' size={40} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3 }} />
      </View>
    </Modal>
  );
}