window.cipher = {
  encode: (offset, string) => {
    let result1 = "";
    for (let i = 0; i < string.length; i++) {
      let ascii = string.charCodeAt(i);
<<<<<<< HEAD
      if (65 <= ascii && ascii <= 90)
        leslie += String.fromCharCode((ascii - 65 + offset) % 26 + 65); // formula de desplazamiento de nuestro mensaje
      else if (ascii === 32)
        leslie += " ";
=======
      if (65 <= ascii && ascii <= 90) {
        result1+= String.fromCharCode((ascii - 65 + offset) % 26 + 65); 
      } else if (ascii === 32) {
        result1 += " ";
<<<<<<< HEAD
<<<<<<< HEAD
      }

>>>>>>> 0bd8610fea0e7ab8fcd5b465820755ad34805edc
=======
>>>>>>> 2504599a758751beb54c541b20470e6b30ceb6fb
=======
      }
      
>>>>>>> 77d966119d7e78160694dfdb39a08163db40cd65
    }
    return result1;
  },
  decode: (offset, string) => {
    let result2 = "";
    for (let i = 0; i < string.length; i++){
      let ascii = string.charCodeAt(i);
<<<<<<< HEAD
      if (65 <= ascii && ascii <= 90)
        rosario += String.fromCharCode((ascii + 65 - offset) % 26 + 65);
      else if (ascii === 32)
        rosario += " ";
=======
      if (65 <= ascii && ascii <= 90) {
        result2 += String.fromCharCode((ascii + 65 - offset) % 26 + 65);
      } else if (ascii === 32) {
        result2 += " ";
<<<<<<< HEAD
<<<<<<< HEAD
      }
>>>>>>> 0bd8610fea0e7ab8fcd5b465820755ad34805edc
=======
>>>>>>> 2504599a758751beb54c541b20470e6b30ceb6fb
=======
      }
>>>>>>> 77d966119d7e78160694dfdb39a08163db40cd65
    }
    return result2;
  }
};
