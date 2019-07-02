import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { isUndefined, isObject, isArray, isString, isNumber, isBoolean } from './utils';

@Component({
// tslint:disable-next-line: component-selector
  selector: 'ngx-json-view-node',
  templateUrl: './ngx-json-view-node.component.html',
  styleUrls: ['./ngx-json-view-node.component.scss']
})
export class NgxJsonViewNodeComponent implements OnInit, OnChanges {
  @Input() data: { [key: string]: any };
  @Input() key: string;
  @Input() level: number = 0;
  @Input() levelOpen: number;

  isOpen: boolean = false;
  hasChildren: boolean = false;
  dataType: string;
  value: any;
  valueType: string;
  isObject: boolean = false;
  isArray: boolean = false;

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && this.data) {
      this.dataHandle();
    }
  }
  dataHandle(): void {
    // 是否需要展开
    if (!isUndefined(this.levelOpen)) {
      if (this.level <= this.levelOpen) {
        this.isOpen = true;
      }
    }
    // 数据处理
    if (isObject(this.data)) {
      this.hasChildren = Object.keys(this.data).length > 0;
      this.isObject = true;
      this.dataType = 'Object';
      if (isArray(this.data)) {
        this.isArray = true;
        this.dataType = 'Array';
      }
    } else {
      this.value = this.data;
      if (isString(this.data)) {
        this.valueType = 'string';
      } else if (isNumber(this.data)) {
        this.valueType = 'number';
      } else if (isBoolean(this.data)) {
        this.valueType = 'boolean';
      } else if (null === this.data) {
        this.valueType = 'null';
        this.value = 'null';
      }
    }
  }

  toggle(): void {
    if (this.hasChildren) {
      this.isOpen = !this.isOpen;
    }
  }
}
