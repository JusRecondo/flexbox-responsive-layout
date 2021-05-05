/*  metiendo mi código JS dentro de este event listener, no importa si
    coloco la etiqueta <script src="js/main.js"></script> al final del body
    o dentro del head */
document.addEventListener("DOMContentLoaded", function () {
  /* primero guardo en constantes los elementos HTML que necesito */
  const burgerMenuBtn = document.querySelector("#burger-menu-toggler");

  /* En este caso, al ser varios items y seleccionarlos todos, lo que se guarda
        en la constante menuItems es una lista de nodos*/
  const menuItems = document.querySelectorAll(".menu-item");

  function navResponsive() {
    // Agrego o quito una clase al body para cambiar los estilos del menú
    burgerMenuBtn.addEventListener("click", function () {
      document.body.classList.toggle("mobile-menu-active");
    });

    //recorro la lista de nodos menuItems
    menuItems.forEach(function (menuItem) {
      //ejecuto el método addEventListener() en cada uno
      menuItem.addEventListener("click", function () {
        //Al clickear un item del menu mobile, este se cierra
        document.body.classList.remove("mobile-menu-active");

        /* agrego la clase active para modificar con CSS a los items 
                    del menu clickeados */
        let currentItem = document.querySelector(".active");
        currentItem.classList.remove("active");
        //la palabra this hace referencia al item del menu que haya sido clickeado
        this.classList.add("active");
      });
    });
  }

  navResponsive();
});

/* Para hacer lo de la clase active en los links del menu en caso de tener 
        las secciones del sitio en distintos documentos HTML */

/* let pathname = window.location.pathname;
        
//el switch es otro tipo de estructura condicional
switch (pathname) {
    case "/index.html":
        document.querySelector("#home").classList.add('active');
    break;
    case "/about.html":
        document.querySelector("#about").classList.add('active');
    break;
    case "/projects.html":
        document.querySelector("#projects").classList.add('active');
    break;
    case "/contact.html":
        document.querySelector("#contact").classList.add('active');
    break;
} */
