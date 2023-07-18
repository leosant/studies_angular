import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.scss'],
})
export class DiretivaNgifComponent {
  cursos: string[] = [];

  isCurso: boolean = this.cursos.length > 0;

  public onMostrarCursos(): void {
    this.isCurso = this.isCurso ? false : true;
  }
}
