import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-character',
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }


  emitCharacter(): void {
    
    console.log(this.character);

    if (this.character.name.length === 0) {
      return;
    }

    this.onNewCharacter.emit(this.character);

    this.character.name='';
    this.character.power=0;
  }

}
