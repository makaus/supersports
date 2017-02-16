"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var shoe_data_service_1 = require('../shared/shoe-data.service');
var ShoeDetailComponent = (function () {
    function ShoeDetailComponent(_route, _router, _shoeDataService) {
        this._route = _route;
        this._router = _router;
        this._shoeDataService = _shoeDataService;
    }
    ShoeDetailComponent.prototype.ngOnInit = function () {
        this.shoeid = +this._route.snapshot.params['id'];
        this.shoe = this._shoeDataService.getShoeDataById(this.shoeid);
    };
    ShoeDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'shoes-detail.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_1.Router, shoe_data_service_1.ShoeDataService])
    ], ShoeDetailComponent);
    return ShoeDetailComponent;
}());
exports.ShoeDetailComponent = ShoeDetailComponent;
//# sourceMappingURL=shoes-detail.component.js.map