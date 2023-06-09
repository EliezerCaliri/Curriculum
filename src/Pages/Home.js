import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({navigation}) =>{
    return (
        <View style ={styles.container}>
            <Text style={styles.row}>React</Text>
            <Text style={styles.row}>Native</Text>
            <Button title="Formacao" onPress ={() => navigation.navigate('Formacao')}/>   
        </View>
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
      },
      row: {
        padding: 4,
        borderBottomColor: 'red',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });   


export default Home;