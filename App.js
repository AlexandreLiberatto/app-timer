import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {

  console.disableYellowBox = true;

  const [segundos, setarSegundos] = useState(0);
  const [minutos, setarMinutos] = useState(0);

  const [alarmeSound, setarAlarmeSound] = useState([
    {
      id:1,
      selecionado: true,
      som: 'alarme 1',
      file: 'alarm1.mp3'
    },
    {
      id:2,
      selecionado: false,
      som: 'alarme 2',
      file: 'alarm2.mp3'
    },
    {
      id:3,
      selecionado: false,
      som: 'alarme 3',
      file: 'alarm3.mp3'
    }
  ]);

  var numeros = [];
  for(var i = 1; i <= 60; i++){
    numeros.push(i);
  };

  function setarAlarme(id){
    let alarmesTemp = alarmeSound.map(function(val){
      if(id != val.id)
        val.selecionado = false;
      else
        val.selecionado = true;
      return val;
    })
    setarAlarmeSound(alarmesTemp);
  }

  return (
    <View style={styles.container}>
       <StatusBar style="auto" />
      <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'transparent']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%'
        }}
      />
      <Text style={{ color: 'white', fontSize: 30 }}>Selecione seu Tempo ⏳</Text>
      <View style={{flexDirection:'row'}}>
      <Text style={{color:'white', paddingTop:16}}>Minutos:</Text>
      <Picker
        selectedValue={minutos}
        onValueChange={(itemValue, itemIndex) => setarMinutos(itemValue)}
        style={{height:50,width:100}}
      >
        { numeros.map(function(val){
          return(
          <Picker.Item style={{color:'white'}} label={val.toString()} value={val.toString()} />
         )
        })
        }
      </Picker>
      <Text style={{color:'white', paddingTop:16}}>Segundos:</Text>
      <Picker
        selectedValue={segundos}
        onValueChange={(itemValue, itemIndex) => setarSegundos(itemValue)}
        style={{height:50,width:100}}
      >
        { numeros.map(function(val){
          return(
          <Picker.Item style={{color:'white'}} label={val.toString()} value={val.toString()} />
         )
        })
        }
      </Picker>
      </View>
      <View>
        {alarmeSound.map(function(val){
          if(val.selecionado){
          return(
            <TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolherSelecionado}>
             <Text style={{color:'white',}}>{val.som}</Text>
           </TouchableOpacity>
          )
        } else {
          return(
            <TouchableOpacity onPress={()=>setarAlarme(val.id)} style={styles.btnEscolher}>
             <Text style={{color:'white',}}>{val.som}</Text>
           </TouchableOpacity>
          )
        }
        })}
           
      </View>

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
  btnEscolher: {
    marginBottom:10,
    width:150,
    padding:8,
    backgroundColor:'#0D98BA',
    borderRadius:15,
    alignItems: 'center',
  },
  btnEscolherSelecionado:{
    marginBottom:10,
    width:150,
    padding:8,
    backgroundColor:'#0D98BA',
    borderRadius:15,
    alignItems: 'center',
    borderColor:'white',
    borderWidth:1
  }
});
