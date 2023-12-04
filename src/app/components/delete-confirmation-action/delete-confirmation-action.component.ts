import {Component, EventEmitter, Input, Output} from '@angular/core';
import Superhero from "@model/superhero";
import {MatDialog, MatDialogRef} from "@angular/material/dialog";
import {DeleteConfirmationMessageComponent} from "../delete-confirmation-message/delete-confirmation-message.component";

@Component({
  selector: 'app-delete-confirmation-action',
  templateUrl: './delete-confirmation-action.component.html',
  styleUrls: ['./delete-confirmation-action.component.scss']
})
export class DeleteConfirmationActionComponent {

  @Input() public superhero!: Superhero;
  @Output() public confirmed: EventEmitter<Superhero> = new EventEmitter();

  private dialogRef!: MatDialogRef<DeleteConfirmationMessageComponent>;

  public constructor(
    private dialogService: MatDialog
  ) {
  }

  public showDialog(): void {
    this.dialogRef = this.dialogService.open(DeleteConfirmationMessageComponent, {
      data: this.superhero
    });
    this.dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.confirmed.emit(this.superhero);
      }
    });
  }
}
