import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import Superhero from "@model/superhero";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() public superheroes: Superhero[] = [];
  @Output() public updateAction: EventEmitter<Superhero> = new EventEmitter();
  @Output() public deleteAction: EventEmitter<Superhero> = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource!: MatTableDataSource<Superhero>;
  public displayedColumns: string[] = ['id', 'name', 'actions'];

  public constructor(

  ) {
  }

  public ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Superhero>(this.superheroes);
    this.dataSource.paginator = this.paginator;
  }
}
