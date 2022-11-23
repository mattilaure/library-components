import React, {useState} from 'react'
import {View} from 'react-native'
import CrossButton from '../button/CrossButton'
import CrossText from '../text/CrossText'
import style from './gameStyle'
import { play } from '../utils/play';

let playerPoints=0
let cpuPoints=0

function Game(props) {
    const [state,setState]=useState({
        choice:null,
        cpuChoice:null,
        playerNameResult:"",
        playerTempChoice:""
    })

    const handleClick=()=>{
        let result=play(state.choice)
        switch(result.resultGame){
            case 'w':
                playerPoints++
                setState({
                    ...state,
                    cpuChoice:result.cpu,
                    playerNameResult:'Hai vinto'
                })
                break;
            case 'p':
                setState({
                    ...state,
                    cpuChoice:result.cpu,
                    playerNameResult:'Pareggio! Rigioca'
                })
                break;
            case 'l':
                cpuPoints++
                setState({
                    ...state,
                    cpuChoice:result.cpu,
                    playerNameResult:'Hai perso'
                })
                break;
        }
        checkWinner()
    }
    function checkWinner(){
        if(playerPoints>=2){
            console.log(props.name, " vince!")
            playerPoints=0
            cpuPoints=0
        }else if(cpuPoints>=2){
            console.log("CPU vince!")
            playerPoints=0
            cpuPoints=0
        }
    }

    //Setto la scelta del player
    const setChoice=(text)=>{
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
            playerTempChoice:text,
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
                <CrossText>La CPU ha scelto: {state.cpuChoice}</CrossText>
                <CrossText>{state.playerNameResult}</CrossText>
            </View>
        </View>
    )
}

export default Game