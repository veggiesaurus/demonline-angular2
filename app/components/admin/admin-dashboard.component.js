System.register(['angular2/core', 'angular2/router', '../dashboard.component', '../../services/category.service', '../../services/demoentry.service'], function(exports_1, context_1) {
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
    var core_1, router_1, dashboard_component_1, category_service_1, demoentry_service_1;
    var AdminDashboardComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (category_service_1_1) {
                category_service_1 = category_service_1_1;
            },
            function (demoentry_service_1_1) {
                demoentry_service_1 = demoentry_service_1_1;
            }],
        execute: function() {
            AdminDashboardComponent = (function (_super) {
                __extends(AdminDashboardComponent, _super);
                function AdminDashboardComponent(_r, _c, _d) {
                    _super.call(this, _r, _c, _d);
                    this._r = _r;
                    this._c = _c;
                    this._d = _d;
                    this.isAdmin = true;
                }
                AdminDashboardComponent.prototype.ngOnInit = function () {
                    _super.prototype.ngOnInit.call(this);
                };
                AdminDashboardComponent.prototype.gotoList = function (category) {
                    var link = ['AdminCategory', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                AdminDashboardComponent.prototype.editCategory = function (category) {
                    var link = ['EditCategory', { prefix: category.prefix }];
                    this._router.navigate(link);
                };
                AdminDashboardComponent.prototype.addCategory = function () {
                    var link = ['AddCategory'];
                    this._router.navigate(link);
                };
                AdminDashboardComponent.prototype.editEntry = function (summary) {
                    var link = ['EditEntry', { ref: summary.reference }];
                    this._router.navigate(link);
                };
                AdminDashboardComponent = __decorate([
                    core_1.Component({
                        selector: 'admin-dashboard',
                        templateUrl: './app/components/templates/dashboard.component.html'
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, category_service_1.CategoryService, demoentry_service_1.DemoEntryService])
                ], AdminDashboardComponent);
                return AdminDashboardComponent;
            }(dashboard_component_1.DashboardComponent));
            exports_1("AdminDashboardComponent", AdminDashboardComponent);
        }
    }
});
//# sourceMappingURL=admin-dashboard.component.js.map