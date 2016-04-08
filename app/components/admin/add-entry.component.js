System.register(['angular2/core', 'angular2/router', '../../services/demoentry.service', '../../services/category.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, demoentry_service_1, category_service_1;
    var AddEntryComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
                router_2 = router_1_1;
            },
            function (demoentry_service_1_1) {
                demoentry_service_1 = demoentry_service_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            }],
        execute: function() {
            AddEntryComponent = (function () {
                function AddEntryComponent(_router, _routeParams, _demoEntryService, _categoryService) {
                    this._router = _router;
                    this._routeParams = _routeParams;
                    this._demoEntryService = _demoEntryService;
                    this._categoryService = _categoryService;
                    this.entry = { title: 'new title', reference: 'NEW1', category: 'other' };
                    this.categories = [];
                }
                AddEntryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.getCategories().subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; }, function () { return _this.entry.category = prefix; });
                };
                AddEntryComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AddEntryComponent.prototype.saveChanges = function () {
                    var _this = this;
                    if (this.similarToList) {
                        this.entry.similarTo = this.similarToList.toUpperCase().split(',');
                    }
                    else
                        this.entry.similarTo = [];
                    this._demoEntryService.addEntry(this.entry).subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                AddEntryComponent.prototype.fileChangeEvent = function (fileInput) {
                    var self = this;
                    var file = fileInput.target.files[0];
                    console.log(file.name);
                    var reader = new FileReader();
                    reader.onloadend = function () {
                        self.entry.img = (reader.result);
                        console.log('image read');
                    };
                    reader.readAsDataURL(file);
                };
                AddEntryComponent.prototype.returnToList = function () {
                    window.history.back();
                };
                AddEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'add-entry',
                        templateUrl: './app/components/templates/edit-entry.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, demoentry_service_1.DemoEntryService, category_service_1.CategoryService])
                ], AddEntryComponent);
                return AddEntryComponent;
            }());
            exports_1("AddEntryComponent", AddEntryComponent);
        }
    }
});
//# sourceMappingURL=add-entry.component.js.map