import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import Contador from './Contador';

export default function App() {
  console.disableYellowBox = true;
  const [estado, setarEstado] = useState('selecionar');
  const [segundos, setarSegundos] = useState(1);
  const [minutos, setarMinutos] = useState(0);
  const [alarmeSound, setarAlarmeSound] = useState([
    {
      id: 1,
      selecionado: true,
      som: 'alarme 1',
      file: require('./assets/alarme1.mp3'),
    },
    {
      id: 2,
      selecionado: false,
      som: 'alarme 2',
      file: require('./assets/alarme2.mp3'),
    },
    {
      id: 3,
      selecionado: false,
      som: 'alarme 3',
      file: require('./assets/alarme3.mp3'),
    },
  ]);

  const numeros = Array.from({ length: 60 }, (_, i) => i + 1);

  function setarAlarme(id) {
    const alarmesTemp = alarmeSound.map((val) => ({
      ...val,
      selecionado: val.id === id,
    }));
    setarAlarmeSound(alarmesTemp);
  }

  if (estado === 'selecionar') {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LinearGradient
          colors={['rgba(59, 29, 105,1)', 'rgba(59, 29, 105,0.8)']}
          style={styles.background}
        />
        <Text style={styles.title}>Selecione o seu Tempo:</Text>
        <View style={styles.pickerContainer}>
          <Text style={styles.label}>Min: </Text>
          <Picker
            selectedValue={minutos}
            onValueChange={(itemValue) => setarMinutos(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="0" value="0" />
            {numeros.map((val) => (
              <Picker.Item key={val} label={val.toString()} value={val} />
            ))}
          </Picker>
          <Text style={styles.label}>Seg: </Text>
          <Picker
            selectedValue={segundos}
            onValueChange={(itemValue) => setarSegundos(itemValue)}
            style={styles.picker}
          >
            {numeros.map((val) => (
              <Picker.Item key={val} label={val.toString()} value={val} />
            ))}
          </Picker>
        </View>
        <View style={styles.alarmesContainer}>
          {alarmeSound.map((val) => (
            <TouchableOpacity
              key={val.id}
              onPress={() => setarAlarme(val.id)}
              style={val.selecionado ? styles.btnEscolherSelecionado : styles.btnEscolher}
            >
              <Text style={styles.btnText}>{val.som}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity onPress={() => setarEstado('iniciar')} style={styles.btnIniciar}>
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (estado === 'iniciar') {
    return (
      <Contador
        alarmes={alarmeSound}
        setarMinutos={setarMinutos}
        setarSegundos={setarSegundos}
        setarEstado={setarEstado}
        minutos={minutos}
        segundos={segundos}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
  title: {
    color: 'white',
    fontSize: 30,
  },
  pickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    color: 'white',
    paddingTop: 16,
  },
  picker: {
    height: 50,
    width: 100,
    color: 'white',
  },
  alarmesContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  btnEscolher: {
    marginRight: 10,
    padding: 8,
    backgroundColor: '#76FF7A',
  },
  btnEscolherSelecionado: {
    marginRight: 10,
    padding: 8,
    backgroundColor: '#2E8B57',
    borderColor: 'white',
    borderWidth: 1,
  },
  btnIniciar: {
    backgroundColor: '#76FF7A',
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 30,
    borderColor: 'white',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 20,
  },
});
