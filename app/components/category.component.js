System.register(['angular2/core', 'angular2/router', '../services/demoentry.service', '../services/category.service', '../services/auth.service'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, demoentry_service_1, category_service_1, auth_service_1;
    var CategoryComponent;
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
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            }],
        execute: function() {
            CategoryComponent = (function () {
                function CategoryComponent(_router, _demoEntryService, _categoryService, _authService, _routeParams) {
                    this._router = _router;
                    this._demoEntryService = _demoEntryService;
                    this._categoryService = _categoryService;
                    this._authService = _authService;
                    this._routeParams = _routeParams;
                    this.summaries = [];
                    this.category = { name: 'Loading', prefix: 'Loading' };
                    this.loggedIn = false;
                }
                CategoryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.loggedIn = this._authService.isLoggedIn();
                    var prefix = this._routeParams.get('prefix');
                    this._categoryService.getCategory(prefix).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; });
                    this._demoEntryService.getSummaries(prefix).subscribe(function (summaries) { return _this.summaries = summaries; }, function (error) { return _this.errorMessage = error; });
                };
                CategoryComponent.prototype.gotoEntry = function (ref) {
                    var link = ['DemoEntryDetail', { ref: ref }];
                    this._router.navigate(link);
                };
                CategoryComponent.prototype.editEntry = function (summary) {
                    var link = ['EditEntry', { ref: summary.reference }];
                    this._router.navigate(link);
                };
                CategoryComponent.prototype.addEntry = function () {
                    var link = ['AddEntry', { prefix: this.category.prefix }];
                    this._router.navigate(link);
                };
                CategoryComponent.prototype.goHome = function () {
                    var link = ['Dashboard'];
                    this._router.navigate(link);
                };
                CategoryComponent.prototype.goBack = function () {
                    window.history.back();
                };
                CategoryComponent = __decorate([
                    core_1.Component({
                        selector: 'my-category',
                        templateUrl: './app/components/templates/category.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, demoentry_service_1.DemoEntryService, category_service_1.CategoryService, auth_service_1.AuthService, router_2.RouteParams])
                ], CategoryComponent);
                return CategoryComponent;
            }());
            exports_1("CategoryComponent", CategoryComponent);
        }
    }
});
//# sourceMappingURL=category.component.js.map