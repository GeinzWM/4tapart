document.addEventListener('DOMContentLoaded', function() {
  const productList = document.getElementById('product-list'); // Obtiene la referencia al elemento que contiene las imágenes
  const btnSlideLeft = document.getElementById('btn-slide-left'); // Obtiene la referencia al botón

  let scrollAmount = 0; // Cantidad inicial de desplazamiento hacia la derecha
  const scrollStep = 200; // Cantidad de desplazamiento por paso (ajusta según tus necesidades)

  btnSlideLeft.addEventListener('click', function() {
    scrollAmount += scrollStep; // Aumenta el valor de scrollAmount por la cantidad de desplazamiento

    // Aplica la transformación CSS para desplazar horizontalmente las imágenes hacia la derecha
    productList.style.transform = `translateX(-${scrollAmount}px)`;

    // Restablece la posición de desplazamiento si alcanza el final del contenedor
    if (scrollAmount >= productList.scrollWidth - productList.clientWidth) {
      scrollAmount = 0; // Restablece la cantidad de desplazamiento a 0
      productList.style.transform = 'translateX(0)'; // Restablece la posición de desplazamiento
    }
  });


  const btnlrigth = document.getElementById("btnlrigth");

  let scrollAmountLeft = -0; // Cantidad inicial de desplazamiento hacia la izquierda
  const scrollStepLeft = 10; // Cantidad de desplazamiento por paso (ajusta según tus necesidades)

  btnlrigth.addEventListener('click', function() {
    scrollAmountLeft -= scrollStepLeft; // Aumenta el valor de scrollAmountLeft por la cantidad de desplazamiento

    // Aplica la transformación CSS para desplazar horizontalmente las imágenes hacia la izquierda
    productList.style.transform = `translateX(${scrollAmountLeft}px)`;

    // Restablece la posición de desplazamiento si alcanza el inicio del contenedor
    if (scrollAmountLeft <= productList.scrollWidth - productList.clientWidth) {
      scrollAmountLeft = 0; // Restablece la cantidad de desplazamiento a 0
      productList.style.transform = 'translateX(0)'; // Restablece la posición de desplazamiento
    }
  });

 
  
  if (productList.clientWidth === 0) {
    btnlrigth.style.opacity = "0";
  }else{
    btnSlideLeft.addEventListener("click", function() {
      btnlrigth.style.opacity = "1";
    });
  }
  
  
  
  
  
});



  
  
 
  
  