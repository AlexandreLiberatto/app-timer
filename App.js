import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker'; // Importa o Picker correto

export default function App() {

  console.disableYellowBox = true;

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

  var numeros = [];
  for(var i = 1; i <= 60; i++){
    numeros.push(i);
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: 'white', fontSize: 30 }}>Selecione seu Tempo ⏳</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'white'}}>Minutos:</Text>
      <Picker
        selectedValue={minutos}
        onValueChange={(itemValue, itemIndex) => setarMinutos(itemValue)}
        style={{height:50,width:100}}
      >
        { numeros.map(function(val){
          return(
          <Picker.Item label={val.toString()} value={val.toString()} />
         )
        })
        }
      </Picker>
      <Text style={{color:'white'}}>Segundos:</Text>
      <Picker
        selectedValue={segundos}
        onValueChange={(itemValue, itemIndex) => setarSegundos(itemValue)}
        style={{height:50,width:100}}
      >
        { numeros.map(function(val){
          return(
          <Picker.Item label={val.toString()} value={val.toString()} />
         )
        })
        }
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
