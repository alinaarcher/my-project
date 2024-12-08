function removeVowels(doc) {
  // write code here
  let result = ''
  for (let ch of doc) {
    if (!'aeiouy'.includes(ch.toLowerCase())) {
     result += ch
    }
  }
  return result
}

console.log(removeVowels('document'))