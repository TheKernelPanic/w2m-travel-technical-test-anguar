import {Component, Inject} from '@angular/core';
import Superhero from "@model/superhero";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-delete-confirmation-message',
  templateUrl: './delete-confirmation-message.component.html',
  styleUrls: ['./delete-confirmation-message.component.scss']
})
export class DeleteConfirmationMessageComponent {

  public constructor(
    @Inject(MAT_DIALOG_DATA) public superhero: Superhero,
    public dialogRef: MatDialogRef<DeleteConfirmationMessageComponent>
  ) {
  }
}
