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
                }}>Tasks around you</Text>
                
                
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start', marginHorizontal:'10%', marginTop:'5%'
                }}>Task Board</Text>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}>
                    <Icon name="shopping-cart" type="entypo" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="pill" type="material-community" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="box" type="font-awesome-5" size={20} style={{marginTop:'10%'}}></Icon>
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start',
                }}>$50</Text></View>
                    
                </View>
                
                
             
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}>
                    <Icon name="shopping-cart" type="entypo" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="pill" type="material-community" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="box" type="font-awesome-5" size={20} style={{marginTop:'10%'}}></Icon>
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start',
                }}>$60</Text></View>
                    
                </View>
                
                
             
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}>
                    
                    <Icon name="pill" type="material-community" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="box" type="font-awesome-5" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="box" type="font-awesome-5" size={20} style={{marginTop:'10%'}}></Icon>
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start',
                }}>$45</Text></View>
                    
                </View>
                
                
             
                </View>
                <View style={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}>
                    <Icon name="shopping-cart" type="entypo" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    <Icon name="shopping-cart" type="entypo" size={20} style={{marginTop:'10%'}}></Icon>
                    <Icon name="chevron-right" type="entypo" size={20}></Icon>
                    
                    <Icon name="box" type="font-awesome-5" size={20} style={{marginTop:'10%'}}></Icon>
                    <Text onPress={()=>navigation.navigate('MapRun')} style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, alignSelf:'flex-start',
                }}>$120</Text></View>
                    
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