import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../models/category';
import { DemoSummary } from '../models/demosummary';
import { CategoryService } from '../services/category.service';
import { DemoEntryService } from '../services/demoentry.service';
@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/templates/dashboard.component.html'
})
export class DashboardComponent {
    categories: Category[] = [];
    summaries: DemoSummary[] = [];
    errorMessage: string;
    constructor(
        protected _router: Router,
        protected _categoryService: CategoryService,
        protected _demoEntryService: DemoEntryService) {
    }

    ngOnInit() {
        this._categoryService.getCategories()
            .subscribe(categories => this.categories = categories, 
            error => this.errorMessage = <any>error);       
    }
    
    searchSummaries(searchTerm : string){
        this._demoEntryService.findSummaries(searchTerm, 5)
            .subscribe(summaries => this.summaries = summaries, 
            error => this.errorMessage = <any>error,
            () => console.log(this.summaries));
    }
    gotoList(category: Category) {
        let link = ['Category', { prefix: category.prefix }];
        this._router.navigate(link);
    }
    
    gotoEntry(ref: string) {
        let link = ['DemoEntryDetail', { ref: ref }];
        this._router.navigate(link);
    }
    
    
    

}