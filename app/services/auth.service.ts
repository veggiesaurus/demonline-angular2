import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {User} from '../models/user';

@Injectable()
export class AuthService {

    token: string;

    constructor(private http: Http) {
        this.token = localStorage.getItem('token');
    }

    //private _hostUrl = 'http://localhost:3000/';
    private _hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
    private _authUrl = this._hostUrl + 'api/auth/';

    login(username: string, password: string) : Observable<boolean> {
        var creds = "username=" + username + "&password=" + password;

        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        return this.http.post(this._authUrl + 'login', creds, { headers: headers })
            .map(res => {
                let jsonData = res.json();
                this.token = jsonData.token;                
                if (this.token){
                    localStorage.setItem('token', this.token);
                    return true;
                }
                else{
                    localStorage.removeItem('token');
                    return false;
                }
            })
            .catch(this.handleError)
    }

    isLoggedIn(): boolean {
        return localStorage.getItem('token')!=null;
    }

    logout() : Observable<void> {        
        return this.http.post(this._authUrl + 'logout'+'?token='+this.token, '')
            .map((res: any) => {
                this.token = undefined;
                localStorage.removeItem('token');
            })
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}