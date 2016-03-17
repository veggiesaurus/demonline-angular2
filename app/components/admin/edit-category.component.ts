import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';
import { AddCategoryComponent } from './add-category.component';

@Component({
    selector: 'edit-category',
    templateUrl: './app/components/templates/edit-category.component.html'    
})
export class EditCategoryComponent extends AddCategoryComponent {
    editMode: boolean = true;
    constructor(
        private _r: Router,
        private _cS: CategoryService,
        private _routeParams: RouteParams
    ) {
        super(_r, _cS);
    }

    ngOnInit() {
        super.ngOnInit();
        let prefix = this._routeParams.get('prefix');
        this._categoryService.getCategory(prefix)
            .subscribe(category => this.category = category, error => this.errorMessage = <any>error);
    }

    saveChanges() {
        let prefix = this._routeParams.get('prefix');
        this._categoryService.updateCategory(prefix, this.category).subscribe(category => this.category = category, error => this.errorMessage = <any>error, () => this.returnToList());
    }

    deleteCategory() {
        let prefix = this._routeParams.get('prefix');
        this._categoryService.deleteCategory(prefix).subscribe(category => this.category = category, error => this.errorMessage = <any>error, () => this.returnToList());
    }
}