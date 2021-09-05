import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{marginTop:'60%'}}></View>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '0%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'left', marginLeft:'10%'
                }}>TaskRun</Text>
                <Text style={{
                    fontFamily: 'Roboto',  fontSize: 15, textAlign: 'left', marginLeft:'10%'
                }}>Runner Companion</Text>
                <View style={{backgroundColor:"#000", borderRadius:15, padding:'5%', width:'75%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row', marginVertical:'5%'}}>
                    <Text onPress={()=>{navigation.navigate('Login')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:20, alignSelf:'flex-start', textAlignVertical:'center'}}>Login</Text>
                    <Icon name="chevron-right" type="entypo" color="#FFF" style={{alignSelf:'flex-end'}}></Icon>
                </View>
                <View style={{backgroundColor:"#fff", borderRadius:15, padding:'5%', width:'75%', alignSelf:'center', justifyContent:'space-between', flexDirection:'row', borderWidth:3, borderColor:"#000"}}>
                    <Text onPress={()=>{navigation.navigate('Register')}}  style={{color:'#000',fontFamily:'Roboto', fontSize:20, alignSelf:'flex-start', textAlignVertical:'center'}}>Create an account</Text>
                    <Icon name="plus" type="entypo" color="#000" style={{alignSelf:'flex-end'}}></Icon>
                </View>
            </View>
          
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '15%',
        width: '25%',
        marginTop: '10%',
        marginLeft: '10%',
        resizeMode: 'contain',
        alignSelf: 'flex-start'
    },

});