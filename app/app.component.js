System.register(['angular2/core', 'angular2/router', 'angular2/http', './services/category.service', './services/demoentry.service', './services/auth.service', './components/category.component', './components/demoentry-detail.component', './components/dashboard.component', './components/admin/add-category.component', './components/admin/edit-category.component', './components/admin/add-entry.component', './components/admin/edit-entry.component'], function(exports_1, context_1) {
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
    var core_1, router_1, http_1, category_service_1, demoentry_service_1, auth_service_1, category_component_1, demoentry_detail_component_1, dashboard_component_1, add_category_component_1, edit_category_component_1, add_entry_component_1, edit_entry_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
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
            function (category_component_1_1) {
                category_component_1 = category_component_1_1;
            },
            function (demoentry_detail_component_1_1) {
                demoentry_detail_component_1 = demoentry_detail_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (add_category_component_1_1) {
                add_category_component_1 = add_category_component_1_1;
            },
            function (edit_category_component_1_1) {
                edit_category_component_1 = edit_category_component_1_1;
            },
            function (add_entry_component_1_1) {
                add_entry_component_1 = add_entry_component_1_1;
            },
            function (edit_entry_component_1_1) {
                edit_entry_component_1 = edit_entry_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Demonline';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <router-outlet></router-outlet>\n    ",
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS, category_service_1.CategoryService, demoentry_service_1.DemoEntryService, auth_service_1.AuthService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/category/:prefix',
                            name: 'Category',
                            component: category_component_1.CategoryComponent
                        },
                        {
                            path: '/entry/:ref',
                            name: 'DemoEntryDetail',
                            component: demoentry_detail_component_1.DemoEntryDetailComponent
                        },
                        {
                            path: '/admin/newcategory',
                            name: 'AddCategory',
                            component: add_category_component_1.AddCategoryComponent
                        },
                        {
                            path: '/admin/editcategory/:prefix',
                            name: 'EditCategory',
                            component: edit_category_component_1.EditCategoryComponent
                        },
                        {
                            path: '/admin/newEntry',
                            name: 'AddEntry',
                            component: add_entry_component_1.AddEntryComponent
                        },
                        {
                            path: '/admin/editentry/:ref',
                            name: 'EditEntry',
                            component: edit_entry_component_1.EditEntryComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map