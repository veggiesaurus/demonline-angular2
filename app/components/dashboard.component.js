System.register(['angular2/core', 'angular2/router', '../services/category.service', '../services/demoentry.service'], function(exports_1, context_1) {
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
    var core_1, router_1, category_service_1, demoentry_service_1;
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
            }],
        execute: function() {
            DashboardComponent = (function () {
                function DashboardComponent(_router, _categoryService, _demoEntryService) {
                    this._router = _router;
                    this._categoryService = _categoryService;
                    this._demoEntryService = _demoEntryService;
                    this.categories = [];
                    this.summaries = [];
                }
                DashboardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._categoryService.getCategories()
                        .subscribe(function (categories) { return _this.categories = categories; }, function (error) { return _this.errorMessage = error; });
                };
                DashboardComponent.prototype.searchSummaries = function (searchTerm) {
                    var _this = this;
                    this._demoEntryService.findSummaries(searchTerm, 5)
                        .subscribe(function (summaries) { return _this.summaries = summaries; }, function (error) { return _this.errorMessage = error; }, function () { return console.log(_this.summaries); });
                };
                DashboardComponent.prototype.gotoList = function (category) {
                    var link = ['Category', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                DashboardComponent.prototype.gotoEntry = function (ref) {
                    var link = ['DemoEntryDetail', { ref: ref }];
                    this._router.navigate(link);
                };
                DashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'my-dashboard',
                        templateUrl: './app/components/templates/dashboard.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, category_service_1.CategoryService, demoentry_service_1.DemoEntryService])
                ], DashboardComponent);
                return DashboardComponent;
            }());
            exports_1("DashboardComponent", DashboardComponent);
        }
    }
});
//# sourceMappingURL=dashboard.component.js.map