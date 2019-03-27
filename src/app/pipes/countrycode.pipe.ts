import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: "countrycode"
})
export class CountryCodePipe implements PipeTransform {
    transform(contact_no: any, country: string, name : string): string {
        console.log(name);
        switch (country) {
            case 'US':
                return "+1 " + contact_no;
            case 'AUS':
                return "+11 " + contact_no;
            default:
                return "+91 " + contact_no;
        }
    }
}