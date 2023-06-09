import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  // @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 10
    }
  ]


  // onDeleteCharater( characterIndex:number ) {
  //   console.log({ characterIndex });
  //   this.onDelete.emit(characterIndex);
  // }

  onDeleteByID(characterID?: string) {

    if (!characterID) return;
    this.onDelete.emit(characterID);
  }


}
