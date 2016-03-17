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
    var AdminCategoryComponent;
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
            AdminCategoryComponent = (function () {
                function AdminCategoryComponent(_router, _demoEntryService, _categoryService, _routeParams) {
                    this._router = _router;
                    this._demoEntryService = _demoEntryService;
                    this._categoryService = _categoryService;
                    this._routeParams = _routeParams;
                    this.summaries = [];
                    this.isAdmin = true;
                    this.category = { name: 'Loading', prefix: 'Loading' };
                }
                AdminCategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.getCategory(prefix).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; });
                    this._demoEntryService.getSummaries(prefix).subscribe(function (summaries) { return _this.summaries = summaries; }, function (error) { return _this.errorMessage = error; });
                };
                AdminCategoryComponent.prototype.gotoEntry = function (ref) {
                    var link = ['DemoEntryDetail', { ref: ref }];
                    this._router.navigate(link);
                };
                AdminCategoryComponent.prototype.editEntry = function (summary) {
                    var link = ['EditEntry', { ref: summary.reference }];
                    this._router.navigate(link);
                };
                AdminCategoryComponent.prototype.addEntry = function () {
                    var link = ['AddEntry'];
                    this._router.navigate(link);
                };
                AdminCategoryComponent.prototype.goHome = function () {
                    var link = ['Admin'];
                    this._router.navigate(link);
                };
                AdminCategoryComponent.prototype.goBack = function () {
                    window.history.back();
                };
                AdminCategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-category',
                        templateUrl: './app/components/templates/category.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, demoentry_service_1.DemoEntryService, category_service_1.CategoryService, router_2.RouteParams])
                ], AdminCategoryComponent);
                return AdminCategoryComponent;
            }());
            exports_1("AdminCategoryComponent", AdminCategoryComponent);
        }
    }
});
//# sourceMappingURL=admin-category.component.js.map