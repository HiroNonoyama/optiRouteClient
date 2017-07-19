import React from 'react';
import { View, Modal, TouchableOpacity, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const { width, height } = Dimensions.get('window');

export default SexModal = (props) => {
  return (
    <Modal
      visible={props.sexModalVisible}
      animationType="slide"
    >
      <View style={{ backgroundColor: 'rgb(14,34,66)', height, width, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
        <View style={{ flex: 3 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'blue' }}
            onPress={() => props.updateSexModalVisible(false)}
          >
            <Icon name='male' color='blue' size={40} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
          <TouchableOpacity
            style={{ height: 80, width: 80, borderRadius: 40, borderWidth: 1, justifyContent: 'center', alignItems: 'center', borderColor: 'red' }}
            onPress={() => props.updateSexModalVisible(false)}
          >
            <Icon name='female' color='red' size={40} />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 3 }} />
      </View>
    </Modal>
  );
}