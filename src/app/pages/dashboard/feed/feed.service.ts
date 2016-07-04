import {Injectable} from '@angular/core';

@Injectable()
export class FeedService {

  private data = [
    {
      type: 'text-message',
      author: 'Kostya',
      surname: 'Danovsky',
      header: 'Posted new message',
      text: '正在使用angular2开发后台.',
      time: 'Today 11:55 pm',
      ago: '25 minutes ago',
      expanded: false,
    }, {
      type: 'video-message',
      author: 'Andrey',
      surname: 'Hrabouski',
      header: 'Added new video',
      text: '"头像全部使用的svg，不能修改名字真难过"',
      preview: 'app/feed/vader-and-me-preview.png',
      link: 'http://witdor.com',
      time: 'Today 9:30 pm',
      ago: '3 hrs ago',
      expanded: false,
    }, {
      type: 'image-message',
      author: 'Vlad',
      surname: 'Lugovsky',
      header: 'Added new image',
      text: '"头像全部使用的svg，不能修改名字真难过"',
      preview: 'app/feed/my-little-kitten.png',
      link: 'http://witdor.com',
      time: 'Today 2:20 pm',
      ago: '10 hrs ago',
      expanded: false,
    }, {
      type: 'text-message',
      author: 'Nasta',
      surname: 'Linnie',
      header: 'Posted new message',
      text: '头像全部使用的svg，不能修改名字真难过',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }, {
      type: 'geo-message',
      author: 'Nick',
      surname: 'Cat',
      header: 'Posted location',
      text: '"头像全部使用的svg，不能修改名字真难过"',
      preview: 'app/feed/new-york-location.png',
      link: 'http://witdor.com',
      time: '11.11.2015',
      ago: '2 days ago',
      expanded: false,
    }
  ];

  getData() {
    return this.data;
  }
}
