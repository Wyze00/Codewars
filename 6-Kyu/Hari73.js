// Vodka festival. (298)

function vodkaConsumption(shots){
    return `${shots.reduce((a,c) => a + Number(c.replace(/(\d*)(ml)|(\d*.?\d*)(l)/,(e,p1,p2,p3)=>p2=='ml'?p1:p3*1000)),0)}ml`;
  }

// Are we alternate? (299)

function isAlt(word) {

    const ONE = word[0].match(/[aiueo]/) ? 0 : 1;

    if(ONE == 0){
        return word.split('').every((e,i) => i%2 == 0 ? e.match(/[aiueo]/) : e.match(/[^aiueo]/));
    } else {
        return word.split('').every((e,i) => i%2 == 0 ? e.match(/[^aiueo]/) : e.match(/[aiueo]/));
    }
  }

// Coding Meetup #15 - Higher-Order Functions Series - Find the odd names (300)

function findOddNames(list) {
    return list.filter(({firstName}) => firstName.split('').reduce((a,c) => a + (c.charCodeAt()),0) % 2 != 0 );
  }

