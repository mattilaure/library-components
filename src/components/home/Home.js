import React,{useState} from 'react';
import { Text } from 'react-native'
import CrossButton from '../button/CrossButton';
import Game from '../game/Game';
import CrossInputBox from '../inputBox/CrossInputBox'



function Home() {
  const [visibile, setVisible]=useState(false)
  const [name, setName]=useState("")
  
  let nameTemp=""
  const handleChange=(e)=>{
    nameTemp=e
  }
  const startGame=()=>{
    setName(nameTemp)
    setVisible(true)
  }

  return (
    <>
      <Text>Sasso Carta Forbice</Text>
      <CrossInputBox 
          placeholder={"Inserire username"}
          callback={handleChange}
          style={inputStyle}
      />
      <CrossButton callback={startGame} style={buttonStyle} label={"Inserisci nome"}/>
      {visibile ?
        <Game name={name}/>
        :
        <></>
      }
    </>
    
  )
}
const inputStyle={
  width:250,
  height:50,
  padding: 1
}
const buttonStyle={
  width:100,
  backgroundColor:'red'
}
export default Home