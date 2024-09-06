import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function Shirts(props) {

 function filterDesc(desc){
    if(desc.length < 27){
        return desc;
    }

    return `${desc.substring(0, 23)}...`;
 }

 return (
   <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.shirtImg}
      />
      <Text style={styles.shirtText}>
          {filterDesc(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.shirtText}> {props.cost} </Text>
      </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container:{
        paddingVertical: '2%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    shirtImg:{
        width: 175,
        height: 175
    },
    shirtText:{
        fontSize: 16
    }
});