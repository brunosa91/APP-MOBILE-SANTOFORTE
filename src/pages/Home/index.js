import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import  { useNavigation } from '@react-navigation/native';

import Shirts from '../../component/Shirts';

export default function Home() {
 const navigation = useNavigation();

 return (
   <View style={styles.container}>
       <View style={styles.header}>
         <Image
          source={require('../../assets/banner.png')}
          style={styles.image}
         />

         <View style={styles.textContainer}>
            <Text style={styles.text}>CAMISETA</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>•</Text>
            <Text style={[styles.text, { color: '#CECECF'} ]}>DIVERSAS</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
              <MaterialIcons
                name="filter-list"
                size={24}
                color="#000"
              />
            </TouchableOpacity>
         </View>
       </View>

      <View style={styles.line} />

      <ScrollView>
        <Text style={styles.text}>LANÇAMENTOS</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shirts img={require('../../assets/1.png')} cost="R$50,00" onClick={()=> navigation.navigate('Detail') }>
            Caneca Mágica
          </Shirts>
          <Shirts img={require('../../assets/2.png')} cost="R$50,00" onClick={()=> navigation.navigate('Detail') }>
            Caneca tiger
          </Shirts>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shirts img={require('../../assets/3.png')} cost="R$60,00" onClick={()=> alert('CLICOU')}>
            Camiseta F no rain
          </Shirts>
          <Shirts img={require('../../assets/4.png')} cost="R$60,00" onClick={()=> alert('CLICOU')}>
          Camiseta F gato felix
          </Shirts>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Shirts img={require('../../assets/5.png')} cost="R$60,00" onClick={()=> alert('CLICOU')}>
            Camiseta M gato felix
          </Shirts>
          <Shirts img={require('../../assets/6.png')} cost="R$60,00" onClick={()=> alert('CLICOU')}>
          Camiseta M no rain
          </Shirts>
        </View>

      </ScrollView>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  header:{
    marginBottom: 8
  },
  image:{
    width: '100%'
  },
  textContainer:{
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text:{
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line:{
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});