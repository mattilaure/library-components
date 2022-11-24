import { Platform } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getFromStorage = async () => {

    if(Platform.OS === "web"){

        if(localStorage.getItem("ranking")){
            let ranking = JSON.parse(localStorage.getItem("ranking"));
            return ranking
        }else{
            localStorage.setItem("ranking",[])
        }

    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){

        try{
            const jsonValue = await AsyncStorage.getItem('ranking')

            if(jsonValue !== null){
                return JSON.parse(jsonValue)
            }else{
                await AsyncStorage.setItem('ranking',[])
            }
        }catch(e){

            console.log(e);
        }
    }
}

export const setInStorage = async (users) => {
    if(Platform.OS === "web"){
        localStorage.setItem("ranking",JSON.stringify(users))

    }
    else if(Platform.OS === "ios" || Platform.OS === "android"){

        try{
           await AsyncStorage.setItem("ranking",JSON.stringify(users))
        }catch(e){
            console.log(e);
        }
    }
}