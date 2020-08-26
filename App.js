import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
} from "react-native";
import Header from "./components/Header";
import Formulario from './components/Formulario';

const App = () => {

  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [validarForm, setValidarForm] = useState(false);

  return (
    <>
      <Header/>
      <Image
        style={styles.imagen}
        source={require('./assets/img/cryptomonedas.png')}
      />
      <View style={styles.contenido}>
      <Formulario 
        moneda={moneda}
        criptomoneda={criptomoneda}
        setMoneda={setMoneda}
        setCriptomoneda={setCriptomoneda}
        setValidarForm={setValidarForm}
      />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  imagen:{
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  }
});

export default App;
