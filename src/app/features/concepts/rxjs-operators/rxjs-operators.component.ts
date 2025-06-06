import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { catchError, combineLatest, debounceTime, delay, filter, forkJoin, from, map, mergeMap, of, tap } from 'rxjs';

@Component({
  selector: 'app-rxjs-operators',
  imports: [],
  templateUrl: './rxjs-operators.component.html',
  styleUrl: './rxjs-operators.component.scss'
})
export class RxjsOperatorsComponent {

  private http = inject(HttpClient);

  basicOperators(){
    const sources$ = from([10, 20, 15, 30, 5, 50]);

    sources$
      .pipe(
        // debounceTime(100),
        filter(value => value > 10),
        map(value => {
          if (value === 30) {
            // Deliberately throw an error for demonstration
            throw new Error('Value 30 is not allowed');
          }
          return value * 2;
        }),
        tap(value => {
          console.log('Value after map:', value);
        }),
        catchError(err => {
          console.error('Error caught in catchError:', err.message);
          // Recover with fallback value and continue
          return of(-1);
        })
      )
      .subscribe({
        next: val => console.log('Next:', val),
        error: err => console.error('Error:', err),
        complete: () => console.log('Completed'),
      });
  }

  combineLatestOprator(){
    const sources1$ = this.http.get('https://jsonplaceholder.typicode.com/todos');
    const sources2$ = from([10, 20, 15, 30, 5, 50]);

    combineLatest([sources1$,sources2$]).pipe(
      delay(100),
      filter(([todos,val2])=>Array.isArray(todos) && todos.some(todo => todo.userId === 1) ),
      // map(([todos,val])=> Array.isArray(todos) && todos.some(todo => todo.userId === 1) ),
      tap(([todos])=>console.log((todos))),
    ).subscribe({ 
      next:(res)=>console.log({res}),
      complete:()=>console.log("All observables completed!")
    })

  }

  forkJoinOperator(){
    const sources1$ = this.http.get('https://jsonplaceholder.typicode.com/todos/1');
    const sources2$ = this.http.get('https://jsonplaceholder.typicode.com/todos/2');

    forkJoin([sources1$,sources2$]).subscribe({
      next: ([source1Response , source2Response]) => console.log({source1Response} , {source2Response}),
      complete: ()=> console.warn("API responses completed!")
    })

  }

  mergeMap(){
     const userIds = [1, 2, 3];

    from(userIds)
      .pipe(
        mergeMap(id => this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`))
      )
      .subscribe({
        next: user => console.log('User:', user),
        complete: () => console.log('All user requests completed'),
      });
  }

}
