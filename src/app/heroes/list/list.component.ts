import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Wolverine', 'Ironman'];

  public deletedHero?: string;

  public removeHero(): void {
    this.deletedHero = this.heroNames.pop();
  }


};

