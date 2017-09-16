import { Component } from '@angular/core'

@Component({
  selector:'hello',
  template:'<h1>{{getMessage()}}</h1>'
})

export class HelloWorldComponent{
 
 public message:string;

 getMessage():string{
   this.message="Hello World";
  return this.message;
 }
}