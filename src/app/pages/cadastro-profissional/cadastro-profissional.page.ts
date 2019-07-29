import { Component, OnInit } from '@angular/core';
import { Profissional } from 'src/Models/Profissional';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore} from 'angularfire2/firestore';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-profissional',
  templateUrl: './cadastro-profissional.page.html',
  styleUrls: ['./cadastro-profissional.page.scss'],
})
export class CadastroProfissionalPage implements OnInit {
  profissional: Profissional
  constructor(
    public fbauth: AngularFireAuth, 
    public fbstore: AngularFirestore, 
    public alertController: AlertController,
    public route: Router
  ) { this.profissional = new Profissional()}

  ngOnInit() {
  }

  CadastrarProfissional(){
    this.fbauth.auth.createUserWithEmailAndPassword(this.profissional.email, this.profissional.senha).then(result=>{
      let users = this.fbstore.collection("Profissional")
      users.add({
        nome: this.profissional.nome,
        email: this.profissional.email,
        senha: this.profissional.senha,
        registro: this.profissional.registro,
        userid: result.user.uid
      }).then(async ()=>{
        const alert = await this.alertController.create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message: 'Cadastrado com sucesso',
          buttons: ['OK']
        });
    
        await alert.present();
  
        this.fbauth.auth.signInWithEmailAndPassword(this.profissional.email,this.profissional.senha).then(()=>{
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
