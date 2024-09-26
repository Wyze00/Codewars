// Count the smiley faces! (155)

function countSmileys(arr) {
    return arr.filter((e) => e.match(/[:;][D)]/) || e.match(/[:;][~-][D)]/) ).length
  }

// Break camelCase (156)

function solution(string) {
    return string.replace(/([A-Z])/g,' $&')
  }


