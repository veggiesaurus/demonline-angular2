System.register(['angular2/core', 'angular2/router', '../../services/category.service', './add-category.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, router_2, category_service_1, add_category_component_1;
    var EditCategoryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (add_category_component_1_1) {
                add_category_component_1 = add_category_component_1_1;
            }],
        execute: function() {
            EditCategoryComponent = (function (_super) {
                __extends(EditCategoryComponent, _super);
                function EditCategoryComponent(_r, _cS, _routeParams) {
                    _super.call(this, _r, _cS);
                    this._r = _r;
                    this._cS = _cS;
                    this._routeParams = _routeParams;
                    this.editMode = true;
                }
                EditCategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.getCategory(prefix)
                        .subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; });
                };
                EditCategoryComponent.prototype.saveChanges = function () {
                    var _this = this;
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.updateCategory(prefix, this.category).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                EditCategoryComponent.prototype.deleteCategory = function () {
                    var _this = this;
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.deleteCategory(prefix).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                EditCategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-category',
                        templateUrl: './app/components/templates/edit-category.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, category_service_1.CategoryService, router_2.RouteParams])
                ], EditCategoryComponent);
                return EditCategoryComponent;
            }(add_category_component_1.AddCategoryComponent));
            exports_1("EditCategoryComponent", EditCategoryComponent);
        }
    }
});
//# sourceMappingURL=edit-category.component.js.map