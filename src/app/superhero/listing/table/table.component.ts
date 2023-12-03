import {Component, EventEmitter, Input, Output} from '@angular/core';
import Superhero from "@model/superhero";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  @Input() public superheros: Superhero[] = [];
  @Output() public updateAction: EventEmitter<Superhero> = new EventEmitter();
  @Output() public deleteAction: EventEmitter<Superhero> = new EventEmitter();

  public displayedColumns: string[] = ['id', 'name', 'actions'];
}
