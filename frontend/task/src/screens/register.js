import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Register() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%'}}></View>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '0%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'left', marginLeft:'10%'
                }}>Create an account</Text>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={name} onChange={(e)=>setName(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Full name"></TextInput>
                </View>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={email} onChange={(e)=>setEmail(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Email"></TextInput>
                </View>
                <View style={{borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={password} onChange={(e)=>setPassword(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Create Password" secureTextEntry></TextInput>
                </View>
                <View style={{borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Confirm Password" secureTextEntry></TextInput>
                </View>
                
                <View style={{backgroundColor:"#000", borderRadius:15, padding:'5%', width:'75%', alignSelf:'center', justifyContent:'space-between', marginVertical:'10%'}}>
                    <Text onPress={()=>{navigation.navigate('Profile')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:20, alignSelf:'center', textAlignVertical:'center'}}>Register</Text>
                </View>
            </View>
            <Text onPress={()=>navigation.navigate('Login')} style={{fontFamily:'Roboto', marginLeft:'15%', marginTop:'10%'}}>Already a member? <Text style={{fontWeight:'bold'}}>Sign in</Text></Text>
          
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