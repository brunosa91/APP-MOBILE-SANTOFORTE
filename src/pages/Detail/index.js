import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet} from 'react-native';

import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({ navigation }) {

  navigation.setOptions({
     headerTitle: 'CAMISETA NO RAIN'
  })

 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail.png')}
       style={styles.image}
       resizeMode="cover"
       />

       <View>
         <View>
           <Text style={[styles.title, { fontSize: 24 } ]}>R$ 60,00</Text>
         </View>
         <View opacity={0.4}>
           <Text style={[styles.title, { fontSize: 30 } ]}>Camiseta no rain</Text>
         </View>

         <View style={styles.dotContainer}>
          <Dot color="#ddd" />
          <Dot color="#000" />
         </View>

         <View style={{flexDirection: 'row', width: '100%'}}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor="#17181a" color="#FFF" >PP</SizeButton>
            <SizeButton>P</SizeButton>
            <SizeButton>M</SizeButton>
            <SizeButton>G</SizeButton>
          </ScrollView>
         </View>

         <View style={styles.textContent}>
          <Text style={styles.textTitle}>
          Camiseta no rain
          </Text>
          <Text style={styles.textContent}>
            Camiseta com malha de 100% algodão com fio penteada. 
          </Text>
          <Text style={styles.textList}>
            - Categoria: Feminino
          </Text>
          <Text style={styles.textList}>
            - Material: Algodão
          </Text>
         </View>

        <Button/>

        <View style={styles.line} />

        <Footer/>

       </View>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    fontFamily: 'Anton_400Regular',
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 16,
    lineHeight: 25,
    marginVertical: '2%',
    paddingHorizontal: '2%'
  },
  textTitle: {
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
});