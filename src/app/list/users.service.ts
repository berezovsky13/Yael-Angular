import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http"

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http:HttpClient){}

    getData()
    {
        let url="http://192.168.163.191/db.json";
        return this.http.get(url);
    }
}