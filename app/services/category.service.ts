import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Category} from '../models/category';

@Injectable()
export class CategoryService {
    constructor (private http: Http) {}
    
    private _hostUrl = 'http://localhost:3000/';
    //private _hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
    private _categoryUrl = this._hostUrl+'api/cats/';
    private _categoryAdminUrl = this._hostUrl+'api/admin/cats/'
    
    getCategories(){
        return this.http.get(this._categoryUrl)
                    .map(res => <Category[]> res.json())
                    .catch(this.handleError);                 
    }
    
    getCategory(prefix: string):Observable<Category>{
        return this.http.get(this._categoryUrl+prefix)
                    .map(res => <Category> res.json())                    
                    .catch(this.handleError);
    }
    
    updateCategory(prefix: string, category: Category): Observable<Category>{
        let body = JSON.stringify(category);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });        
        return this.http.put(this._categoryAdminUrl+prefix+'?token='+localStorage.getItem('token'), body, options)
                    .map(res =>  <Category> res.json().data)
                    .catch(this.handleError)
    }
    
    deleteCategory(prefix: string): Observable<Category>{        
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        
        return this.http.delete(this._categoryAdminUrl+prefix+'?token='+localStorage.getItem('token'), options)
                    .map(res =>  <Category> res.json().data)
                    .catch(this.handleError)
    }
    
    addCategory(category: Category): Observable<Category>{
        let body = JSON.stringify(category);
        let headers = new Headers({ 'Content-Type': 'application/json'});
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this._categoryAdminUrl+'?token='+localStorage.getItem('token'), body, options)
                    .map(res =>  <Category> res.json().data)
                    .catch(this.handleError)
    }
    
    
    private handleError (error: Response) {   
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}