let pInput = document.getElementById("plainInput");
let eInput = document.getElementById("encryptedInput");
let clearBtn = document.getElementById("buttonClear");
let buttonEncrypt = document.getElementById("buttonEncrypt");
let buttonDecrypt = document.getElementById("buttonDecrypt");


let letterObj = [
  ...Array(26).keys(),
].map((i) => ({
  plain: String.fromCharCode(65 + i),
  cipher: String.fromCharCode(90 - i),
}));


function encrypt() {
  let plainText = pInput.value.toUpperCase(); 
  let result = "";

  for (let char of plainText) {
    if (char === " ") {
      result += " ";
    } else {
      let mapped = letterObj.find((entry) => entry.plain === char);
      result += mapped ? mapped.cipher : char; 
    }
  }

  eInput.value = result; 
}


function decrypt() {
  let encryptedText = eInput.value.toUpperCase(); 
  let result = "";

  for (let char of encryptedText) {
    if (char === " ") {
      result += " "; 
    } else {
      let mapped = letterObj.find((entry) => entry.cipher === char);
      result += mapped ? mapped.plain : char; 
    }
  }

  pInput.value = result; 
}

clearBtn.addEventListener("click", () => {
  pInput.value = "";
  eInput.value = "";
});


pInput.addEventListener("input", () => {
  pInput.value = pInput.value.toUpperCase();
});


buttonEncrypt.addEventListener("click", encrypt);


buttonDecrypt.addEventListener("click", decrypt);


document.body.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    encrypt();
  }
});
