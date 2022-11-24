import { StyleSheet,Dimensions,Platform } from "react-native";

export const webStyle =  StyleSheet.create({
    gameContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#c85260' 
    },
    inputContainer: {
        flexDirection: 'column'
    },
    buttonsCoiceContainer:{
        flexDirection: 'row'
    },
    buttonStyle:{
        width:100,
        height:'auto',
        padding:5,
        backgroundColor:'red',
        margin:2
    },
    buttonPlayStyle:{
        alignSelf:'center'
    }
})

export const mobileStyle = StyleSheet.create({
    gameContainer: {
        padding: 5,
        width: '100%',
        backgroundColor: 'transparent' ,
        flexDirection: 'column',
        alignItems: 'center',

    }
})

