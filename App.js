import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View ,Image, FlatList} from 'react-native';



export default function App() {

const [produit,setProduit]=useState('');
const [list,setListe]=useState([]);


const handelText = (newText)=>{
  setProduit(newText);
}

const handelSubmit = () =>{
  setListe(currentProduit => [...currentProduit,produit])
  setProduit('');
}
const renderData =({item})=>(
  <View style={styles.container1} >
            <Text>{item}</Text>
  </View>
);


      
     
 


 
  return (
    
    <View style={styles.container}>
     <View>
      <Text>{produit}</Text>
        <TextInput 
        style={styles.input} 
        placeholder='Entrz le nom du produit' 
        value={produit}
        onChangeText={handelText}/>
        <Button
          title='Sauvegarder'
          onPress={()=>handelSubmit()} />
     </View>
     <FlatList 
      data={list}
      renderItem={renderData}
      keyExtractor={item=>item.item}
     />
     
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    width :'100%',
    display:"flex",
    padding:20
   
  },
  input : {
    borderWidth:1,
    borderColor:'orange',
    height:42,
    borderRadius:25,
    padding:12,
    marginBottom:7,
   
  },
  container1: {
    backgroundColor: 'orange',
    width :'100%',
    height :75,
    marginTop:8,
    display:'flex',
    marginBottom :8,
    borderRadius :20,
    alignContent :"center",
    justifyContent :"center",
    alignItems :"center",
  },

  textPara:{
    color:"#FFF",
    fontSize:18,
    fontFamily:'poppins',
    marginBottom:12,
  },
 
 
});
