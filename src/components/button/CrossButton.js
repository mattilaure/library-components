import React from 'react';
import { Pressable, Text } from 'react-native';

function CrossButton(props) {

  const handleClick = () => {
      if(props.callback){
          props.callback()
      }
  }

  return (
    <Pressable onPress={handleClick} style={props.style}>
        <Text>{props.label}</Text>
    </Pressable>
  )
}

export default CrossButton