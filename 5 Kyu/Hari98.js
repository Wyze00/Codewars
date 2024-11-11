// So Many Permutations! (339)

function permutations(string){

    const res = [];

    function checker(a,n){

        if(n == a.length){
            res.push(a.join(''));
        }

        for(let i = n; i<a.length; i++){

            const tmp = a.concat();
            const spl = tmp.splice(i,1);
            tmp.splice(n,0,...spl);

            checker(tmp,n+1);
        }
    }

    checker(string.split(''),0);

    return [...new Set(res)].sort();
}