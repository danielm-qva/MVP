
function modalmenssage(mensaje) {
     document.querySelector("#mensajetexto").innerHTML = mensaje;
     $('#messagemodal').modal('toggle');

}


 function ModalProvider_Process(lista, name) {
     //console.log(lista.length);
     document.querySelector('#titulo').innerHTML = name;

     const listaul = document.getElementById('mensajetexto');

     //console.log(listaul);

     for (let a = 0; a < lista.length; a++) {



          const framento = document.createDocumentFragment();
          const framentodiv = document.createDocumentFragment();

          const divElemte = document.createElement('div');
          const hrr = document.createElement('hr');

          const iteme1 = document.createElement('li');
          const iteme2 = document.createElement('li');
          const iteme3 = document.createElement('li');

          divElemte.textContent = "Provedor: " + lista[a].provider_name;
          iteme1.textContent = " Distacia: " + lista[a].distance_km + "Km";
          iteme2.textContent = "Tipo:" + lista[a].goods_type;
          iteme3.textContent = "localizacion: " + lista[a].location;


          //framentos de codigo 
          framento.appendChild(iteme1);
          framento.appendChild(iteme2);
          framento.appendChild(iteme3);
          framentodiv.appendChild(divElemte);

          listaul.appendChild(framentodiv);
          listaul.appendChild(framento);
          listaul.appendChild(hrr);
          

     }
          

     $('#messagemodal').modal('toggle');

     $('#messagemodal').on('hide.bs.modal', function (e) {
            lista = [] 
     });

}



