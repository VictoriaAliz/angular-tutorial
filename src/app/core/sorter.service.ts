import { Injectable } from '@angular/core';

@Injectable()
export class SorterService {

	property: string = null;
	direction: number = -1;

    sort(collection: any[], prop: any) {
        this.property = prop;
        this.direction = (this.property === prop) ? this.direction * -1 : 1;

        collection.sort((a: any,b: any) => {
            const aVal = a[prop];
            const bVal = b[prop];
        
            return aVal === bVal ? 0:
                aVal > bVal ? this.direction * -1 :
                this.direction;
          }
        );
    }
}