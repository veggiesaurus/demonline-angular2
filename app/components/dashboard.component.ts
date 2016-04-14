import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../models/category';
import { DemoSummary } from '../models/demosummary';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { DemoEntryService } from '../services/demoentry.service';
import { AuthService } from '../services/auth.service';
import { SortNumericRefPipe } from '../pipes/sort-ref-numeric';

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/templates/dashboard.component.html',
    pipes: [ SortNumericRefPipe ]
})
export class DashboardComponent {
    categories: Category[] = [];
    summaries: DemoSummary[] = [];
    loggedIn: boolean = false;
    currentSearchTerm: string;
    errorMessage: string;
    constructor(
        protected _router: Router,
        protected _categoryService: CategoryService,
        protected _demoEntryService: DemoEntryService,
        protected _authService: AuthService) {
    }

    ngOnInit() {
        this.currentSearchTerm = this._demoEntryService.prevSearchTerm;
        if (this.currentSearchTerm)
            this.searchSummaries(this.currentSearchTerm);
        this._categoryService.getCategories()
            .subscribe(categories => this.categories = categories,
            error => this.errorMessage = <any>error);
        this.loggedIn = this._authService.isLoggedIn();

    }

    logout(){        
        this._authService.logout().subscribe(val => console.log(val), error => this.errorMessage = <any>error, () => this.loggedIn = false);
    }

    searchSummaries(searchTerm : string){
        this.currentSearchTerm = searchTerm;         
        localStorage.setItem('searchTerm', searchTerm);
        if (searchTerm)
            this._demoEntryService.findSummaries(searchTerm, 5)
                .subscribe(summaries => this.summaries = summaries,
                error => this.errorMessage = <any>error);
        else
            this.summaries = [];
    }
    gotoList(category: Category) {
        let link = ['Category', { prefix: category.prefix }];
        this._router.navigate(link);
    }
    
    gotoLogin(){
       let link = ['Login'];
        this._router.navigate(link);
    }

    gotoEntry(ref: string) {
        let link = ['DemoEntryDetail', { ref: ref }];
        this._router.navigate(link);
    }

    editCategory(category: Category) {
        let link = ['EditCategory', { prefix: category.prefix }];
        this._router.navigate(link);
    }

    addCategory() {
        let link = ['AddCategory'];
        this._router.navigate(link);
    }

    editEntry(summary: DemoSummary) {
        let link = ['EditEntry', { ref: summary.reference }];
        this._router.navigate(link);
    }

}