import { Component, OnInit, Input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ngx-json-view',
  templateUrl: './ngx-json-view.component.html',
  styleUrls: ['./ngx-json-view.component.scss'],
  encapsulation  : ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxJsonViewComponent implements OnInit {
  @Input() data: { [key: string]: any };
  @Input() levelOpen: number;

  key: string;
  ngOnInit(): void {}
}
