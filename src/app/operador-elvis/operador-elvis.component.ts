import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrls: ['./operador-elvis.component.scss'],
})
export class OperadorElvisComponent {
  task: any = {
    describe: 'descrição da tarefa',
    responsable: {
      user: {
        name: 'Leo',
      },
    },
  };
}
