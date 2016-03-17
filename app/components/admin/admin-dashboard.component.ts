import { Component, OnInit } from 'angular2/core';
import { Category } from '../../models/category';
import { DemoSummary } from '../../models/demosummary';
import { Router } from 'angular2/router';
import {DashboardComponent} from '../dashboard.component'
import { CategoryService } from '../../services/category.service';
import { DemoEntryService } from '../../services/demoentry.service';

@Component({
    selector: 'admin-dashboard',
    templateUrl: './app/components/templates/dashboard.component.html'    
})
export class AdminDashboardComponent extends DashboardComponent {
    isAdmin: boolean = true;

    constructor(
        private _r: Router,
        private _c: CategoryService,
        private _d: DemoEntryService) { super(_r, _c, _d); }

    ngOnInit() {
        super.ngOnInit();
    }
    gotoList(category: Category) {
        let link = ['AdminCategory', { prefix: category.prefix }];
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