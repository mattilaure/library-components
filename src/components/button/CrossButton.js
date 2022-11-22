import React from 'react';
import { Pressable } from 'react-native';

function CrossButton(props) {

    const handleClick = () => {
        if(props.callback){
            props.callback()
        }
    }

  return (
    <Pressable onPress={handleClick}>
        {props.children}
    </Pressable>
  )
}

export default CrossButton