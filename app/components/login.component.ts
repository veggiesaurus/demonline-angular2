import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { AuthService } from '../services/auth.service';

@Component({
    selector: 'my-login',
    templateUrl: './app/components/templates/login.component.html'
})
export class LoginComponent {
    loginError: boolean = false;
    username: string;
    password: string;
    
    errorMessage: string;
    constructor(
        protected _router: Router,
        protected _authService: AuthService) {
    }

    ngOnInit() {        
    }

    login(){
         this._authService.login(this.username, this.password)
            .subscribe(loginSuccess => {                
                if (loginSuccess)
                    this.goHome();
                else
                    this.loginError =true;
            },                
            error => this.errorMessage = <any>error);
    }
        
    goHome(){
        let link = ['Dashboard'];
        this._router.navigate(link);
    }
    
    goBack() {
        window.history.back();
    }
    
}