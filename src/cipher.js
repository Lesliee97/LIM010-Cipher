window.cipher = {
  encode: (offset, string) => {
    let leslie = "";
    for(let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if (ascii>= 65 && ascii<=90) {
        leslie += String.fromCharCode((parseInt(offset) + ascii - 65) % 26 + 65);
      } else {
        leslie += string.charAt(i);
      }
    }
    return leslie;
  }
  };
  window.cipher ={
  decode: (offset, string) => {
  let rosario = "";
  for (let i = 0; i < string.length; i ++) {
    let ascii = string.charCodeAt(i);
    if ((ascii >= 65) && (ascii <= 90)) {
      if (ascii >= 65 + parseInt(offset) % 26) {
        rosario += String.fromCharCode((ascii - parseInt(offset) % 26 - 65) + 65);
      } else {
        rosario += String.fromCharCode((ascii - parseInt(offset) % 26 + 26));
      }
    } else {
      rosario += string.charAt(i);
    }

  }
  return rosario;
} 
};