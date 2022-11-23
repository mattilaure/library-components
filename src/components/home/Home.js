import React from 'react';
import {View,Text} from "react-native"
import CrossButton from '../button/CrossButton';
import CrossInputBox from '../inputBox/CrossInputBox';
import style from "./homeStyle";

function Home() {
  const buttonStyle={
    width:100,
    backgroundColor:'red'
  }
  const inputStyle={
    width:250,
    height:50,
    padding: 1
  }

  const handleChange=(e)=>{
    console.log(e)
  }
  const handleClick=()=>{
    console.log("Click");
  }

  return (
    <View style={style.homeContainer}>
        <Text>Sasso Carta Forbice</Text>

        <View style={style.inputContainer}>
            <CrossInputBox 
              placeholder={"Inserire username"}
              callback={handleChange}
              style={inputStyle}
            />
            <CrossButton callback={handleClick} style={buttonStyle} label={"Gioca"}/>
        </View>
    </View>
  )
}

export default Home