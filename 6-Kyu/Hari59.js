// Buying a car (258)

function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let coun = 1;
    let money = 0;

    while(startPriceOld + money < startPriceNew){

        if(coun % 2 == 0 && coun != 0){
            percentLossByMonth += 0.5;
            startPriceNew *= (100-percentLossByMonth) / 100;
            startPriceOld *= (100-percentLossByMonth) / 100;
        } else {
            startPriceNew *= (100-percentLossByMonth) / 100;
            startPriceOld *= (100-percentLossByMonth) / 100;
        }

        money += savingperMonth;

        coun++;

    }

    return [coun-1,Math.round(startPriceOld+money-startPriceNew)]
    
  }

// Statistics for an Athletic Association (259)

function stat(strg) {
    const srtd = strg.split(', ').sort();

    function ret(a,b,c){     
        return +a*3600 + +b*60 + +c;
    }

    function time(n){
        const smn = ['00','00','00'];

        if(n >= 3600){
            smn[0] = Math.round(n / 3600)
            n = n % 3600;
        } 

        if(n >= 60){
            smn[1] = Math.round(n / 60)
            n = n % 60;
        }

        smn[2] = n;

        return `${String(smn[0]).padStart(2,'0')}|${String(smn[1]).padStart(2,'0')}|${String(smn[2]).padStart(2,'0')}`;

    }

    const milS = strg.replace(/,/g,'').replace(/(\d{1,2})[|](\d{1,2})[|](\d{1,2})/g,(e,p1,p2,p3) => ret(p1,p2,p3)).split(' ');

    const zzz = [time(Math.max(...milS) - Math.min(...milS)),time(Math.round(milS.reduce((a,c) => a + Number(c),0) / milS.length)),srtd.length % 2 != 0 ? srtd[(srtd.length-1)/2] : time(Math.round(srtd.slice(srtd.length/2-1,srtd.length/2+1).join(' ').replace(/(\d{1,2})[|](\d{2})[|](\d{2})/g,(e,p1,p2,p3) => ret(p1,p2,p3)).split(' ').reduce((a,c) => a + Number(c),0)/2)) ]

    return `Range: ${zzz[0]} Average: ${zzz[1]} Median: ${zzz[2].padStart(8,'0')}`;
}