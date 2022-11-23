import React, {useRef, useState} from 'react'
import {View} from 'react-native'
import CrossButton from '../button/CrossButton'
import CrossText from '../text/CrossText'
import style from './gameStyle'
import { play } from '../utils/play';

function Game(props) {
    const [state,setState]=useState({
        choice:null,
        playerNameResult:"",
        playerTempChoice:""
    })

    const handleClick=()=>{
        let result=play(state.choice)
        switch(result){
            case 'w':
                setState({
                    ...state,
                    playerNameResult:'Hai vinto'
                })
                break;
            case 'p':
                setState({
                    ...state,
                    playerNameResult:'Pareggio! Rigioca'
                })
                break;
            case 'l':
                setState({
                    ...state,
                    playerNameResult:'Hai perso'
                })
                break;
        }
        
    }

    //Setto la scelta del player
    const setChoice=(e,text)=>{
        let pChoose=null
        switch(text){
            case "Carta":
                pChoose=0
                break;
            case "Forbice":
                pChoose=1
                break;
            case "Sasso":
                pChoose=2
                break;
        }
        setState({
            ...state,
            playerTempChoice:e.target.innerText,
            choice:pChoose
        })
    }

    return (
        <View style={style.gameContainer}>
            <CrossText>{props.name} sta giocando contro la CPU</CrossText>
            <View style={style.inputContainer}>
                <View  style={style.buttonsCoiceContainer}>
                    <CrossButton callback={setChoice} style={style.buttonStyle} label={"Carta"} />
                    <CrossButton callback={setChoice} style={style.buttonStyle} label={"Forbice"} />
                    <CrossButton callback={setChoice} style={style.buttonStyle} label={"Sasso"} />
                </View>

                <CrossText>Hai scelto: {state.playerTempChoice}</CrossText>
                <CrossButton callback={handleClick} style={[style.buttonStyle,style.buttonPlayStyle]} label={"Gioca"}/>
                <CrossText>{state.playerNameResult}</CrossText>
            </View>
        </View>
    )
}

export default Game