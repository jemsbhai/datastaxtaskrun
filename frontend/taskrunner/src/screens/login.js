import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Login() {
    const navigation = useNavigation();
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    return (
        <View style={styles.container}>
            <View style={{marginTop:'30%'}}></View>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '0%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'left', marginLeft:'10%'
                }}>Sign in</Text>
                <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={email} onChange={(e)=>setEmail(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Email"></TextInput>
                </View>
                <View style={{borderColor:'#ccc', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'75%', alignSelf:'center', padding:'2.5%', marginTop:'5%'}}>
                    <TextInput value={password} onChange={(e)=>setPassword(e)} style={{width:'90%', alignSelf:'center', color:"#676767", fontWeight:'bold', fontFamily:'Roboto'}} placeholder="Password" secureTextEntry></TextInput>
                </View>
                <Text style={{fontFamily:'Roboto', fontWeight:'bold', marginLeft:'15%', color:"#302F2F", textDecorationStyle:'solid', textDecorationLine:'underline'}}>Forgot password?</Text>
                
                <View style={{backgroundColor:"#000", borderRadius:15, padding:'5%', width:'75%', alignSelf:'center', justifyContent:'space-between', marginVertical:'5%'}}>
                    <Text onPress={()=>{navigation.navigate('Home')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:20, alignSelf:'center', textAlignVertical:'center'}}>Login</Text>
                </View>
            </View>
            <Text onPress={()=>navigation.navigate('Register')} style={{fontFamily:'Roboto', marginLeft:'15%', marginTop:'15%'}}>Not a member? <Text style={{fontWeight:'bold'}}>Join now</Text></Text>
          
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