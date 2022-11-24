import React from 'react';
import { Pressable, Text } from 'react-native';

function CrossButton(props) {

  const handleClick = () => {
      if(props.callback){
        props.callback(props.label)  
      }
  }

  return (
    <Pressable onPress={handleClick} style={props.style}>
        <Text style={{
          color:'white'
        }}>{props.label}</Text>
    </Pressable>
  )
}

export default CrossButton