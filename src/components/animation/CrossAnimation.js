import React from 'react';
import {View,Image,StyleSheet} from "react-native";


function CrossAnimation() {
  return (
    <View style={styles.image}>
        <Image 
        style={styles.img}
            source={require('../../assets/images/RockPaperScissors.gif')}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height: 400,
        width: 400
    },
    img: {
        height: '100%',
        width: '100%'
    }
})

export default CrossAnimation