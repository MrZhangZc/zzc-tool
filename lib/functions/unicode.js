module.exports = content => {
  let temp
  let r = ''
 
  for (let val of content) {
      temp = val.codePointAt(0).toString(16)
      while ( temp.length < 4 )
      temp = '0' + temp
      r += '\u005C' + 'u' + temp
  }

  console.log(r)
}