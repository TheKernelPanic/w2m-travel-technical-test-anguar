import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import Superhero from "@model/superhero";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements AfterViewInit, OnChanges {
  @Input() public superheroes!: Superhero[];
  @Output() public updateAction: EventEmitter<Superhero> = new EventEmitter();
  @Output() public deleteAction: EventEmitter<Superhero> = new EventEmitter();
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public dataSource: MatTableDataSource<Superhero> = new MatTableDataSource<Superhero>([]);
  public displayedColumns: string[] = ['id', 'name', 'actions'];

  public ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes['superheroes'].currentValue;
  }

  public ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
}
