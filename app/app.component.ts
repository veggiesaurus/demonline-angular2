import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS}    from 'angular2/http';
import {CategoryService} from './services/category.service';
import {DemoEntryService} from './services/demoentry.service';
import {AuthService} from './services/auth.service';
import {CategoryComponent} from './components/category.component';
import {DemoEntryDetailComponent} from './components/demoentry-detail.component';
import {DashboardComponent} from './components/dashboard.component';
import {AddCategoryComponent} from './components/admin/add-category.component';
import {EditCategoryComponent} from './components/admin/edit-category.component';
import {AddEntryComponent} from './components/admin/add-entry.component';
import {EditEntryComponent} from './components/admin/edit-entry.component';

@Component({
    selector: 'my-app',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS, CategoryService, DemoEntryService, AuthService]    
})
@RouteConfig([
    {
        path: '/category/:prefix',
        name: 'Category',
        component: CategoryComponent
    },
    {
        path: '/entry/:ref',
        name: 'DemoEntryDetail',
        component: DemoEntryDetailComponent
    },   
    {
        path: '/admin/newcategory',
        name: 'AddCategory',
        component: AddCategoryComponent
    },
    {
        path: '/admin/editcategory/:prefix',
        name: 'EditCategory',
        component: EditCategoryComponent
    },
    {
        path: '/admin/newEntry',
        name: 'AddEntry',
        component: AddEntryComponent
    },
    {
        path: '/admin/editentry/:ref',
        name: 'EditEntry',
        component: EditEntryComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },

])
export class AppComponent {
    title = 'Demonline';
}