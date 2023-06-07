import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 

export default function App() {
  const buttons = ['AC', 'DEL', '%', '/', 7, 8, 9, '*', 4, 5, 6, '-', 3, 2, 1, '+', 0, '.', '+/-', '='] 
  const [darkMode, setdarkMode] = useState(false)

  const styles = StyleSheet.create({
    results: {
      backgroundColor: darkMode ? "#282f3b" : "f5f5f5",
      width: "100%",
      minHeight: 280,
      alignItems:'flex-end',
      justifyContent:'flex-end'
    },
    resultsText:{
      color: darkMode ? "#f5f5f5" : "#282f38",
      margin: 10,
      fontSize: 40
    },
    themeButton: {
      alignSelf:'flex-start',
      bottom: 130,
      margin: 15,
      backgroundColor: darkMode ? "#7b8084" : "e5e5e5",
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      borderRadius: 25,
    },
    button: {
      borderColor: darkMode ? "3f4d5b" : "e5e5e5",
      borderWidth:1,
      alignItems:'center',
      justifyContent: 'center',
      minWidth:90,
      minHeight:90,
      flex: 2
    },
    buttons: {
      flexDirection:'row',
      flexWrap:'wrap'
    },
    textButton:{
      color: darkMode ? "b5b7bb" : "7c7c7c",
      fontSize: 20
    }
  });
 
  
  return (  
    <View>
      <View style={styles.results}>
        <TouchableOpacity style={styles.themeButton}>
          <Entypo name={darkMode ? "light-up" : "moon"} size={24} color={darkMode ? "white" : "black"} onPress={()=> darkMode ? setdarkMode(false) : setdarkMode(true)}/>
        </TouchableOpacity>
        <Text style={styles.resultsText}>2+2=4</Text>
      </View>
      <View style={styles.buttons}>
        {
          buttons.map((button) =>
        button === "=" ? 
        <TouchableOpacity key={button} style={[styles.button, {backgroundColor:"#9dbc7b"}]}>
          <Text style={[styles.textButton, {color: 'black', fontSize: 25}]}>{button}</Text>
        </TouchableOpacity>  
        : 
        <TouchableOpacity key={button} style={[styles.button, {backgroundColor: typeof(buttom) === 'number' ? darkMode ? "#303946" : "#fff" : darkMode ? "#414853" : "#ededed"}]}>
          <Text style={styles.textButton}>{button}</Text>
        </TouchableOpacity>  

        )}
      </View>
    </View>
  );
}


