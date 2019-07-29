import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Paciente } from 'src/Models/Paciente';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  paciente: Paciente;

  constructor(public fbauth: AngularFireAuth, 
    public fbstore: AngularFirestore, 
    public alertController: AlertController,
    public route: Router) { 
      this.paciente = new Paciente()
    }

  ngOnInit(){}

  LoginUsuario() {
    this.fbauth.auth.signInWithEmailAndPassword(this.paciente.email,this.paciente.senha).then(()=>{
      this.route.navigate(['/pagina-inicial'])
  })
}
}
