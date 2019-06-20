window.cipher = {
  encode: (offset, string) => {
    let result1 = "";
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if (65 <= ascii && ascii <= 90) {
        result1+= String.fromCharCode((ascii - 65 + offset) % 26 + 65); 
      } else if (ascii === 32) {
        result1 += " ";
      }
    }
    return result1;
  },
  decode: (offset, string) => {
    let result2 = "";
    for (let i = 0; i < string.length; i++){
      let ascii = string.charCodeAt(i);
      if (65 <= ascii && ascii <= 90) {
        result2 += String.fromCharCode((ascii + 65 - offset) % 26 + 65);
      } else if (ascii === 32) {
        result2 += " ";
      }
    }
    return result2;
  }
};
  