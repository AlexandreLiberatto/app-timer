import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa o Picker correto

export default function App() {

  const [segundos, setarSegundos] = useState(0);
  const [minutos, setarMinutos] = useState(0);

  const [alarmeSound, setarAlarmeSound] = useState([
    {
      selecionado: true,
      som: 'alarme 1',
      file: 'alarm1.mp3'
    },
    {
      selecionado: false,
      som: 'alarme 2',
      file: 'alarm2.mp3'
    }
  ]);

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 30 }}>Selecione seu Tempo ⏳</Text>
      <View style={{flexDirection:'row'}}>
      <Picker
        style={{height:50,width:100}}
      >
        <Picker.Item label="10 segundos" value={10} />
        <Picker.Item label="20 segundos" value={20} />
      </Picker>
      <Picker
        style={{height:50,width:100}}
      >
        <Picker.Item label="10 segundos" value={10} />
        <Picker.Item label="20 segundos" value={20} />
      </Picker>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#66FF00',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
