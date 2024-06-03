import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logoImage from '../assets/consulta_ja_logo_1.png'; 

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      setError('Email e senha são obrigatórios');
      return;
    }

    // adicionar a lógica de autenticação chamar uma API
    console.log('Email:', email);
    console.log('Password:', password);

    setError('');
    navigation.navigate('Service');
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={logoImage}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('PasswordRecoveryScreen')}>
          <Text style={styles.recoveryLink}>Esqueceu a senha?</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.signupLink}>Não tem uma conta? <Text style={styles.signupLink1}>Cadastre-se</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5B8BDF',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  innerContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: 320, 
    height: 290,
    marginBottom: 1,
    marginTop: -150,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#2C64C6',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
    width: '100%', 
  },
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  loginButton: {
    backgroundColor: '#004AAD',
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: 'center',
    width: '100%', 
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  recoveryLink: {
    marginTop: 20,
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  signupLink: {
    color: '#fff',
    textAlign: 'center',
  },
  signupLink1: {
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
