import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Modal from 'react-native-modal';
import {Input, Link, Button} from '../../components/atoms';

const TestModal = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{flex: 1}}>
      <Button title="Show modal" onPress={toggleModal} />

      <Modal
        isVisible={isModalVisible}
        backdropColor="black"
        coverScreen="true"
        onSwipeComplete={() => setModalVisible(false)}
        swipeDirection="left">
        <View style={styles.modalCard}>
          <ScrollView showsVerticalScrollIndicator={false} style={styles.modal}>
            <Button title="X" onPress={toggleModal} style={styles.btnModal} />
            <View style={styles.fillAuth}>
              <Input placeholder="Nama Lengkap" />
              <Input placeholder="NPM" />
            </View>
            <Link
              title="Already Have an Account ?"
              onPress={() => navigation.navigate('Login')}
            />
            <Button title="Register Now" />
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
};

export default TestModal;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 40,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginTop: 12,
  },
  subTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#B0B0B0',
    marginTop: 6,
  },
  logo: {
    marginTop: 28,
    width: 333,
    height: 188,
    alignSelf: 'center',
  },
  fillAuth: {
    marginTop: 28,
    marginBottom: 16,
  },
  modal: {
    backgroundColor: '#fff',
    padding: 24,
    borderRadius: 30,
  },
  btnModal: {
    width: 10,
  },
});
