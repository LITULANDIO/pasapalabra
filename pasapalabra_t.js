var marcadorA=0;
var marcadorF=0;

var fallos=0;

var pasapalabra = "pasapalabra";

var exit = "salir";


// array quee contiene objetos para pasapalbara

var miarray = [{'id':'1', 'letra':'A', 'palabra':'silla', 'description': 'Mueble que se usa para sentarse...', 'check':null},{'id':'2', 'letra':'B', 'palabra':'alfabeto', 'description':'Grupo de letras...', 'check':null},
				{'id':'3', 'letra':'C', 'palabra':'caratula', 'description':'Portada de un DVD...', 'check': null}, {'id':'4', 'letra':'D', 'palabra':'teclado', 'description':'Soporte con teclas para un ordenador...', 'check':null},
				{'id':'5', 'letra':'E', 'palabra':'escuela', 'description':'Lugar de  enseñanza...', 'check': null}, {'id':'6', 'letra':'F', 'palabra':'manifestacion', 'description':'Grupo de personas protestando...', 'check':null},
				{'id':'7', 'letra':'G', 'palabra':'alegre', 'description':'Estar contento...', 'check': null}, {'id':'8', 'letra':'H', 'palabra':'hablar', 'description':'Dialogar con las personas...', 'check':null},
				{'id':'9', 'letra':'I', 'palabra':'bailar', 'description':'Movimiento al escuchar musica...', 'check':null}, {'id':'10', 'letra':'J', 'palabra':'reloj', 'description':'Podemos saber la hora...', 'check':null},
				{'id':'11', 'letra':'K', 'palabra':'bunker', 'description':'Escondite para evitar bombardeos...', 'check':null}, {'id':'12', 'letra':'L', 'palabra':'isla', 'description':'Tierra rodeada de mar...', 'check':null},
				{'id':'13', 'letra':'M', 'palabra':'musica', 'description':'Sonido de canciones...', 'check':null}, {'id':'14', 'letra':'N', 'palabra':'amnesia', 'description':'Discoteca de ibiza en Sant Rafael...', 'check':null},
				{'id':'15', 'letra':'0', 'palabra':'nomada', 'description':'Persona que va de un lugar a otro...', 'check':null}, {'id':'16', 'letra':'P', 'palabra':'paraguas', 'description':'Protege de la lluvia...', 'check':null},
				{'id':'17', 'letra':'Q', 'palabra':'marques', 'description':'Persona que ostenta un título nobiliario...', 'check':null}, {'id':'18', 'letra':'R', 'palabra':'arbol', 'description':'Nos ofrece oxígeno...', 'check':null},
				{'id':'19', 'letra':'S', 'palabra':'saltar', 'description':'Movimiento con el cuerpo hacia ariba...', 'check':null}, {'id':'20', 'letra':'T', 'palabra':'pintar', 'description':'dibujar con colores...', 'check':null},
				{'id':'21', 'letra':'V', 'palabra':'vivir', 'description':'Estar presente...', 'check':null}, {'id':'22', 'letra':'W', 'palabra':'walt disney', 'description':'Compañia americana de  dibujos animados...', 'check':null},
				{'id':'23', 'letra':'X', 'palabra':'externo', 'description':'Contrario de interno...', 'check':null}, {'id':'24', 'letra':'Y', 'palabra':'yoga', 'description':'Técnica de respiracion que sirve para relajarse', 'check':null},
				{'id':'25', 'letra':'Z', 'palabra':'zafiro', 'description':'Piedra preciosa de color azul', 'check':null}];



 $(document).ready(iniciar19);

function iniciar19(){

    $(".letraT").click(ambar19);
    $(".letraT").click(reloj19);
    $(".letraT").click(T); // inicio evento al clickar en el div A, al clikar se inicio la funcion A
  
 
}

var segundos19 = 20;
var tiempo19;



function reloj19() {

//document.getElementById(".letraA").disabled = true;

if(segundos19===20){
    
 $("#displayReloj").css("color", "black");   
document.getElementById('displayReloj').innerHTML = '00:20';
}else if(segundos19>9){
document.getElementById('displayReloj').innerHTML = '00:' + segundos19;
}else{
document.getElementById('displayReloj').innerHTML = '00:' + '0' + segundos19;
     }
     
if(segundos19===5){
    
    $("#displayReloj").css("color", "red");
    }     
     
if(segundos19===0){
                   
$(".letraT").stop(ambar19);
$(".letraT").css("background-color", "red");
$("#question").empty();
$("#respuesta").css("background-color", "red");
$("#boton").remove();
var responde = document.getElementById("respuesta").innerHTML = "Tu tiempo ha terminado";
marcadorF--;
var fallo = document.getElementById("f").innerHTML = marcadorF;

}else{
tiempo19 =  setTimeout(function(){reloj19()},1000);
}
segundos19--;
}




  
    
  function ambar19(){
    
 $(".letraT").fadeIn(400).delay(280).fadeOut(400, ambar19);
    
    } 
    
   
   
    function T(){
        
  $("#respuesta").empty();
  var description19 = "Contiene la letra T: <br>"+miarray[19].description; 

   $("#question").append(description19);              //en el div question se añade la descripcion de la letra
   
    var boton19 = "<button type='button' id='boton'onclick='recibir19();'>Responder</button>";
    $("#form").append(boton19);
  
  
  
}



function recibir19(){                                    // se crea una función para agrupar las funcionalidades
        

var palabraS= document.getElementById("palabra").value;     // se recoge el valor escrito en el input
var responde = document.getElementById("respuesta").innerHTML = palabraS;  //en el div respuesta mostramos cuando nos interese el valor del input
 
 if (responde===miarray[19].palabra) {  // condicion: si el valor es igual a la palabra del array se eejecuta.....
   
    $(".letraT").stop(ambar19); 
   
    $("#question").empty(); // Se borra la descripccion para que no se solape posteriormente un mensaje
    $("#respuesta").css("background", "linear-gradient( 90deg, black,#3ADF00,#3ADF00,#3ADF00,#3ADF00,#3ADF00,black"); // el div se mostrara de color verde
    //var dime= document.getElementById("palabra").value;    // volvemos a recoger el valor
    var responde = document.getElementById("respuesta").innerHTML = "ENHORABUENA!<br>La palabra es correcta"; // se mostrara en el div respuesta un mensaje


  // letraA.style.background-color='green';
  var color = $(".letraT").css("background-color", "#3ADF00"); // el div cambiara su estado actual de color por un verde
  marcadorA++; // se le suma +1 al marcador
  var acierto = document.getElementById("a").innerHTML = marcadorA; // se muestra en pantalla el +1 en el marcador
  
  clearInterval(tiempo19);

  $("#boton").remove();
  
    }else if(responde===pasapalabra) { 
  
  $(".letraT").stop(ambar19);
  clearInterval(tiempo19);
  $("#question").empty();
  $("#respuesta").css("background", "linear-gradient( 90deg, black,#0174DF,#0174DF,#0174DF,#0174DF,#0174DF,black");
  $("#boton").remove();
  var responde = document.getElementById("respuesta").innerHTML = "PASAPALABRA!";
  

  }else{ //sino
      
  clearInterval(tiempo19);     
 $(".letraT").stop(ambar19);

 $("#respuesta").css("background", "linear-gradient( 90deg, black,red,red,red,red,red,black"); // el div del mensaje  sera de color verde. 
 $("#question").empty();  // se elimina la descripcion
//var dime= document.getElementById("palabra").value; // se recoge el valor del input

var responde = document.getElementById("respuesta").innerHTML = "INCORRECTA<br> La palabra correcta es :"+ miarray[19].palabra; // se mostrara un mensaje
      
$(".letraT").css("background-color", "red");  //el estado actual del div azul con la letra pasara a rojo
marcadorF--;   // al marcador se le restara -1
var fallo = document.getElementById("f").innerHTML = marcadorF; // se muestra en pantalla el -1 al marcador   
$("#boton").remove();


     
    }    
      
      }