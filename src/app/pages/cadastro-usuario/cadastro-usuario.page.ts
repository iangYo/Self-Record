import { Component, OnInit } from '@angular/core';
import {Paciente} from 'src/Models/Paciente';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.page.html',
  styleUrls: ['./cadastro-usuario.page.scss'],
})
export class CadastroUsuarioPage implements OnInit {


  paciente: Paciente
  constructor(
    public fbauth: AngularFireAuth, 
    public fbstore: AngularFirestore, 
    public alertController: AlertController,
    public route: Router
  ) {
    this.paciente = new Paciente()
   }

  ngOnInit() {
  }


CadastrarPaciente(){
  this.fbauth.auth.createUserWithEmailAndPassword(this.paciente.email, this.paciente.senha).then(result=>{
    let users = this.fbstore.collection("Paciente")
    users.add({
      nome: this.paciente.nome,
      email: this.paciente.email,
      senha: this.paciente.senha,
      cpf: this.paciente.cpf,
      userid: result.user.uid
    }).then(async ()=>{
      const alert = await this.alertController.create({
        header: 'Alert',
        subHeader: 'Subtitle',
        message: 'Cadastrado com sucesso',
        buttons: ['OK']
      });
  
      await alert.present();

      this.fbauth.auth.signInWithEmailAndPassword(this.paciente.email,this.paciente.senha).then(()=>{
        this.route.navigate(['/pagina-inicial'])
      })
    

    }).catch( async ()=>{
      const alert = await this.alertController.create({
        header: 'Erro',
        subHeader: 'Bla bla bla',
        message: 'Erro de cadastro',
        buttons: ['OK']
      });
  
      await alert.present();
    })

  })
}

}
