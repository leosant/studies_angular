import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.scss'],
})
export class DiretivaNgclassComponent {
  public isFavorite = false;

  public onClick(): void {
    this.isFavorite = !this.isFavorite;
  }
}
