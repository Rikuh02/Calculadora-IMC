const altura = document.getElementById('altura');
const peso = document.getElementById('peso');
const btn_calc = document.getElementsByClassName('calc-button')[0];
const resul = document.getElementById('text');

btn_calc.addEventListener('click', ()=>{
  
  let alt = parseFloat(altura.value);
  let pes = parseFloat(peso.value);
  let imc = pes / alt ** 2;

  let text = resul;

  if(!isNaN(alt) || !isNaN(pes)){
    
    if(imc < 17){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então estar Muito abaixo do peso";
    }else if(imc >= 17 && imc < 18.49){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então estar abaixo do peso";
    }else if(imc >= 18.5 && imc < 24.99){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então estar com o Peso normal";
    }else if(imc >= 25 && imc < 29.99){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então acima do peso";
    }else if(imc >= 30 && imc < 34.99){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então estar com obesidade I";
    }else if(imc >= 35 && imc < 39.99){
      text.innerHTML = "Seu IMC e de: " + imc.toFixed(2) + ". Então estar com obesidade II ";
    }

  }else{
    window.alert("Existe campos vazios!");
  }

  altura.value = "";
  peso.value = "";

})