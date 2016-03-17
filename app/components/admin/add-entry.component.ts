import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';
import { DemoEntry } from '../../models/demoentry';
import { Category } from '../../models/category';
import { DemoEntryService } from '../../services/demoentry.service';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'add-entry',
    templateUrl: './app/components/templates/edit-entry.component.html'
})
export class AddEntryComponent {
    entry: DemoEntry = { title: 'new title', reference: 'NEW1', category: 'other' };
    similarToList: string;
    categories: Category[] = [];
    errorMessage: string;
    constructor(
        protected _router: Router,
        protected _routeParams: RouteParams,
        protected _demoEntryService: DemoEntryService,
        protected _categoryService: CategoryService) {
    }

    ngOnInit() {
        this._categoryService.getCategories().subscribe(
            categories => this.categories = categories,
            error => this.errorMessage = <any>error,
            () => this.entry.category = this.categories[0].prefix);
    }

    goBack() {
        window.history.back();
    }

    saveChanges() { 
        if (this.similarToList){
            this.entry.similarTo=this.similarToList.toUpperCase().split(',');                        
        }
        else
            this.entry.similarTo=[];
       
        this._demoEntryService.addEntry(this.entry).subscribe(entry => this.entry=entry, error => this.errorMessage = <any> error, () => this.returnToList());        
    }
    
    fileChangeEvent(fileInput: any){        
        var self = this;
        let file: File = fileInput.target.files[0];
        console.log(file.name);
        var reader  = new FileReader();
        reader.onloadend = function () {
            self.entry.img=(reader.result);
            console.log('image read');
        }
        reader.readAsDataURL(file);
    }   
    
    returnToList() {
        window.history.back();
    }
}