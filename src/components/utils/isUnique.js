export const isUnique = (ranking,username) => {
    const object = {
        username: username,
        wins: 0
    };
    let isUnique = true;
    let index = null;
    ranking.forEach((element,i) => {
        if(element.username === username){
            isUnique = false;
           index = i
        }
    });
    
    if(isUnique){
        return object
    }else{
        return index
    }
    
}