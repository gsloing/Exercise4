import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style={style.title}>{style}</Text>
        </View>
    )
};

const style = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      marginTop: 10,
    },
});

export default Title;
