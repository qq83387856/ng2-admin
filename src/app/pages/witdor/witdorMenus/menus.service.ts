import { Injectable } from '@angular/core';
import { MenusModel } from './menus.model';
import { Logger } from './../../../theme/services/index';
import { witdorMenuUrl } from './../../../api';
import { Http } from "@angular/http";
@Injectable()
export class MenusService {
constructor(private http:Http){}

private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

public getMenuItems():Promise<MenusModel[]> {
  console.log(this.http)
  return this.http.get(witdorMenuUrl)
    .toPromise()
    .then(response=>{
      return response.json();
    })
    .catch(this.handleError);
  };


  // smartTableData:MenusModel[]= [{
  //     "id": 1,
  //     "name": "首页",
  //     "link": "http://witdor.com",
  //     "icon": "ion-ionic",
  //     "statusIcon": "default",
  //     "status":"未改"
  //   },{
  //   "id": 2,
  //   "name": "团队简介",
  //   "link": "http://witdor.com",
  //   "icon": "ion-information",
  //   "statusIcon": "warning",
  //   "status":"修改中"
  // },{
  //   "id": 3,
  //   "name": "技术动态",
  //   "link": "http://witdor.com",
  //   "icon": "ion-plus-round",
  //   "statusIcon": "default",
  //   "status":"未改"
  // },{
  //   "id": 4,
  //   "name": "报价咨询",
  //   "link": "http://witdor.com",
  //   "icon": "ion-checkmark-circled",
  //   "statusIcon": "default",
  //   "status":"未改"
  // },{
  //   "id": 5,
  //   "name": "项目流程",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-left-b",
  //   "statusIcon": "default",
  //   "status":"未改"
  // },{
  //   "id": 6,
  //   "name": "招贤纳士",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-right-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 7,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 8,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 8,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 10,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 11,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 12,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 13,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 14,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 15,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // },{
  //   "id": 16,
  //   "name": "关于我们",
  //   "link": "http://witdor.com",
  //   "icon": "ion-arrow-down-b",
  //   "statusIcon": "danger",
  //   "status":"删除"
  // }
  // ];


}
