import { environment } from '../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';


export interface ITransaction
{
    ticker: string;
    created: string;
    units: number;
    unitPrice: number;
    priceCurrency: string;
    abcToPriceCurrencyRate: number;
}

@Injectable()
export class PositionService{    
    private apiUrl:string = environment.apiURL;
    constructor(private http:HttpClient){
        let apiUrl = environment.apiURL + 'position';
    }

    getTransactions() {
        return this.http.get<Array<ITransaction>>(this.apiUrl + "position");
        //return ["trans1","trans2",this.apiUrl];
    }
}