// Range Extractionv (316)

function solution(list){

    list.sort((a,b) => a-b);
    
    const res = [];

    while(list.length != 0){ 
        
        const cont = [];
        let tmp = list.shift();

        while(tmp + 1 == list[0]){
            cont.push(tmp);
            tmp = list.shift();
        }

        cont.push(tmp);
        res.push(cont)
    }

    return res.map((e) => {

        if(e.length == 1){return `${e}`}
        else if(e.length == 2){return e.join(',')}
        else {
            return `${e[0]}-${e[e.length-1]}`
        }
    }).join(',');
}