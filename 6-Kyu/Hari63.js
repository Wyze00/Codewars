// The Deaf Rats of Hamelin (270)

const countDeafRats = function(town) {
  
      if(town.indexOf('P') == town.length-1){return town.slice(0,town.indexOf('P')).match(/~O|O~|/g).reduce((a,c) => a + (c == 'O~' ? 1 : 0),0);}
      if(town.indexOf('P') == 0) {return town.slice(town.indexOf('P') + 1).match(/~O|O~/g).reduce((a,c) => a + (c == '~O' ? 1 : 0),0) }

      return town.slice(town.indexOf('P') + 1).match(/~O|O~/g).reduce((a,c) => a + (c == '~O' ? 1 : 0),0) + town.slice(0,town.indexOf('P')).match(/~O|O~/g).reduce((a,c) => a + (c == 'O~' ? 1 : 0),0);
 }

// String array duplicates (271)

function dup(s) {
    return s.map((e) => e.split('').filter((u,i) => u != e[i+1]).join(''));
};

// Lottery Ticket (272)

function bingo(ticket, win){
    return ticket.reduce((a,c) => a + (c[0].split('').some(u => u.charCodeAt() == c[1]) ? 1 : 0),0) >= win ? 'Winner!' : 'Loser!';

}

// String transformer (273)

function stringTransformer(str) {
    return str
            .split(' ')
            .reverse()
            .map(e=>e.split('').map(u=>u.charCodeAt() >= 97 ? u.toUpperCase() : u.toLowerCase()).join(''))
            .join(' ');
}




