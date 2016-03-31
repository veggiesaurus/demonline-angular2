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
    var DemoEntryService;
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
            DemoEntryService = (function () {
                function DemoEntryService(http) {
                    this.http = http;
                    this.prevSearchTerm = '';
                    this._hostUrl = 'http://localhost:3000/';
                    //private _hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
                    this._summaryUrl = this._hostUrl + 'api/demoEntry/summary';
                    this._searchUrl = this._hostUrl + 'api/demoEntry/search?keyword=';
                    this._entryUrl = this._hostUrl + 'api/demoEntry/ref/';
                    this._entryAdminUrl = this._hostUrl + 'api/admin/demoEntry/ref/';
                    this._entryAdminUrlAdd = this._hostUrl + 'api/admin/demoEntry/';
                }
                DemoEntryService.prototype.getAllSummaries = function () {
                    return this.http.get(this._summaryUrl)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.findSummaries = function (keywords, limit) {
                    this.prevSearchTerm = keywords;
                    return this.http.get(this._searchUrl + keywords + '&limit=' + limit)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.getSummaries = function (prefix) {
                    return this.http.get(this._summaryUrl + '?category=' + prefix)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.getEntry = function (ref) {
                    return this.http.get(this._entryUrl + ref)
                        .map(function (res) { return res.json(); })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.updateEntry = function (ref, entry) {
                    var body = JSON.stringify(entry);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.put(this._entryAdminUrl + ref + '?token=' + localStorage.getItem('token'), body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.deleteEntry = function (prefix) {
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.delete(this._entryAdminUrl + prefix + '?token=' + localStorage.getItem('token'), options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.addEntry = function (entry) {
                    var body = JSON.stringify(entry);
                    var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_2.RequestOptions({ headers: headers });
                    return this.http.post(this._entryAdminUrlAdd + '?token=' + localStorage.getItem('token'), body, options)
                        .map(function (res) { return res.json().data; })
                        .catch(this.handleError);
                };
                DemoEntryService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                DemoEntryService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DemoEntryService);
                return DemoEntryService;
            }());
            exports_1("DemoEntryService", DemoEntryService);
        }
    }
});
//# sourceMappingURL=demoentry.service.js.map