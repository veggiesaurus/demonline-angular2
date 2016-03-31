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
    var AuthService;
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
            AuthService = (function () {
                function AuthService(http) {
                    this.http = http;
                    this._hostUrl = 'http://localhost:3000/';
                    //private _hostUrl = 'http://webapp-phy.uct.ac.za:3000/';
                    this._authUrl = this._hostUrl + 'api/auth/';
                    this.token = localStorage.getItem('token');
                }
                AuthService.prototype.login = function (username, password) {
                    var _this = this;
                    var creds = "username=" + username + "&password=" + password;
                    var headers = new http_2.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    return this.http.post(this._authUrl + 'login', creds, { headers: headers })
                        .map(function (res) {
                        var jsonData = res.json();
                        _this.token = jsonData.token;
                        if (_this.token) {
                            localStorage.setItem('token', _this.token);
                            return true;
                        }
                        else {
                            localStorage.removeItem('token');
                            return false;
                        }
                    })
                        .catch(this.handleError);
                };
                AuthService.prototype.isLoggedIn = function () {
                    return localStorage.getItem('token') != null;
                };
                AuthService.prototype.logout = function () {
                    var _this = this;
                    return this.http.post(this._authUrl + 'logout' + '?token=' + this.token, '')
                        .map(function (res) {
                        _this.token = undefined;
                        localStorage.removeItem('token');
                    })
                        .catch(this.handleError);
                };
                AuthService.prototype.handleError = function (error) {
                    console.error(error);
                    return Observable_1.Observable.throw(error.json().error || 'Server error');
                };
                AuthService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AuthService);
                return AuthService;
            }());
            exports_1("AuthService", AuthService);
        }
    }
});
//# sourceMappingURL=auth.service.js.map