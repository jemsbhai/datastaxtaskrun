import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Profile() {
    const [name, setName] = useState('John Doe');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('user@example.com');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{marginTop:'20%'}}></View>
            <View style={{ marginTop: '0%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center',
                }}>Profile</Text>
                <Image source={{uri:'https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Clipart.png'}} style={{width:100, height:100, alignSelf:'center', marginTop:'5%'}}></Image>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={name} onChange={(e)=>setName(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Full name"></TextInput>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={email} onChange={(e)=>setEmail(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Email"></TextInput>
                </View>
                <View style={{borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={phone} onChange={(e)=>setPhone(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Phone" ></TextInput>
                </View>
                <View style={{borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput  value={address} onChange={(e)=>setAddress(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Address" ></TextInput>
                </View>
                
                <View style={{backgroundColor:"#000", borderRadius:15, padding:'5%', width:'75%', alignSelf:'center', justifyContent:'space-between', marginVertical:'10%'}}>
                    <Text onPress={()=>{navigation.navigate('Home')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:20, alignSelf:'center', textAlignVertical:'center'}}>Save</Text>
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