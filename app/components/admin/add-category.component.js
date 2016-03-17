System.register(['angular2/core', 'angular2/router', '../../services/category.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, category_service_1;
    var AddCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            AddCategoryComponent = (function () {
                function AddCategoryComponent(_router, _categoryService) {
                    this._router = _router;
                    this._categoryService = _categoryService;
                    this.category = { name: 'New Category', prefix: 'new' };
                }
                AddCategoryComponent.prototype.ngOnInit = function () {
                };
                AddCategoryComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AddCategoryComponent.prototype.saveChanges = function () {
                    var _this = this;
                    this._categoryService.addCategory(this.category).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                AddCategoryComponent.prototype.returnToList = function () {
                    this._router.navigate(["Admin"]);
                };
                AddCategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'add-category',
                        templateUrl: './app/components/templates/edit-category.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, category_service_1.CategoryService])
                ], AddCategoryComponent);
                return AddCategoryComponent;
            }());
            exports_1("AddCategoryComponent", AddCategoryComponent);
        }
    }
});
//# sourceMappingURL=add-category.component.js.map