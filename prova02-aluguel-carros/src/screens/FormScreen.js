import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Alert
} from 'react-native';
import useFirebase from '../hooks/useFirebase';
import globalStyles from '../styles/globalStyles';

export default function FormScreen({ navigation }) {
  const [form, setForm] = useState({
    nomeCarro: '',
    nomeCliente: '',
    valorAluguel: '',
    dataAluguel:''
  });
  const { addAluguel } = useFirebase();

  const handleChange = (field, value) =>
    setForm({ ...form, [field]: value });

  const handleSubmit = async () => {
    try {
      await addAluguel(form);
      Alert.alert('Sucesso', 'Aluguel Feito!');
    } catch (error) {
      Alert.alert('Erro', 'Algo deu errado!');
      console.error(error);
    }
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Cadastro</Text>
      {['nomeCarro', 'nomeCliente', 'valorAluguel', 'dataAluguel'].map((field) => (
        <TextInput
          key={field}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          style={globalStyles.input}
          value={form[field]}
          onChangeText={(v) => handleChange(field, v)}
        />
      ))}
      <TouchableOpacity
        style={globalStyles.button}
        onPress={handleSubmit}
      >
        <Text style={globalStyles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
