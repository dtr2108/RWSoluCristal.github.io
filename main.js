"use strict";


function mostrarAlerta() {
    const alerta = document.createElement('div');
    alerta.textContent = "Bienvenido";
    alerta.style.position = 'fixed';
    alerta.style.top = '10px';
    alerta.style.right = '10px';
    alerta.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    alerta.style.color = 'white';
    alerta.style.padding = '10px';
    alerta.style.borderRadius = '5px';
    alerta.style.zIndex = '1000';
    document.body.appendChild(alerta);
  
    // Quitar la alerta después de 3 segundos
    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
  
  // Llamar a la función para mostrar la alerta
  mostrarAlerta();