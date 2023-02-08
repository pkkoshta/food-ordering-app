import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Product } from 'src/app/shared/modal/backend/product';
import { Foods } from 'src/app/shared/modal/food';
import { Tag } from 'src/app/shared/modal/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  eror:string='';

  productServiceUrl:string='http://localhost:9091/product';
  
  constructor(private httpClient:HttpClient, private route:Router) { }

  // calling backing serivce
  foodById(id: number): Observable<Foods> {
    return this.httpClient.get<Foods>(`${this.productServiceUrl}/${id}`);
  }
  
// dummy data
  // getFoodById(id: number): Foods {
  //   return this.getAll().find(food => food.id == id)!;
  // }

  createFood(food:Product):Observable<Product>{
    return this.httpClient.post<Product>('http://localhost:9091/product', food).pipe(
      catchError((error) => {
          let errorMsg: string;
          if (error.error instanceof ErrorEvent) {
              errorMsg = `Error: ${error.error.message}`;
          } else {
              errorMsg = this.getServerErrorMessage(error);
              this.eror=errorMsg;
          }
  
          return throwError(errorMsg);
      })
  );
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {

        case 200: {
          this.route.navigateByUrl('/login');
          return `Success`;
        }
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Invalid Username/Password `;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}


  // backend

  getFoods():Observable<Foods[]>{
    return this.httpClient.get<Foods[]>(`${this.productServiceUrl}`)
  }

}
