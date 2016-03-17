System.register(['angular2/core', 'angular2/router', '../services/demoentry.service', '../services/category.service'], function(exports_1, context_1) {
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
    var DemoEntryDetailComponent;
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
            DemoEntryDetailComponent = (function () {
                function DemoEntryDetailComponent(_demoEntryService, _categoryService, _router, _routeParams) {
                    this._demoEntryService = _demoEntryService;
                    this._categoryService = _categoryService;
                    this._router = _router;
                    this._routeParams = _routeParams;
                }
                DemoEntryDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var ref = this._routeParams.get('ref');
                    this._demoEntryService.getEntry(ref)
                        .subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; }, function () { return _this._categoryService.getCategory(_this.entry.category).subscribe(function (category) { return _this.category = category; }, function (error) { return _this.errorMessage = error; }); });
                };
                DemoEntryDetailComponent.prototype.gotoEntry = function (ref) {
                    var link = ['DemoEntryDetail', { ref: ref }];
                    this._router.navigate(link);
                };
                DemoEntryDetailComponent.prototype.gotoList = function (category) {
                    var link = ['Category', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                DemoEntryDetailComponent.prototype.goHome = function () {
                    var link = ['Dashboard'];
                    this._router.navigate(link);
                };
                DemoEntryDetailComponent.prototype.goBack = function () {
                    window.history.back();
                };
                DemoEntryDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-entry-detail',
                        templateUrl: 'app/components/templates/demoentry-detail.component.html',
                        styleUrls: ['app/components/templates/stylesheets/demoentry-detail.component.css'],
                        inputs: ['entry']
                    }), 
                    __metadata('design:paramtypes', [demoentry_service_1.DemoEntryService, category_service_1.CategoryService, router_1.Router, router_2.RouteParams])
                ], DemoEntryDetailComponent);
                return DemoEntryDetailComponent;
            }());
            exports_1("DemoEntryDetailComponent", DemoEntryDetailComponent);
        }
    }
});
//# sourceMappingURL=demoentry-detail.component.js.map