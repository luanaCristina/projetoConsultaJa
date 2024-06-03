import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import logoImage from '../assets/consulta_ja_logo_1.png';

const PasswordRecoveryScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handlePasswordRecovery = () => {
    if (!email) {
      setError('Email é obrigatório');
      return;
    }

    // lógica de recuperação de senha chamar uma API
    console.log('Email:', email);

    setError('');
    // Exemplo de navegação ou exibição de mensagem de sucesso
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Image
        source={logoImage}
        style={styles.logo}
      />
      <Text style={styles.title}>Digite seu email, telefone ou nome de usuário e enviaremos um link para alteração e criação de uma nova senha.</Text>
      <TextInput
        style={styles.input}
        placeholder="Número de telefone, Usuário ou Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.recoveryButton} onPress={handlePasswordRecovery}>
        <Text style={styles.recoveryButtonText}>Recuperar Senha</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Voltar ao Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#5B8BDF",
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 320, 
    height: 290,
    marginBottom: 1,
    marginTop: -150,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
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
  recoveryButton: {
    backgroundColor: '#004AAD',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
    width: '100%',
  },
  recoveryButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default PasswordRecoveryScreen;