// The Hashtag Generator (322)

function generateHashtag (str) {

    if(!str.match(/[^ ]/)){return false}

    const text = str.trim().split(' ').filter(e=>e).map(e=>e[0].toUpperCase()+e.slice(1)).join('');

    const res = `#${text[0].toUpperCase()}${text.slice(1)}`;

    return res.length > 140 ? false : res;
}
