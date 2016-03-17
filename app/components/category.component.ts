import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';
import { DemoSummary } from '../models/demosummary';
import { Category } from '../models/category';
import { DemoEntryService } from '../services/demoentry.service';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'my-category',
    templateUrl: './app/components/templates/category.component.html'
})
export class CategoryComponent {
    summaries: DemoSummary[] = [];
    isAdmin: boolean = false;
    category: Category = {name: 'Loading', prefix:'Loading'};
    errorMessage: string;

    constructor(
        private _router: Router,
        private _demoEntryService: DemoEntryService,
        private _categoryService: CategoryService,
        private _routeParams: RouteParams) {
    }
    
    ngOnInit() {
        let prefix = this._routeParams.get('prefix');
        this._categoryService.getCategory(prefix).subscribe(category => this.category = category, error => this.errorMessage = <any>error);
        
        this._demoEntryService.getSummaries(prefix).subscribe(summaries => this.summaries = summaries,  error =>  this.errorMessage = <any>error);        
  }
    gotoEntry(ref: string) {
        let link = ['DemoEntryDetail', { ref: ref }];
        this._router.navigate(link);
    }
    
    goHome(){
        let link = ['Dashboard'];
        this._router.navigate(link);
    }
    
    goBack() {
        window.history.back();
    }
    
}