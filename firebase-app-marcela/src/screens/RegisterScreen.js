import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '../config/firebase';
import TextInputComponent from '../components/TextInput';
import ButtonComponent from '../components/Button';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User registered:', user);
        navigation.replace('Home'); // Navega a la pantalla de inicio después de registrarse
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error registering user:', errorCode, errorMessage);
      });
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInputComponent
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <ButtonComponent title="Register" onPress={handleRegister} />
      <Text onPress={() => navigation.navigate('Login')}>Si ya dispones de una cuenta, inicia sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
});

export default RegisterScreen;
