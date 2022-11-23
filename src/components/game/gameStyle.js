import { StyleSheet } from "react-native-web";

export default StyleSheet.create({
    gameContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'column',
        alignItems: 'center'
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