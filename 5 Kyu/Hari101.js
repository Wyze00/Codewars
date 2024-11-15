// int32 to IPv4 (344)

function int32ToIp(int32){

    return int32
            .toString(2)
            .padStart(32,0)
            .match(/[01]{8}/g)
            .map(e=>Number.parseInt(e,2))
            .join('.');
  }

// ROT 13 (345)

function rot13(str) {

    return str.replaceAll(/[A-Za-z]/g,(e) => {

        let tmp = e.toLowerCase().charCodeAt() - 13 - 97;

        if(tmp < 0){tmp += 26}


        return e == e.toLowerCase() ? String.fromCharCode(tmp+97) : String.fromCharCode(tmp+65);
    });
}

console.log(rot13("EBG13 rknzcyr."));