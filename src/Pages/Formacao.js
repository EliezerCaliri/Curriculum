import React from 'react';

import {Text, View, Button} from 'react-native';

const Formacao = ({navigation}) =>{
    return (
        <View> 
            <Text>Chama na formação</Text>
            <Button title="Home" onPress ={() => navigation.navigate('Home')}/> 
        </View>
    );
}

export default Formacao;