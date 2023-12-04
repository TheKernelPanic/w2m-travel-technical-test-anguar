import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import Superhero from "@model/superhero";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public superheroes: Superhero[] = [];
  @Output() public updateAction: EventEmitter<Superhero> = new EventEmitter();
  @Output() public deleteAction: EventEmitter<Superhero> = new EventEmitter();

  public dataSource!: MatTableDataSource<Superhero>;
  public displayedColumns: string[] = ['id', 'name', 'actions'];

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Superhero>(this.superheroes);
  }
}
