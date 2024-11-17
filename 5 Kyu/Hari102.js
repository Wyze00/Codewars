// Last digit of a large number (346)

function lastDigit(n, m) {  

    const div = {
        1: 1n,
        2: 4n,
        3: 4n,
        4: 2n,
        5: 1n,
        6: 1n,
        7: 4n,
        8: 4n,
        9: 2n,
        0: 1n
    }
    
    const tempN = n%10n;
    const tempM = m%div[tempN] == 0 ? div[tempN] : m % div[tempN];
    
    return (tempN ** tempM)%10n;
}
