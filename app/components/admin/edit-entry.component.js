System.register(['angular2/core', 'angular2/router', '../../services/demoentry.service', '../../services/category.service', './add-entry.component'], function(exports_1, context_1) {
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
    var core_1, router_1, router_2, demoentry_service_1, category_service_1, add_entry_component_1;
    var EditEntryComponent;
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
            function (add_entry_component_1_1) {
                add_entry_component_1 = add_entry_component_1_1;
            }],
        execute: function() {
            EditEntryComponent = (function (_super) {
                __extends(EditEntryComponent, _super);
                function EditEntryComponent(_r, _rP, _dES, _cS) {
                    _super.call(this, _r, _rP, _dES, _cS);
                    this._r = _r;
                    this._rP = _rP;
                    this._dES = _dES;
                    this._cS = _cS;
                    this.editMode = true;
                }
                EditEntryComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    _super.prototype.ngOnInit.call(this);
                    var reference = this._routeParams.get('ref');
                    this._demoEntryService.getEntry(reference).subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; }, function () { return _this.similarToList = _this.entry.similarTo.join(','); });
                };
                EditEntryComponent.prototype.saveChanges = function () {
                    var _this = this;
                    if (this.similarToList) {
                        this.entry.similarTo = this.similarToList.toUpperCase().split(',');
                    }
                    else
                        this.entry.similarTo = [];
                    var ref = this._routeParams.get('ref');
                    this._demoEntryService.updateEntry(ref, this.entry).subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                EditEntryComponent.prototype.deleteEntry = function () {
                    var _this = this;
                    var ref = this._routeParams.get('ref');
                    this._demoEntryService.deleteEntry(ref).subscribe(function (entry) { return _this.entry = entry; }, function (error) { return _this.errorMessage = error; }, function () { return _this.returnToList(); });
                };
                EditEntryComponent = __decorate([
                    core_1.Component({
                        selector: 'edit-entry',
                        templateUrl: './app/components/templates/edit-entry.component.html',
                        inputs: ['editMode']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, router_2.RouteParams, demoentry_service_1.DemoEntryService, category_service_1.CategoryService])
                ], EditEntryComponent);
                return EditEntryComponent;
            }(add_entry_component_1.AddEntryComponent));
            exports_1("EditEntryComponent", EditEntryComponent);
        }
    }
});
//# sourceMappingURL=edit-entry.component.js.map