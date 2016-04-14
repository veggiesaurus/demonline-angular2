System.register(["angular2/core"], function(exports_1, context_1) {
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
    var core_1;
    var SortNumericRefPipe;
    function getNumericFromRef(ref) {
        var match = ref.match(/\D+(\d+)\D*/);
        if (match)
            return parseInt(match[1]);
        return -1;
    }
    function getPrefixFromRef(ref) {
        var match = ref.match(/(\D+)\d+\D*/);
        if (match)
            return match[1];
        return "";
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SortNumericRefPipe = (function () {
                function SortNumericRefPipe() {
                }
                SortNumericRefPipe.prototype.transform = function (array, args) {
                    if (!array.length)
                        return null;
                    array.sort(function (a, b) {
                        var prefA = getPrefixFromRef(a.reference);
                        var prefB = getPrefixFromRef(b.reference);
                        if (prefA < prefB)
                            return -1;
                        else if (prefA > prefB)
                            return 1;
                        var numA = getNumericFromRef(a.reference);
                        var numB = getNumericFromRef(b.reference);
                        if (numA < numB)
                            return -1;
                        else if (numA > numB)
                            return 1;
                        else
                            return 0;
                    });
                    return array;
                };
                SortNumericRefPipe = __decorate([
                    core_1.Pipe({
                        name: "sortRefNumeric",
                        pure: true
                    }), 
                    __metadata('design:paramtypes', [])
                ], SortNumericRefPipe);
                return SortNumericRefPipe;
            }());
            exports_1("SortNumericRefPipe", SortNumericRefPipe);
        }
    }
});
//# sourceMappingURL=sort-ref-numeric.js.map