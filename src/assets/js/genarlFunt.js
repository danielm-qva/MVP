
function modalmenssage(mensaje) {
     document.querySelector("#mensajetexto").innerHTML = mensaje;
     $('#messagemodal').modal('toggle');

}


async function ModalProvider_Process(lista, name) {
     //console.log(lista.length);
     document.querySelector('#titulo').innerHTML = name;
 
     for (let a = 0; a < lista.length; a++) {
         var elemnet  =  document.createElement("div");
          console.log(lista[a]);
         document.querySelector("#mensajetexto") = '<div>' + lista[a].provider_name + ' <ul><li>' + lista[a].location + '</li> <li>' + lista[a].distance_km + '</li> </ul> </div>' ;
             
     }

     $('#messagemodal').modal('toggle');

}

