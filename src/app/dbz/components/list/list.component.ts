import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [

    {
      name: 'trunks',
      power: 10
    }
  ]

  @Output()
  onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteCharacter(index: number): void {
    this.onDelete.emit(index);
  }


}
