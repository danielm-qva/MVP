 import {ToastrService} from 'ngx-toastr';
export class Toat {

     constructor(public toast :ToastrService){

     }


     ShowSucces(mensaje){
         return this.toast.success(mensaje , 'Boot MVP');
     }

     ShowError(mensaje){
         return this.toast.error(mensaje , 'Boot MVP');
     }
}