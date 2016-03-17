System.register(['angular2/core', 'angular2/http', 'rxjs/Observable'], function(exports_1, context_1) {
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
    var core_1, http_1, http_2, Observable_1;
    var CategoryService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
                http_2 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            CategoryService = (function () {
                function CategoryService(http) {
                    this.http = http;
                    this._hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
                    this._categoryUrl = this._hostUrl + 'api/cats/';
                    this._categoryAdminUrl = this._hostUrl + 'api/admin/cats/';
                }
                CategoryService.prototype.getCategories = function () {
                    return this.http.get(this._categoryUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CategoryService.prototype.getCategory = function (prefix) {
                    return this.http.get(this._categoryUrl + prefix)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                CategoryService.prototype.updateCategory = function (prefix, category) {
                    var body = JSON.stringify(category);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.put(this._categoryAdminUrl + prefix, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                CategoryService.prototype.deleteCategory = function (prefix) {
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(this._categoryAdminUrl + prefix, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                CategoryService.prototype.addCategory = function (category) {
                    var body = JSON.stringify(category);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._categoryAdminUrl, body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                CategoryService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                CategoryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], CategoryService);
                return CategoryService;
            }());
            exports_1("CategoryService", CategoryService);
        }
    }
});
//# sourceMappingURL=category.service.js.map