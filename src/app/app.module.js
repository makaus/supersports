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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var customheader_component_1 = require('./customheader/customheader.component');
var customfooter_component_1 = require('./customfooter/customfooter.component');
var main_component_1 = require('./main/main.component');
var contact_component_1 = require('./contact/contact.component');
var banner_component_1 = require('./banner/banner.component');
var categories_component_1 = require('./categories/categories.component');
var shoes_component_1 = require('./shoes/shoes.component');
var shoe_data_service_1 = require('./shared/shoe-data.service');
var shoes_detail_component_1 = require('./shoes/shoes-detail.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: main_component_1.MainComponent },
                    { path: 'support', component: contact_component_1.ContactComponent },
                    { path: 'shoe/:id', component: shoes_detail_component_1.ShoeDetailComponent },
                    { path: '', redirectTo: 'home', pathMatch: 'full' },
                    { path: '**', redirectTo: 'home', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent, customheader_component_1.CustomHeaderComponent, customfooter_component_1.CustomFooterComponent, main_component_1.MainComponent, banner_component_1.BannerComponent, categories_component_1.CategoriesComponent, shoes_component_1.ShoesComponent, contact_component_1.ContactComponent, shoes_detail_component_1.ShoeDetailComponent],
            providers: [shoe_data_service_1.ShoeDataService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map