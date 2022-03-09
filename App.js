import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Image } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.txttitulo}>TELA DE LOGIN</Text>
      <View style={styles.imagem}>
        <Image style={styles.img} source={require('./assets/snack-icon.png')} />
        <Text style={styles.txtImg}>O Oreia está de olho!!!</Text>
      </View>
      <Text style={styles.txt}>USUÁRIO:</Text>
      <TextInput style={styles.edtUsu} placeholder="Digite seu Usuario"/>
      <Text style={styles.txt}>SENHA:</Text>
      <TextInput style={styles.edtUsu} placeholder="Digite sua Senha" secureTextEntry={true}/>
      <Button
        title="ENTRAR"
      />

      <Button
        title="CADASTRE-SE"
        color="#841584"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'green',
    padding: 8,
  },

  imagem: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  img:{
    justifyContent:"center",
    alignItems: "center",
    borderRadius:200
  },

  txtImg:{
    color:"blue"
  },

  txttitulo:{
    textAlign: "center",
    color: "blue",
    fontWeight: "bolder",
    fontSize: 30
  },

  txt:{
    color: "blue",
    fontSize:20,
    fontWeight: "bolder",
    textAlign: "center"
  },

  edtUsu:{
    marginBottom:10,
    height: 30,
    backgroundColor: "white",
    borderRadius:15
  },


});
