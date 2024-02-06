import React from 'react';
import {TextInput} from 'react-native';

const Input = (placeholder) => {
    return <TextInput placeholder={placeholder} style={style.input} />;
};

const style = StyleSheet.create({
    input: {
        borderWidth: 1,
        margin: 10,
        borderRadius: 10,
        padding: 10,  
    },
});

export default Input;