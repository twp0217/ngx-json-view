import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxJsonViewComponent } from './ngx-json-view.component';
import { NgxJsonViewNodeComponent } from './ngx-json-view-node.component';

@NgModule({
  declarations: [NgxJsonViewComponent, NgxJsonViewNodeComponent],
  imports: [CommonModule],
  exports: [NgxJsonViewComponent]
})
export class NgxJsonViewModule {}
