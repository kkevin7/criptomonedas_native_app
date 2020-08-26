import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if(!resultado) return null;

    return ( 
        <>
            <View style={styles.resultado}>
                <Text style={styles.texto}>Precio: {' '}
                    <Text style={styles.span}>{resultado.PRICE}</Text>
                </Text>
                <Text style={styles.texto}>Precio más alto del dá: {' '}
                    <Text style={styles.span}>{resultado.HIGHDAY}</Text>
                </Text>
                <Text style={styles.texto}>Precio más bajo del día: {' '}
                    <Text style={styles.span}>{resultado.LOWDAY}</Text>
                </Text>
                <Text style={styles.texto}>Variación últimas 24 horas: {' '}
                    <Text style={styles.span}>{resultado.CHANGEPCT24HOUR}</Text>
                </Text>
                <Text style={styles.texto}>Última actualización: {' '}
                    <Text style={styles.span}>{resultado.LASTUPDATEE}</Text>
                </Text>
            </View>
        </>
     );
}

const styles = StyleSheet.create({
    resultado: {

    },
    texto: {

    },
    precio: {

    },
    span: {
        
    }
})
 
export default Cotizacion;