import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  model: any = {};
  public maxLength = 5;

  onSubmit() {
    alert('SUCCESS' + JSON.stringify(this.model));
  }
}
