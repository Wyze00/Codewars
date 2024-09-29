// Calculate String Rotation (284)

function shiftedDiff(first,second){

    let count = 0;
    const res = second;
    const smn = first.split('');

    while(first != second){
          count++;

        if(count >= first.length){return -1}

        smn.unshift(smn.pop())

        if(smn.concat().join('') == res){return count}

    }

    return 0;
  }

// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced? (285)

function balance(left,right){
    
    const l = left.split('').reduce((a,c) => a + (c == '!' ? 2 : 3),0);
    const r = right.split('').reduce((a,c) => a + (c == '!' ? 2 : 3),0);

    return l == r ? "Balance" : l > r ? "Left" : "Right"
    
  }

// Remove the parentheses (286)

function removeParentheses(s){

  while(s.match(/\([\w ]*\)/) != null){

    s = s.replace(/\([\w ]*\)/g,'');

  }

  return s;

}
