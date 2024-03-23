import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { Button } from '../atoms/Button';

const options = ['Class A', 'Class B', 'Class C'];
export const Select = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);


  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (option:string) => {
    setSelectedValue(option);
    toggleModal();
  };

  return (
    <View>
        <Button variant={"outline"} onPress={toggleModal}>
            <Text className='text-gray-900'>{selectedValue || 'Escolha uma opção'}</Text>
        </Button>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              width: 200,
            }}
          >
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => handleOptionSelect(option)}
              >
                <Text style={{ padding: 10 }}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};
