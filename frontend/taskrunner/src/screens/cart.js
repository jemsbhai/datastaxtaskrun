import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TextInput, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const gitems = [
    {
      id: '1',
      name: 'Bread',
    },
    {
        id: '2',
        name: 'Egg',
      },
      {
        id: '3',
        name: 'Milk',
      },
      {
        id: '4',
        name: 'Turkey',
      },
      {
        id: '5',
        name: 'Maize',
      },
      {
        id: '6',
        name: 'Banana',
      },
      {
        id: '7',
        name: 'Almond',
      },
      {
        id: '8',
        name: 'Honey',
      },
  ];

  const items = [
    {
      id: '1',
      name: 'Bread',
      img: 'https://purepng.com/public/uploads/large/purepng.com-breadfood-bread-941524621326bhrz7.png'
    },
    {
        id: '2',
        name: 'Egg',
        img: 'https://purepng.com/public/uploads/large/purepng.com-eggseggseggshellegg-whiteegg-yolk-1411527413743absg1.png'
      },
      {
        id: '3',
        name: 'Milk',
        img: 'https://purepng.com/public/uploads/thumbnail/purepng.com-milkmilkliquidnutritioncow-14115278745167tceg.png'
      },
      {
        id: '4',
        name: 'Turkey',
        img: 'https://purepng.com/public/uploads/large/purepng.com-baconfood-meat-fried-pork-cooked-941524619205lmptp.png'
      },
      {
        id: '5',
        name: 'Maize',
        img: 'https://purepng.com/public/uploads/thumbnail/purepng.com-maizevegetables-corn-maize-sweet-corn-grain-dent-corn-941524712687je6wd.png'
      },
      {
        id: '6',
        name: 'Banana',
        img: 'https://purepng.com/public/uploads/large/purepng.com-bananabananafruitside-vieworganic-481521306381lqons.png'
      },
      {
        id: '7',
        name: 'Almond',
        img: 'https://purepng.com/public/uploads/thumbnail/purepng.com-almondnutfruitalmond-981524755729fvwqq.png'
      },
      {
        id: '8',
        name: 'Honey',
        img: 'https://purepng.com/public/uploads/large/purepng.com-honeyhoneysweetbeessugar-1411527528187dhp0g.png'
      },
  ];

  


export default function Cart() {
    const navigation = useNavigation();
    const [budget, setBudget] = useState(0)

    const Grocery = ({ name }) => (
        <View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>{name}</Text>
       </View>
 
      );
    
      const renderGrocery = ({ item }) => (
        <Item name={item.name} />
      );
      var cart = '';


    const Item = ({ name, img, onPress }) => (
        <TouchableOpacity onPress={onPress}><View style={{borderColor:'#ddd', borderWidth:1, borderRadius:10, backgroundColor:'#eee', width:'85%', alignSelf:'center', padding:'2.5%', marginTop:'5%', marginRight:'5%'}}>
        <View style={{flexDirection:'row', paddingHorizontal:'5%', justifyContent:'space-between'}}><Text onPress={()=>{cart.concat(name); console.log(cart)}} style={{alignSelf:'center', color:"#000", fontWeight:'bold', fontFamily:'Roboto', fontSize:15}}>{name}</Text>
       </View>
        <Image source={{uri:img}} style={{height:100, width:100, resizeMode:'contain'}}></Image>
    </View></TouchableOpacity>
      );
    
      const renderItem = ({ item }) => (
        <Item name={item.name} img={item.img} />
      );



    return (
        <View style={styles.container}>
            <View style={{marginTop:'.5%', marginBottom:'20%'}}></View>
                <Icon name="menu" type="entypo" style={{alignSelf:'flex-start', marginLeft:'10%'}}></Icon>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, marginHorizontal:'10%',
                }}>Available Tasks</Text>
               
               <FlatList
                    numColumns={2}
                    contentContainerStyle={{alignSelf:'center', marginHorizontal:'10%'}}
                    indicatorStyle="black"
                    data={items}
                    onPress={()=>{console.log('Cart')}}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

        


                
                
                <View style={{flexDirection:'row', justifyContent:'space-evenly', backgroundColor:"#eee", paddingVertical:'5%', position:'absolute', bottom:0, width:'100%'}}>
                <Text style={{fontFamily:'Roboto', marginLeft:'15%', marginTop:'7.5%', fontWeight:'bold'}}>Budget</Text>
                <TextInput onChange={(e)=>setBudget(parseInt(e))} value={budget} style={{fontFamily:'Roboto', marginLeft:'15%', fontWeight:'bold'}}></TextInput>
                <View style={{backgroundColor:"#000", borderRadius:15, padding:'2.5%', width:'25%', alignSelf:'flex-end', justifyContent:'space-between', marginVertical:'5%'}}>
                    <Text onPress={()=>{navigation.navigate('Stores')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:15, alignSelf:'center', textAlignVertical:'center'}}>Continue</Text>
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