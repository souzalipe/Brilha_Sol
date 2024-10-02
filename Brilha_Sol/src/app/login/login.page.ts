import { Component } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { environment } from '../../environments/environment';
import { Router } from '@angular/router'; // Importa o Router

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) { // Injeta o Router no construtor
    // Inicialize o Firebase usando o firebaseConfig do environment
    initializeApp(environment.firebaseConfig);
  }

  loginWithGoogle() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log('Usuário logado:', user);
        
        // Redireciona para a página inicial após login bem-sucedido
        this.router.navigate(['/home']); // Altere '/home' para o caminho correto da sua página inicial
      }).catch((error) => {
        console.error('Erro no login com Google:', error);
      });
  }
}
