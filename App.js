import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Cotizacion from './components/Cotizacion';
import axios from 'axios';

const App = () => {
  const [moneda, setMoneda] = useState('');
  const [criptomoneda, setCriptomoneda] = useState('');
  const [validarForm, setValidarForm] = useState(false);
  const [resultado, setResultado] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const cotizarCriptomenda = async () => {
      if (validarForm) {
        // consultar la api para obtner la cotización
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`;
        const response = await axios.get(url);

        // loading start
        setLoading(true);

        //Hide the spinner y show data
        setTimeout(() => {
          setResultado(response.data.DISPLAY[criptomoneda][moneda]);
          setValidarForm(false);
          //loading finish
          setLoading(false);
        },300);

      }
    };
    cotizarCriptomenda();
  }, [validarForm]);

  return (
    <>
      <ScrollView>
        <Header />
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
        <View>
        {loading ? <ActivityIndicator
          style={{marginTop: 40}}
          size="large"
          color="#5E49E2"
        /> : <Cotizacion resultado={resultado} />}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  imagen: {
    width: '100%',
    height: 150,
    marginHorizontal: '2.5%',
  },
  contenido: {
    marginHorizontal: '2.5%',
  },
});

export default App;
