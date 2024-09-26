// New Cashier Does Not Know About Space or Shift (268)

function getOrder(input) {
    const test = input.replace(/milkshake|burger|fries|chicken|pizza|sandwich|onionrings|coke/g,e=>e[0].toUpperCase()+e.slice(1)+' ').trim().split(' ');
    const myS = [...new Set(['Burger','Fries','Chicken','Pizza','Sandwich','Onionrings','Milkshake','Coke'])]
    const result = [];
    
    for(let i = 0; i<myS.length; i++){

        for(let u = 0; u<test.length;u++){
            if(myS[i] == test[u]){result.push(test[u])}
        }
    }

    return result.join(' ');

  }

// N-th Fibonacci (269)

function nthFibo(n) {
    if(n < 0){return 0}
    if(n == 1){return 0}

    const res = [0,1];

    while(res.length < n){
        res.push(res.slice(-2).reduce((a,c) => a + c,0))
    }

    console.log(res);

    return res[res.length-1]
  }

