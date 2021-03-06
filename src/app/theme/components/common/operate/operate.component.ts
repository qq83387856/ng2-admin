import {Component, OnInit} from '@angular/core';

import { CommonLinkComponent,LinkModel } from './../links/index';

@Component({
  moduleId: module.id,
  selector: 'common-operate',
  directives:[CommonLinkComponent],
  styles:[require('./operate.scss')],
  template: require('./operate.html')
})
export class OperateComponent implements OnInit {

  links:LinkModel[]=[];
  flag:boolean = false;

  constructor() {
  }

  ngOnInit() {
    this.links=[
      {
        linkName: "更新",
        linkUrl: "/update",
        icon: "ion-information",
        className: "btn-success"
      }, {
        linkName: "删除",
        linkUrl: "/delete",
        icon: "ion-nuclear",
        className: "btn-danger"
      }
    ]
  }

  showOperate():void {
    this.flag = true;
    if(this.links.length<=0){
      this.links=[
        {
          linkName: "更新",
          linkUrl: "/update",
          icon: "ion-information",
          className: "btn-success"
        }, {
          linkName: "删除",
          linkUrl: "/delete",
          icon: "ion-nuclear",
          className: "btn-danger"
        }
      ]
    }
  }


  hideOperate():void {
    this.flag = false;
  }
}
