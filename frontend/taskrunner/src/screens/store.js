import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, CheckBox } from 'react-native-elements'
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
      name: 'Walmart',
      img: 'https://cdn.corporate.walmart.com/dims4/WMT/c2bbbe9/2147483647/strip/true/crop/2389x930+0+0/resize/1446x563!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2Fd6%2Fe7%2F48e91bac4a8ca8f22985b3682370%2Fwalmart-logos-lockupwtag-horiz-blu-rgb.png'
    },
    {
        id: '2',
        name: 'Aldi',
        img: 'http://assets.stickpng.com/images/5a0c71ca9642de34b6b65ce0.png'
      },
      {
        id: '3',
        name: 'Target',
        img: 'https://purepng.com/public/uploads/large/purepng.com-target-logologobrand-logoiconslogos-251519939485oxces.png'
      },
      {
        id: '4',
        name: 'Giant',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Giant_Food_logo.svg/839px-Giant_Food_logo.svg.png'
      },
      {
        id: '5',
        name: 'Safeway',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Safeway_Logo.svg/1280px-Safeway_Logo.svg.png'
      },
      {
        id: '6',
        name: 'Whole Foods',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Whole_Foods_Market_201x_logo.svg/1200px-Whole_Foods_Market_201x_logo.svg.png'
      },
      
  ];

  


export default function Stores() {
    const navigation = useNavigation();
    const [budget, setBudget] = useState(0)
    const [quality, setQuality] = useState(false);
    const [cheap, setCheap] = useState(false)

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
            <View style={{marginTop:'10%', marginBottom:'0%'}}></View>
                <Icon name="menu" type="entypo" style={{alignSelf:'flex-start', marginLeft:'10%'}}></Icon>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, marginHorizontal:'10%',
                }}>Select Grocery Stores</Text>
               
               <FlatList
                    numColumns={2}
                    contentContainerStyle={{alignSelf:'center', marginHorizontal:'10%'}}
                    indicatorStyle="black"
                    data={items}
                    onPress={()=>{console.log('Cart')}}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />

<Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 30, marginHorizontal:'10%',
                }}>Additional Preferences</Text>

                <CheckBox
                        center
                        title='Budget-friendly'
                        iconRight
                        iconType='material'
                        checkedIcon='add'
                        uncheckedIcon='clear'
                        checkedColor='red'
                        checked={cheap}
                        onPress={()=>setCheap(!cheap)}
                        />
                        <CheckBox
                        center
                        title='Highest Quality'
                        iconRight
                        iconType='material'
                        checkedIcon='add'
                        uncheckedIcon='clear'
                        checkedColor='red'
                        checked={quality}
                        onPress={()=>setQuality(!quality)}
                        />

                        

        


                
                
                    

                <View style={{backgroundColor:"#000", borderRadius:15, padding:'2.5%', width:'50%', alignSelf:'flex-end', justifyContent:'space-between', marginVertical:'5%', marginRight:'25%'}}>
                    <Text onPress={()=>{navigation.navigate('MapRun')}}  style={{color:'#FFF',fontFamily:'Roboto', fontSize:15, alignSelf:'center', textAlign:'center',textAlignVertical:'center'}}>Find Taskrunner</Text>
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