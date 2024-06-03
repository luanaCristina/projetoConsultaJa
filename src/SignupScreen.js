import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SignupScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [dob, setDob] = useState('');
  const [susCard, setSusCard] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = () => {
    if (!name || !cpf || !dob || !susCard || !address || !email || !password || !confirmPassword) {
      setError('Todos os campos são obrigatórios');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      return;
    }

    // lógica de registro como chamar uma API
    console.log('Nome:', name);
    console.log('CPF:', cpf);
    console.log('Data de Nascimento:', dob);
    console.log('Cartão SUS:', susCard);
    console.log('Endereço:', address);
    console.log('Email:', email);
    console.log('Password:', password);

    setError('');
    // Exemplo de navegação ou exibição de mensagem de sucesso
    // navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRO DE USUÁRIO</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Data de Nascimento"
        value={dob}
        onChangeText={setDob}
      />
      <TextInput
        style={styles.input}
        placeholder="Cartão SUS"
        value={susCard}
        onChangeText={setSusCard}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={address}
        onChangeText={setAddress}
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
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Já tem uma conta? <Text style={styles.loginLink1}>Faça login</Text></Text>
      </TouchableOpacity>
      <TouchableOpacity >
        <Text style={styles.loginLink}>Precisamos de permissão para o serviço que você usa.<Text style={styles.loginLink2}>    Leia mais</Text></Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5B8BDF',
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    borderColor: '#2C64C6',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  error: {
    color: 'red',
    marginBottom: 20,
    textAlign: 'center',
  },
  signupButton: {
    backgroundColor: '#004AAD',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
    borderRadius: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  loginLink: {
    color: '#fff',
    textAlign: 'center',
  },
  loginLink1: {
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
  loginLink2: {
    
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});

export default SignupScreen;
