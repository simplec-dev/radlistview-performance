import { Component, OnInit } from "@angular/core";

import * as platformModule from "tns-core-modules/platform";

import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
    styleUrls: ["./common.css"]
})
export class ItemsComponent implements OnInit {
    items: Item[];

    spanCount: number = 3;

    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService) {
        var w = platformModule.screen.mainScreen.heightDIPs;
        if (w < platformModule.screen.mainScreen.widthDIPs) {
            w = platformModule.screen.mainScreen.widthDIPs;
        }

        if (w <= 800) {
            this.spanCount = 2;
        } else {
            var d = w - 1024;
            this.spanCount = 3 + Math.floor(d / 256);
        }
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }
}