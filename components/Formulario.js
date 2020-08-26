import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Picker} from '@react-native-community/picker';
import axios from 'axios';

const Formulario = () => {
    const [ moneda, setMoneda] = useState('');
    const [ criptomoneda, setCriptomoneda] = useState('');
    const [ criptomonedas, setCriptomonedas] = useState('');

    const obtenerMonenda = moneda => {
        setMoneda(moneda);
    }

    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const response = await axios.get(url);
            if(response.status === 200){
                setCriptomonedas(response.data.Data);
            }
        }
        consultarAPI();
    }, [])

    return ( 
        <>
            <View>
                <Text style={styles.label}>Moneda</Text>
                <Picker
                    selectedValue={moneda}
                    onValueChange={moneda => obtenerMonenda(moneda)}
                >
                    <Picker.Item label="- Seleccione -" value="" />
                    <Picker.Item label="Dolar de Estados Unidos" value="USD" />
                    <Picker.Item label="Pesos Mexicano" value="MXN" />
                    <Picker.Item label="Euro" value="EUR" />
                    <Picker.Item label="Libra Esterlina" value="GBP" />
                </Picker>
                <Text style={styles.label}>Criptomoneda</Text>
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    label:{
        fontFamily: 'Lato-Black',
        textTransform: 'uppercase',
        fontSize: 22,
        marginVertical: 20,
    }
});

export default Formulario;