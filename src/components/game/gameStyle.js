import { StyleSheet,Dimensions,Platform } from "react-native";

export const webStyle =  StyleSheet.create({
    gameContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        width: '100vw',
        height: '100vh',
        backgroundColor: '#c85260' 
    },
    inputContainer: {
        flexDirection: 'column'
    },
    buttonsCoiceContainer:{
        flexDirection: 'row',
        
    },
    card:{
        height: 120,
        width:120,

    },
    imgCont:{
        padding: 5,
        margin: 20
    },
    title:{
        fontSize:30,
        fontWeight: 'bold'
    },
    playButton:{
        backgroundColor: "#730e25",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: 'center',
        padding: 15,
        borderRadius: 25,
        width: 100,
    },
    choicesContainer:{
        margin:10
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

