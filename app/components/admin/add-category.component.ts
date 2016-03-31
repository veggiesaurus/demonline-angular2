import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import { Category } from '../../models/category';
import { CategoryService } from '../../services/category.service';

@Component({
    selector: 'add-category',
    templateUrl: './app/components/templates/edit-category.component.html'
})
export class AddCategoryComponent {
    category: Category = {name: 'New Category', prefix: 'new'};
    errorMessage: string;
    constructor(
        protected _router: Router,        
        protected _categoryService: CategoryService) {
    }
    
    ngOnInit() {             
    
  } 
  
  goBack() {
        window.history.back();
    }
    
    saveChanges(){            
        this._categoryService.addCategory(this.category).subscribe(category => this.category=category, error => this.errorMessage = <any> error, () => this.returnToList());        
    }
    
    returnToList(){        
        this._router.navigate(["Dashboard"]);                
    }   
}