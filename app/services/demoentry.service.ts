import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Headers, RequestOptions} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {DemoEntry} from '../models/demoentry';
import {DemoSummary} from '../models/demosummary';

@Injectable()
export class DemoEntryService {
     constructor (private http: Http) {}
    
    private _hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
    private _summaryUrl = this._hostUrl+'api/demoEntry/summary';
    private _searchUrl = this._hostUrl+'api/demoEntry/search?keyword=';
    private _entryUrl = this._hostUrl+'api/demoEntry/ref/';
    private _entryAdminUrl = this._hostUrl+'api/admin/demoEntry/ref/';
    private _entryAdminUrlAdd = this._hostUrl+'api/admin/demoEntry/';

    getAllSummaries():Observable<DemoSummary[]>{
        return this.http.get(this._summaryUrl)
                    .map(res => <DemoSummary[]> res.json())
                    .catch(this.handleError);
    }
    findSummaries(keywords: string, limit: number):Observable<DemoSummary[]>{
        return this.http.get(this._searchUrl+keywords+'&limit='+limit)
                    .map(res => <DemoSummary[]> res.json())
                    .catch(this.handleError);
    }
    getSummaries(prefix: string):Observable<DemoSummary[]>{
        return this.http.get(this._summaryUrl+'?category='+prefix)
                    .map(res => <DemoSummary[]> res.json())
                    .catch(this.handleError);          
    }
    
    getEntry(ref: string):Observable<DemoEntry>{
        return this.http.get(this._entryUrl+ref)
                    .map(res => <DemoEntry> res.json())
                    .catch(this.handleError);
    }
    
    updateEntry(ref: string, entry: DemoEntry): Observable<DemoEntry>{
        let body = JSON.stringify(entry);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.put(this._entryAdminUrl+ref, body, options)
                    .map(res =>  <DemoEntry> res.json().data)
                    .catch(this.handleError)
    }
    
    deleteEntry(prefix: string): Observable<DemoEntry>{        
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.delete(this._entryAdminUrl+prefix, options)
                    .map(res =>  <DemoEntry> res.json().data)
                    .catch(this.handleError)
    }
    
     addEntry(entry: DemoEntry): Observable<DemoEntry>{
        let body = JSON.stringify(entry);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        
        return this.http.post(this._entryAdminUrlAdd, body, options)
                    .map(res =>  <DemoEntry> res.json().data)
                    .catch(this.handleError)
    }
    
    
    private handleError (error: Response) {   
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
  }
}