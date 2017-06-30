import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { ItemService } from "./item/item.service";
import { ItemsComponent } from "./item/items.component";

import { TNSFrescoModule } from "nativescript-fresco/angular";
import * as frescoModule from "nativescript-fresco";
import * as application from "application";

import { NativeScriptUIListViewModule } from "nativescript-telerik-ui-pro/listview/angular";

if (application.android) {
    application.on("launch", () => {
        console.log("INITIALIZING FRESCO");
        frescoModule.initialize();
    });
}

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
// import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUIListViewModule,
        TNSFrescoModule
    ],
    declarations: [
        AppComponent,
        ItemsComponent
    ],
    providers: [
        ItemService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
