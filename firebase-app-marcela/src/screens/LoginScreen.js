import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import firebase from '../config/firebase';
import auth from '@react-native-firebase/auth';
import TextInputComponent from '../components/TextInput';
import ButtonComponent from '../components/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(userCredential => {
        const user = userCredential.user;
        console.log('User signed in:', user);
        navigation.replace('Home'); // Navega a la pantalla de inicio después de iniciar sesión
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Error signing in:', errorCode, errorMessage);
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
      <ButtonComponent title="Login" onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('Register')}>Si no tienes una cuenta, regístrate </Text>
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

export default LoginScreen;