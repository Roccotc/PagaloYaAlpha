import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2';
// import * as QR from '../assets/scripts/qrcode';
import { Tabs } from '../tabs/tabs';


@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class Perfil {

  user: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public alertController: AlertController, public navParams: NavParams, public database: AngularFireDatabase) {
      
       this.user = this.user = this.database.list('/User', {
        query:{
          orderByKey: true,
          equalTo: '-KhUxoaDXsMYe0x1-Ggf'
        }
      });// Lo de rey 
      
      //Lo que puede solucionarlo si almacenamos el id adentro de cada usuario
      /*const userQuery$ = this.database.list('/User', {
        query: {
        orderByChild: 'User',
        equalTo: '-KhUY7ugwy_VJqJXIDay',
        orderByKey: true,
      }
    });
    userQuery$.subscribe(User => console.log(User));*/ 
    // por que git jode tanto valeeee
  }

  goBack() {
    this.navCtrl.push(Tabs);
  }

  editInfo(u){
    console.log('Este es user: ' + u);
    let updateUserModal = this.alertController.create({
        title: "Actualizar Información",
        message: "Edita tu información",
        inputs: [
          {
            name: "Nombre",
            placeholder: "Nombre",
            value: u.Nombre
          },
          {
            name: "Apellido",
            placeholder: "Apellido",
            value: u.Apellido
          },
          {
            name: "Telefono",
            placeholder: "Telefono",
            value: u.Telefono
          },
          {
            name: "Correo",
            placeholder: "Correo",
            value: u.Correo
          },
          {
            name: "CuentaPrincipal",
            placeholder:"Cuenta Principal",
            value: u.Cuentas.Cuenta1
          },
          {
            name: "CuentaSecundaria",
            placeholder:"Cuenta Secundaria",
            value: u.Cuentas.Cuenta2
          }
        ],
        buttons: [
          {
            text: "Cancelar",
            handler: data => {
              console.log('Canceló el ingreso de un nuevo Usuario');
            }
          },
          {
            text: "Guardar",
            handler: data => {
              this.user.update( u.$key,{
                  Nombre: data.Nombre,
                  Telefono: data.Telefono,
                  Apellido: data.Apellido,
                  Correo: data.Correo,
                  Cuentas:{Cuenta1:data.CuentaPrincipal, Cuenta2: data.CuentaSecundaria }
              });
            }
          }
        ]


    });
    updateUserModal.present(updateUserModal);
  }


}
