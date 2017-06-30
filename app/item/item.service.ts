import { Injectable } from "@angular/core";
import * as fs from "file-system"; 

import { Item } from "./item";

@Injectable()
export class ItemService {
    private items : any = null;

    getItems(): Item[] {
        if (this.items==null) {
            var path = fs.path.join(fs.knownFolders.currentApp().path, "/item/shows.json");
            var s = fs.File.fromPath(path).readTextSync();
            this.items = JSON.parse(s);
        }
        
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter(item => item.id === id)[0];
    }
}
