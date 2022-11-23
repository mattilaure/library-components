import React from 'react';
import { Pressable, Text } from 'react-native';

function CrossButton(props) {

  const handleClick = (e) => {
      if(props.callback){
        props.callback(e,props.label)
      }
  }

  return (
    <Pressable onPress={handleClick} style={props.style}>
        <Text>{props.label}</Text>
    </Pressable>
  )
}

export default CrossButton