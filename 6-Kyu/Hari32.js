// Counting Duplicates (131)

function duplicateCount(text){

    let tes = [...new Set(text.toLowerCase())];

    return tes.filter((e) => {

        let reg = new RegExp(e,'g');

        return text.toLowerCase().match(reg).length > 1

    }).length
    
  }

// Duplicate Encoder (132)

function duplicateEncode(word){

    const tes = [...new Set(word.toLowerCase().split('').filter((e) => word.toLowerCase().indexOf(e) != word.toLowerCase().lastIndexOf(e)))];

   let res = word.toLowerCase();

   if(res.indexOf(')') == res.lastIndexOf(')')){res = res.replace(')','\u{1234}')}

   for(let i = 0; i<tes.length; i++){
     res = res.replaceAll(tes[i],')')
   }

   return res.split('').map((e) => e == ')' ? ')' : '(').join('').replace('\u{1234}','(')

}