import React from 'react';
import {View,Text} from "react-native"
import CrossButton from '../button/CrossButton';
import CrossInputBox from '../inputBox/CrossInputBox';
import style from "./homeStyle";

function Home() {
  return (
    <View style={style.homeContainer}>
        <Text>Sasso Carta Forbice</Text>

        <View style={style.inputContainer}>
            <CrossInputBox 
                placeholder={"Inserire username"}
                callback={()=>console.log('ciao')}
            />
            <CrossButton>
                <Text>Gioca</Text>
            </CrossButton>
        </View>
    </View>
  )
}

export default Home