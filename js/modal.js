
var loginForm = document.querySelector('.iniciose');
loginForm.addEventListener('submit', function(event) {
  event.preventDefault(); 


  var username = document.getElementById('exampleInputEmail1').value;
  var password = document.getElementById('exampleInputPassword1').value;
  var role = document.getElementById('exampleSelectRole').value;

  if (username === 'adso2556678' && password === 'adso2023') {
    var bannerTitle = document.querySelector('.banner_taital');
    var bannerText = document.querySelector('.banner_text');
    var tex1 = document.getElementById('tex1')
    var tex2 = document.getElementById('tex2')
    var letra = document.getElementById('tex2');
    var letra1 = document.getElementById('tex1');
    var fondo = document.getElementById("fondo");
    var imagenniños= document.getElementById("imagenniños");
    var rutas=document.getElementById("rutas");
    var letra3=document.getElementById("rutas");
    var texrutas=document.getElementById("texrutas");
    var letra4=document.getElementById("texrutas");
    var colores=document.getElementById("colores");
    var contacto=document.getElementById("contacto");
    var nosotros=document.getElementById("nosotros");
    var letra5=document.getElementById("nosotros");
    var letra6=document.getElementById("texnosotros")
    var texnosotros=document.getElementById("texnosotros");
    var letranosotros=document.getElementById('texnosotros');
    var contenedor=document.getElementById('contenedor');
    var quitar = document.getElementById("quitar");
    var imagen1 = document.createElement("img");
    var imagen2 = document.createElement("img");
    var imagen3 = document.createElement("img");
    var fondo2 = document.querySelector(".choose_section");
    var fondo3 = document.querySelector(" .about_section");
    var geolo = document.querySelector('img.geolo[src="images/geolocalizacion.png"]');
    var header = document.querySelector('.header_section');
    var myNav = document.getElementById('myNav');
    
    
    
    
   

    if (role === 'tutor') {
      bannerTitle.textContent = ' BIENVENIDO TUTOR';
      bannerText.textContent = 'Manten seguro a tu menor';
      tex1.textContent = 'TU RED DE APOYO VIRTUAL'
      letra1.style.fontFamily='Helvetica';
      letra1.style.fontSize='20px';
      tex2.textContent = '¡Bienvenido  a ConfiApp! Estamos encantados de ofrecerte información sobre nuestra aplicación diseñada para proteger a los menores a tu cargo. ConfiApp es una herramienta integral que garantiza la seguridad y el bienestar del menor a tu cargo en todo momento . Nuestra aplicación se basa en un sistema de rutas planificadas, verificación de identidad, monitoreo en tiempo real y soporte constante para garantizar la confianza y seguridad de los tutores y los menores a su cuidado. Estamos comprometidos en proporcionar una experiencia confiable y tranquilidad para todos nuestros usuarios. '
      btninicio.remove('iniciar sesion ')
     letra.style.fontFamily = 'Helvetica';
    letra.style.fontSize = '20px';
    fondo.style.backgroundColor = "white";
    contacto.style.backgroundColor="mediumaquamarine";
    imagenniños.src='images/catalogonios.png';
    imagenniños.style.width='800px';
    imagenniños.style.height='400px';
    rutas.textContent='REGISTRO DE ACTIVIDADES.'
    texrutas.textContent='Nuestra aplicación registra y muestra un historial detallado de las actividades de los menores, como lugares visitados, rutas seguidas y actividades realizadas. Esto te brindara una visión completa de las acciones de los menores, lo que te  permite conocer sus rutinas y detectar cualquier anomalía.'
    nosotros.textContent='RUTAS'
    letra3.style.fontFamily='Helvetica';
    letra3.style.fontSize='30px';
    texnosotros.textContent = 'Hemos incorporado una función de monitoreo en tiempo real que permite a los tutores seguir el progreso de la ruta de sus hijos desde cualquier lugar. Mediante la geolocalización y la comunicación constante con el dispositivo del menor, los tutores pueden recibir actualizaciones en tiempo real sobre la ubicación y el estado del niño durante su trayecto.'
    letra4.style.fontFamily='Helvetica';
    letra4.style.fontSize='20px';
    colores.src='images/colores.png';
    colores.style.width='600px';
    colores.style.height='400px';
    colores.style.display="block";
    colores.style.margin="auto";
    colores.style.borderRadius='40%'; 
    texnosotros.style.textAlign = 'left';
    letranosotros.style.fontFamily= 'Helvetica';
    letranosotros.style.fontSize='20px';
    contenedor.removeChild(quitar);
    imagen1.src = "images/rojoa.jpg";
    imagen2.src = "images/parental.jpg";
    imagen3.src = "images/busqueda.webp";
    imagen1.style.width = "350px";
    imagen2.style.width = "350px";
    imagen3.style.width = "350px";
    contenedor.appendChild(imagen1);
    contenedor.appendChild(imagen2);
    contenedor.appendChild(imagen3);
    fondo2.style.backgroundColor = "#9EF7C4";
    fondo3.style.backgroundColor="#9EF7C4";
    header.style.backgroundImage = 'url(/images/otrafamilia.jpg)';
    myNav.innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
  <div class="overlay-content">
    <a href="services.html">Mi menor</a>
    <a href="about.html">Servicios</a>
    <a href="choose.html">Rutas Creadas</a>
    <a href="team.html">Notificaciones</a>
    <a href="contact.html">Contacto</a>
  </div>`;







  
 

    } else if (role === 'menor') {
      bannerTitle.textContent = ' BIENVENIDO MENOR';
      bannerText.textContent = 'Tu seguridad es lo mas importante';
      bannerText.style.fontWeight = 'bold';
      tex1.textContent = 'TU RED DE APOYO VIRTUAL'
      letra1.style.fontFamily='Helvetica';
      letra1.style.fontSize='20px';
      tex2.textContent = '¡Bienvenido  a ConfiApp! Estamos encantados de ofrecerte información sobre nuestra aplicación diseñada para protegerte . ConfiApp es una herramienta integral que garantiza tu seguridad y  bienestar  en todo momento . Nuestra aplicación se basa en un sistema de rutas planificadas, verificación de identidad, monitoreo en tiempo real y soporte constante para garantizar la confianza y seguridad de tu tutor y hacia ti. Estamos comprometidos en proporcionar una experiencia confiable y tranquilidad para todos nuestros usuarios. '
      btninicio.remove('iniciar sesion ')
     letra.style.fontFamily = 'Helvetica';
    letra.style.fontSize = '20px';
    fondo.style.backgroundColor = "white";
    contacto.style.backgroundColor="#A4F1E1";
    imagenniños.src='images/seguimiento.jpg';
    imagenniños.style.borderRadius = "60%";
    imagenniños.style.width='800px';
    imagenniños.style.height='400px';
    
    rutas.textContent='TUS RUTAS'
    rutas.style.color='#2C4038'
    texrutas.textContent='Las rutas son como un mapa especial que nos ayuda a saber cómo te desplazas desde la escuela, a actividades después de clases o cuando visitas a tus amigos y familiares. Estas rutas nos permiten mantenernos seguros y coordinados. Al agregar las rutas en tu perfil, podemos asegurarnos de que siempre sepamos dónde estás y a dónde te diriges.  Recuerda que es importante mantener tus rutas actualizadas para que siempre tengamos la información correcta. ¡Gracias por ayudarnos a cuidarte mejor!'
    texrutas.style.color='#2C4038'
    geolo.setAttribute("src", "images/celruta.jpg");
    geolo.style.width='500px';
    geolo.style.height='400px';
    geolo.style.borderRadius='70%';
    geolo.style.display = 'block';
    geolo.style.marginLeft = 'auto';
    geolo.style.marginRight = 'auto';
    imagen1.src = "images/familiacompuesta.jpg";
    imagen1.style.width = "350px";
    contenedor.appendChild(imagen1);
    nosotros.textContent='ConfiApp Tu Aplicacion De Confianza.'
    letra5.style.fontFamily='Verdana';
    letra5.style.fontSize='30px';
    letra5.style.textAlign="center";
    letra3.style.fontFamily='Helvetica';
    letra3.style.fontSize='30px';
    texnosotros.textContent = 'Hemos incorporado una función de monitoreo en tiempo real que permite a los tutores seguir el progreso de la ruta de sus hijos desde cualquier lugar. Mediante la geolocalización y la comunicación constante con el dispositivo del menor, los tutores pueden recibir actualizaciones en tiempo real sobre la ubicación y el estado del niño durante su trayecto.'
    letra6.style.fontFamily='Helvetica';
    letra6.style.fontSize='30px';
    letra4.style.fontFamily='Helvetica';
    letra4.style.fontSize='20px';  
    texnosotros.style.textAlign = 'left';
    letranosotros.style.fontFamily= 'Helvetica';
    letranosotros.style.fontSize='20px';
    contenedor.removeChild(quitar);
    fondo2.style.backgroundColor = "#78DBA6";
    fondo3.style.backgroundColor="#78DBA6";
    header.style.backgroundImage = 'url(/images/madrehijos.jpg)';
    myNav.innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="services.html">Mis Rutas</a>
      <a href="about.html">Servicios</a>
      <a href="choose.html">Mi Historial</a>
      <a href="team.html">Mensajes a mi tutor</a>
      <a href="contact.html">Contacto</a>
    </div>`;


    } else if (role === 'administrador') {
      bannerTitle.textContent = ' BIENVENIDO ADMIN';
      bannerText.textContent = 'El administrador, garante del éxito del aplicativo. ';
      bannerText.style.fontWeight = 'bold';
      bannerText.style.textAlign = 'justify';
      header.style.backgroundImage = "url('images/foritos.jpg')";
      myNav.innerHTML = `<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
    <div class="overlay-content">
      <a href="services.html"> Conocenos</a>
      <a href="about.html">Servicios</a>
      <a href="team.html">ConfiApp</a>
      <a href="contact.html">Contacto</a>
    </div>`;
    imagenniños.src='images/ESTADISTICA-1024x791.jpg';
    imagenniños.style.width='800px';
    imagenniños.style.height='400px';
    imagenniños.style.borderRadius="50%";
    rutas.textContent='ADMINISTRADOR';
    rutas.style.color='#2C4038';
    texrutas.textContent='¡Hola! Soy el administrador de esta increíble aplicación. Como experto en sistemas y con una amplia experiencia en administración, mi objetivo principal es garantizar que la aplicación funcione de manera impecable para ti. Estoy aquí para supervisar todos los aspectos, desde la gestión de usuarios hasta la configuración del sistema y la resolución de cualquier problema que pueda surgir.'
    texrutas.style.color='#2C4038';
    geolo.style.borderRadius="40%";
    geolo.style.display = 'block';
    geolo.style.marginLeft = 'auto';
    geolo.style.marginRight = 'auto';
    letra6.style.fontFamily="Helvetica";
    letra6.style.fontSize="30px";
    fondo2.style.backgroundColor = "#6FD9A3";
    fondo3.style.backgroundColor="#6FD9A3";
    }

    
    var inicioModal = document.getElementById('staticBackdrop');
    var modalInstance = bootstrap.Modal.getInstance(inicioModal);
    modalInstance.hide();
  } else {
    
    var registroModal = document.getElementById('registerModal');
    var modalInstance = new bootstrap.Modal(registroModal);
    modalInstance.show();

    var inicioModal = document.getElementById('staticBackdrop');
    var modalInstance = bootstrap.Modal.getInstance(inicioModal);
    modalInstance.hide();
  }
});

var registrarmeLink = document.querySelector('a[href="/registro.html"]');
registrarmeLink.addEventListener('click', function(event) {
  event.preventDefault(); 

  var registroModal = document.getElementById('registerModal');
  var modalInstance = new bootstrap.Modal(registroModal);
  modalInstance.show();

  
  var inicioModal = document.getElementById('staticBackdrop');
  var modalInstance = bootstrap.Modal.getInstance(inicioModal);
  modalInstance.hide();
});

function cerrarModalRegistro() {
 
  var registroModal = document.getElementById('registerModal');
  var modalInstance = new bootstrap.Modal(registroModal);
  modalInstance.hide();
}
var registrarseBtn = document.querySelector('#registerModal .btn-primary');
registrarseBtn.addEventListener('click', cerrarModalRegistro);
