function decode(string){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let phrase = string.toLowerCase().split('');
  for(let i = 0; i<phrase.length; i++){
    if(letters.includes(phrase[i])){
      return letters[letters.indexOf(phrase[i])+3];
    }else{
      return phrase[i];
    }
  }
}

function encode(string){
  let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  console.log(string.toLowerCase().split(''))
}

module.exports = {decode, encode}
