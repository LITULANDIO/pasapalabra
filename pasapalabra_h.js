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



 $(document).ready(iniciar7);

function iniciar7(){

    $(".letraH").click(ambar7);
    $(".letraH").click(reloj7);
    $(".letraH").click(H); // inicio evento al clickar en el div A, al clikar se inicio la funcion A
  
 
}

var segundos7 = 20;
var tiempo7;



function reloj7() {

//document.getElementById(".letraA").disabled = true;

if(segundos7===20){
    
$("#displayReloj").css("color", "black");  
document.getElementById('displayReloj').innerHTML = '00:20';
}else if(segundos7>9){
document.getElementById('displayReloj').innerHTML = '00:' + segundos7;
}else{
document.getElementById('displayReloj').innerHTML = '00:' + '0' + segundos7;
     }
     

 if(segundos7===5){
    
    $("#displayReloj").css("color", "red");
    }     
                
if(segundos7===0){
                   
$(".letraH").stop(ambar6);
$(".letraH").css("background-color", "red");
$("#question").empty();
$("#respuesta").css("background-color", "red");
$("#boton").remove();
var responde = document.getElementById("respuesta").innerHTML = "Tu tiempo ha terminado";
marcadorF--;
var fallo = document.getElementById("f").innerHTML = marcadorF;

}else{
tiempo7 =  setTimeout(function(){reloj7()},1000);
}
segundos7--;
}




  
    
  function ambar7(){
    
 $(".letraH").fadeIn(400).delay(280).fadeOut(400, ambar7);
    
    } 
    
   
   
    function H(){
        
  $("#respuesta").empty();
  var description7 = "Empieza con la letra H: <br>"+miarray[7].description; 

   $("#question").append(description7);              //en el div question se añade la descripcion de la letra
   
    var boton7 = "<button type='button' id='boton'onclick='recibir7();'>Responder</button>";
    $("#form").append(boton7);
  
  
  
}



function recibir7(){                                    // se crea una función para agrupar las funcionalidades
        

var palabraH= document.getElementById("palabra").value;     // se recoge el valor escrito en el input
var responde = document.getElementById("respuesta").innerHTML = palabraH;  //en el div respuesta mostramos cuando nos interese el valor del input
 
 if (responde===miarray[7].palabra) {  // condicion: si el valor es igual a la palabra del array se eejecuta.....
   
    $(".letraH").stop(ambar7); 
   
    $("#question").empty(); // Se borra la descripccion para que no se solape posteriormente un mensaje
    $("#respuesta").css("background", "linear-gradient( 90deg, black,#3ADF00,#3ADF00,#3ADF00,#3ADF00,#3ADF00,black"); // el div se mostrara de color verde
    //var dime= document.getElementById("palabra").value;    // volvemos a recoger el valor
    var responde = document.getElementById("respuesta").innerHTML = "ENHORABUENA!<br>La palabra es correcta"; // se mostrara en el div respuesta un mensaje


  // letraA.style.background-color='green';
  var color = $(".letraH").css("background-color", "#3ADF00"); // el div cambiara su estado actual de color por un verde
  marcadorA++; // se le suma +1 al marcador
  var acierto = document.getElementById("a").innerHTML = marcadorA; // se muestra en pantalla el +1 en el marcador
  
  clearInterval(tiempo7);

  $("#boton").remove();
  
    }else if(responde===pasapalabra) { 
  
  $(".letraH").stop(ambar7);
  clearInterval(tiempo7);
  $("#question").empty();
  $("#respuesta").css("background", "linear-gradient( 90deg, black,#0174DF,#0174DF,#0174DF,#0174DF,#0174DF,black");
  $("#boton").remove();
  var responde = document.getElementById("respuesta").innerHTML = "PASAPALABRA!";
  

  }else{ //sino
      
 $(".letraH").stop(ambar7);
 clearInterval(tiempo7);
 $("#respuesta").css("background", "linear-gradient( 90deg, black,red,red,red,red,red,black"); // el div del mensaje  sera de color verde. 
 $("#question").empty();  // se elimina la descripcion
//var dime= document.getElementById("palabra").value; // se recoge el valor del input

var responde = document.getElementById("respuesta").innerHTML = "INCORRECTA<br> La palabra correcta es :"+ miarray[7].palabra; // se mostrara un mensaje
      
$(".letraH").css("background-color", "red");  //el estado actual del div azul con la letra pasara a rojo
marcadorF--;   // al marcador se le restara -1
var fallo = document.getElementById("f").innerHTML = marcadorF; // se muestra en pantalla el -1 al marcador   
$("#boton").remove();


     
    }    
      
      }