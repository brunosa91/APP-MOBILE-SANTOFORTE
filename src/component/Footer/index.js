import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import Shirts from '../Shirts';

export default function Footer() {
 return (
   <View>
       <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
       <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Shirts img={require('../../assets/1.png')} cost="50,00">
                    Caneca Mágica   
                </Shirts>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shirts img={require('../../assets/5.png')} cost="60,00">
                    Camiseta gato felix 
                </Shirts>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shirts img={require('../../assets/3.png')} cost="60,00">
                    Camiseta no rain   
                </Shirts>
            </View>
        </ScrollView> 
       </View>
   </View>
  );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 24,
        fontFamily: 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }
})