import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const Cotizacion = ({resultado}) => {

    if(!resultado) return null;

    return ( 
        <>
            <Text>El precio del bitcoin: {resultado.PRICE}</Text>
        </>
     );
}

const styles = StyleSheet.create({

})
 
export default Cotizacion;