import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './task-list/task-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  imports:[FormsModule, TaskListComponent]
   
})
export class AppComponent {
  title = 'angular-testing-project';
  tarea:string="";
  lista:string[]=[];
  tareaActualizar:string="";
  indice:number=-3;

  addTask( ) {
    this.lista.push(this.tarea);
    let guardar=JSON.stringify(this.lista);
    localStorage.setItem("examen", guardar);
    this.tarea="";
  }


  colocar(posicion:any){
       this.tareaActualizar=this.lista[posicion];
       console.log("***"+this.lista[posicion])
       this.indice=posicion;
  }
  deleteTask(task: string) {
  }

  actualizar(){
     this.lista[this.indice]=this.tareaActualizar;
     this.tareaActualizar="";

  }
  getTasks(): string[] {
    return [];
  }
}
