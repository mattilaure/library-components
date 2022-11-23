import React from 'react';
import { TextInput } from 'react-native';

function CrossInputBox(props) {

  const handleChange = (e) => {
      if(props.callback){
          props.callback(e.target.value)
      }
  }

  return (
    <TextInput 
        placeholder={props.placeholder}
        onChange={handleChange}
        style={props.style}
    />
  )
}

export default CrossInputBox