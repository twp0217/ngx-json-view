import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  data: { [key: string]: any } = {
    name: 'twp0217',
    url: 'https://github.com/twp0217',
    string: 'github',
    number: 88,
    boolean: true,
    object: {
      obj1: 'obj1',
      obj2: 'obj2',
      object: {
        obj11: 'obj11',
        obj22: 'obj22'
      },
      emptyArray: []
    },
    array: [1, 2, 3],
    null: null
  };

  customData: string = '{  }';
  customJson: { [key: string]: any };

  textareaModelChange(textareaValue: string): void {
    try {
      this.customJson = JSON.parse(textareaValue);
    } catch (error) {}
  }
}
