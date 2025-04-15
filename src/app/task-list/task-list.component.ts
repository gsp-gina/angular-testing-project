import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {

        @Input() milista:string[]=[];
        @Output() task:EventEmitter<number>=new EventEmitter<number>();


        cambiar(posicion:number){
          console.log("entre");
            this.task.emit(posicion);

        }
}
