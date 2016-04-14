import { Pipe, PipeTransform } from "angular2/core";
import { DemoSummary } from "../models/demosummary";

function getNumericFromRef(ref: string): number {    
    var match = ref.match(/\D+(\d+)\D*/);
    if (match)
        return parseInt(match[1]);
    return -1;
}

function getPrefixFromRef(ref: string) : string {
    var match = ref.match(/(\D+)\d+\D*/);
    if (match)
        return match[1];
   return "";
}


@Pipe({
    name: "sortRefNumeric",
    pure: true
})

//sorts first by prefix, and then by numeric suffix
export class SortNumericRefPipe implements PipeTransform {
    transform(array: DemoSummary[], args: any): DemoSummary[] {
        if (!array.length) return null;
        
        array.sort((a, b) => {
            
            let prefA = getPrefixFromRef(a.reference);
            let prefB = getPrefixFromRef(b.reference)
            if (prefA < prefB)
                return -1;
            else if (prefA > prefB)
                return 1;
                            
            let numA = getNumericFromRef(a.reference);
            let numB = getNumericFromRef(b.reference);
            
            if (numA < numB)
                return -1;
            else if (numA > numB)
                return 1;
            else
                return 0;
        });
        return array;
    }


}