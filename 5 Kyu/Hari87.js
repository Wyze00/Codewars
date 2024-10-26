// Human Readable Time (319)

function humanReadable (seconds) {

    const res = [];
    let time = 3600;

    for(let i = 0; i<3; i++){

        res.push(String(Math.floor(seconds/time)).padStart(2,"0"));
        seconds %= time;
        time /= 60;
        
    }

    return res.join(":");
}

// RGB TO HEX (320)

function rgb(r, g, b) {

    [r,g,b] = [r,g,b].map(e=>e>255?255:e<0?0:e);
    
    return `${(r).toString(16).padStart(2,'0')}${(g).toString(16).padStart(2,'0')}${(b).toString(16).padStart(2,'0')}`.toUpperCase();
}

// Rot13 (321)

function rot13(message){
    
    return message.split('').map((e) => {

        if(e.toLowerCase().charCodeAt() < 97 || e.toLowerCase().charCodeAt() > 122){return e}

        return e.toLowerCase().charCodeAt() + 13 > 122 
            ? String.fromCharCode(e.charCodeAt() + 13 - 26) 
            : String.fromCharCode(e.charCodeAt() + 13);
    }).join('');
  }
