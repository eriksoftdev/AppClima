export class Store {
    constructor() {

        this.city = city;
        this.countryCode = countryCode;
        this.defaultCity = 'Teziutlan';
        this.countryCode = 'MX';
        
    }


    getLocationData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        } else {
            this.city = localStorage.getItem('city');
        }

        if(localStorage.getItem('countryCode')=== null){
            this.countryCode = this.defaultCountryCode;
        } else {
            this.countryCode = localStorage.getItem('countryCode');
        }
        
        return {
            city: this.city,
            countryCode: this.countryCode,
        }
    }

    setLocationData(city, countryCode){
        localStorage.setItem('city', city);
        localStorage.setItem('countryCode', countryCode);
    }
}