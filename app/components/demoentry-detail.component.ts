import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';
import {DemoEntry} from '../models/demoentry'
import {Category} from '../models/category'
import {DemoEntryService} from '../services/demoentry.service';
import { CategoryService } from '../services/category.service';

@Component({
    selector: 'my-entry-detail',
    templateUrl: 'app/components/templates/demoentry-detail.component.html',
    styleUrls: ['app/components/templates/stylesheets/demoentry-detail.component.css'],
    inputs: ['entry']
})
export class DemoEntryDetailComponent {
    entry: DemoEntry;
    category: Category;
    errorMessage: string;           
    constructor(
            private _demoEntryService: DemoEntryService,
            private _categoryService: CategoryService,
            private _router: Router,
            private _routeParams: RouteParams) {}
    ngOnInit() {
        let ref = this._routeParams.get('ref');
        this._demoEntryService.getEntry(ref)
              .subscribe(
                    entry => this.entry = entry,
                    error =>  this.errorMessage = <any>error,
                    () => this._categoryService.getCategory(this.entry.category).subscribe(
                        category => this.category = category,
                        error =>  this.errorMessage = <any>error
              ));
    }
    gotoEntry(ref: string) {
        let link = ['DemoEntryDetail', { ref: ref }];
        this._router.navigate(link);
    }
    
    gotoList(category: Category) {
        let link = ['Category', { prefix: category.prefix }];
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