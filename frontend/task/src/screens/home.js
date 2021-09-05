import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Home() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{marginTop:'20%'}}></View>
                <Icon name="menu" type="entypo" style={{alignSelf:'flex-start', marginLeft:'10%'}}></Icon>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, marginHorizontal:'10%',
                }}>Let's clear your to-do list!</Text>
                
                
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start', marginHorizontal:'10%', marginTop:'5%'
                }}>Add a new task</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text onPress={()=>navigation.navigate('Cart')} style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Groceries</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="shopping-cart" type="entypo" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Rx Refill</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="pill" type="material-community" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Package</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="box" type="font-awesome-5" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                </View>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start', marginHorizontal:'10%', marginTop:'5%'
                }}>Tasks in progress</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Task #50</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="shopping-cart" type="entypo" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Task #25</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="pill" type="material-community" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
            
                </View>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start', marginHorizontal:'10%', marginTop:'5%'
                }}>Completed Tasks</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Task #21</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="shopping-cart" type="entypo" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Task #05</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="shopping-cart" type="entypo" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'25%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>Task #03</Text>
                    <Icon name="chevron-right" type="entypo" size={15}></Icon></View>
                    <Icon name="box" type="font-awesome-5" size={35} style={{marginTop:'10%'}}></Icon>
                </View>
                </View>


                
                
                <View style={{flexDirection:'row', justifyContent:'space-evenly', backgroundColor:"#eee", paddingVertical:'5%', position:'absolute', bottom:0, width:'100%'}}>
                <Icon name="home" type="entypo" size={20} style={{marginTop:'10%'}}></Icon>
                <Icon name="featured-play-list" type="material-icons" size={20} style={{marginTop:'10%'}}></Icon>
                <Icon name="user" type="font-awesome" size={20} style={{marginTop:'10%'}}></Icon>
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