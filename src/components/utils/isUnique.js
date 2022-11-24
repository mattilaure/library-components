export const isUnique = (ranking,username) => {
    const object = {
        username: username,
        wins: 0
    };
    ranking.forEach((element,index) => {
        if(element.username === username){
            console.log('uguale');
           return index
        }else{
            return object
        }
    });
    
}