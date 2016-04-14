System.register(['angular2/core', 'angular2/router', '../services/category.service', '../services/demoentry.service', '../services/auth.service', '../pipes/sort-ref-numeric'], function(exports_1, context_1) {
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
    var core_1, router_1, category_service_1, demoentry_service_1, auth_service_1, sort_ref_numeric_1;
    var DashboardComponent;
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
            },
            function (demoentry_service_1_1) {
                demoentry_service_1 = demoentry_service_1_1;
            },
            function (auth_service_1_1) {
                auth_service_1 = auth_service_1_1;
            },
            function (sort_ref_numeric_1_1) {
                sort_ref_numeric_1 = sort_ref_numeric_1_1;
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _categoryService, _demoEntryService, _authService) {
                    this._router = _router;
                    this._categoryService = _categoryService;
                    this._demoEntryService = _demoEntryService;
                    this._authService = _authService;
                    this.categories = [];
                    this.summaries = [];
                    this.loggedIn = false;
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.currentSearchTerm = this._demoEntryService.prevSearchTerm;
                    if (this.currentSearchTerm)
                        this.searchSummaries(this.currentSearchTerm);
                    this._categoryService.getCategories()
                        .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
                    this.loggedIn = this._authService.isLoggedIn();
                };
                DashboardComponent.prototype.logout = function () {
                    var _this = this;
                    this._authService.logout().subscribe(function (val) { return console.log(val); }, function (error) { return _this.errorMessage = error; }, function () { return _this.loggedIn = false; });
                };
                DashboardComponent.prototype.searchSummaries = function (searchTerm) {
                    var _this = this;
                    this.currentSearchTerm = searchTerm;
                    localStorage.setItem('searchTerm', searchTerm);
                    if (searchTerm)
                        this._demoEntryService.findSummaries(searchTerm, 5)
                            .subscribe(function (summaries) { return _this.summaries = summaries; }, function (error) { return _this.errorMessage = error; });
                    else
                        this.summaries = [];
                };
                DashboardComponent.prototype.gotoList = function (category) {
                    var link = ['Category', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.gotoLogin = function () {
                    var link = ['Login'];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.gotoEntry = function (ref) {
                    var link = ['DemoEntryDetail', { ref: ref }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.editCategory = function (category) {
                    var link = ['EditCategory', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.addCategory = function () {
                    var link = ['AddCategory'];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.editEntry = function (summary) {
                    var link = ['EditEntry', { ref: summary.reference }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: './app/components/templates/dashboard.component.html',
                        pipes: [sort_ref_numeric_1.SortNumericRefPipe]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, category_service_1.CategoryService, demoentry_service_1.DemoEntryService, auth_service_1.AuthService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map