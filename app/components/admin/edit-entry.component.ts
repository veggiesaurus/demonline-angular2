import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {RouteParams} from 'angular2/router';
import { DemoEntry } from '../../models/demoentry';
import { Category } from '../../models/category';
import { DemoEntryService } from '../../services/demoentry.service';
import { CategoryService } from '../../services/category.service';
import { AddEntryComponent } from './add-entry.component';

@Component({
    selector: 'edit-entry',
    templateUrl: './app/components/templates/edit-entry.component.html',
    inputs: ['editMode']
})
export class EditEntryComponent extends AddEntryComponent {
    editMode: boolean = true;
    constructor(
        private _r: Router,
        private _rP: RouteParams,
        private _dES: DemoEntryService,
        private _cS: CategoryService) {
            super(_r, _rP, _dES, _cS);
    }
    
    ngOnInit() {
        super.ngOnInit();
        let reference = this._routeParams.get('ref');
        this._demoEntryService.getEntry(reference).subscribe(
            entry => this.entry = entry,
            error =>  this.errorMessage = <any>error,
            () => this.similarToList = this.entry.similarTo.join(','));
  } 
  
    saveChanges(){
        if (this.similarToList){
            this.entry.similarTo=this.similarToList.toUpperCase().split(',');                        
        }
        else
            this.entry.similarTo=[];
        let ref = this._routeParams.get('ref');    
        this._demoEntryService.updateEntry(ref, this.entry).subscribe(entry => this.entry=entry, error => this.errorMessage = <any> error, () => this.returnToList());
    }
    
    deleteEntry(){
        let ref = this._routeParams.get('ref');    
        this._demoEntryService.deleteEntry(ref).subscribe(error => this.errorMessage = <any> error, () => this.returnToList());
    }    
}