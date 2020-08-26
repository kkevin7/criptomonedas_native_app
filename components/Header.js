import React from 'react';
import {Text, StyleSheet, Platform} from 'react-native';

const Header = () => {
    return ( 
        <>
            <Text style={styles.encabezado}>Criptomonedas</Text>
        </>
     );
}

const styles = StyleSheet.create({
    encabezado: {
        paddingTop: Platform.OS === 'ios' ? 50 : 10,
        fontFamily: 'Lato-Black',
    }
});
 
export default Header;