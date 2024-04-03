function atualizaCronometro(){
   for (let i=0; i<contadores.length;i++){
       document.getElementById("dias"+i).textContent = calculaTempo(tempos[i])[0];
       document.getElementById("horas"+i).textContent = calculaTempo(tempos[i])[1];
       document.getElementById("min"+i).textContent = calculaTempo(tempos[i])[2];
       document.getElementById("seg"+i).textContent = calculaTempo(tempos[i])[3];   
   }
}

function comecaCronometro(){
   atualizaCronometro();
   setInterval(atualizaCronometro,1000);
}

comecaCronometro();