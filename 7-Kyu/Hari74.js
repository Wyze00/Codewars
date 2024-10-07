// Move 10 (301)

function moveTen(s){
    
    return s
            .split('')
            .map(e=>e.charCodeAt()+10 > 122 ? 
                                            String.fromCharCode(e.charCodeAt() + 10 - 26) :  String.fromCharCode(e.charCodeAt()+10 ))
            .join('') ;
}
