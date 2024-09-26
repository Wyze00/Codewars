// The Supermarket Queue (251)

function queueTime(customers, n) {
  
    if(customers.length == 0){return 0}
    if(customers.length <= n){return Math.max(...customers)}
  
    const myA = customers;

    const res = Array.from({length: n});

    for(let i = 0; i<n; i++){
        res[i] = myA.shift();
    }

    while(myA.length != 0){
        res[res.indexOf(Math.min(...res))] += myA.shift();
    }

    return Math.max(...res)

}

// Dashatize it (252) 

function dashatize(num) {



    const myS = String(num).replace(/[13579]/g,'-$&-').replaceAll('--','-');

    if(myS.indexOf('-') == 0){

        const smn = myS.slice(1);

        if(smn.lastIndexOf('-') == smn.length-1){
            return smn.slice(0,smn.length-1);
        }

        return smn;

    }

    if(myS.lastIndexOf('-') == myS.length-1){
        return myS.slice(0,myS.length-1)
    }

    return myS;

  }

// Reverse every other word in the string (253)

function reverse(str){
    
      return str
            .split(' ')
            .map((e,i) => {
                
                if(i % 2 != 0){return e.split('').reverse().join('')}

                return e;
            })
            .join(' ')
            .trim();
    }

// Array Helpers (254)

Array.prototype.square = function(){
    return this.map(e=>e**2);
}

Array.prototype.cube = function(){
    return this.map(e=>e**3);
}

Array.prototype.average = function(){
    return this.reduce((a,c)=>a+c,0) / this.length;
}

Array.prototype.sum = function(){
    return this.reduce((a,c)=>a+c,0);
}

Array.prototype.even = function(){
    return this.filter(e=>e%2==0);
}

Array.prototype.odd = function(){
    return this.filter(e=>e%2!=0);
}

// If you can read this... (255)

function toNato(words) {
    const wor = words.toUpperCase('');
    const nato = {
        A: 'Alfa',
        B: 'Bravo',
        C: 'Charlie',
        D: 'Delta',
        E: 'Echo',
        F: 'Foxtrot',
        G: 'Golf',
        H: 'Hotel',
        I: 'India',
        J: 'Juliett',
        K: 'Kilo',
        L: 'Lima',
        M: 'Mike',
        N: 'November',
        O: 'Oscar',
        P: 'Papa',
        Q: 'Quebec',
        R: 'Romeo',
        S: 'Sierra',
        T: 'Tango',
        U: 'Uniform',
        V: 'Victor',
        W: 'Whiskey',
        X: 'Xray',
        Y: 'Yankee',
        Z: 'Zulu'
    }

    return wor
            .replace(/ /g,'')
            .replace(/[A-Z]/g,e => ' ' + nato[e] + ' ')
            .trim()
            .replace(/  /g,' ');

}
