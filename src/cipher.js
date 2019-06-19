window.cipher = {
  encode: (offset, string) => {
    let leslie = "";
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if (65 <= ascii && ascii <= 90)
        leslie += String.fromCharCode((ascii - 65 + offset) % 26 + 65); // formula de desplazamiento de nuestro mensaje
      else if (ascii === 32)
        leslie += " ";
    }
    return leslie;
  },


  decode: (offset, string) => {
    let rosario = "";
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
      if (65 <= ascii && ascii <= 90)
        rosario += String.fromCharCode((ascii + 65 - offset) % 26 + 65);
      else if (ascii === 32)
        rosario += " ";
    }
    return rosario;
  }
};