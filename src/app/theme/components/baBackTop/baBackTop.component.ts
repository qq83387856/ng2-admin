import {Component, ViewChild, HostListener, Input, ElementRef} from '@angular/core';

@Component({
  selector: 'ba-back-top',
  styles: [require('./baBackTop.scss')],
  template: require('./baBackTop.html')
})
export class BaBackTop {

  @Input() position:number = 400;
  @Input() showSpeed:number = 500;
  @Input() moveSpeed:number = 1000;

  @ViewChild('baBackTop') private selector:ElementRef;

  ngAfterViewInit () {
    this.onWindowScroll();
  }

  @HostListener('click')
  onClick():boolean {
    jQuery('html, body').animate({scrollTop:0}, {duration:this.moveSpeed});
    return false;
  }

  @HostListener('window:scroll')
  onWindowScroll():void {
    let el = this.selector.nativeElement;
    window.scrollY > this.position ? jQuery(el).fadeIn(this.showSpeed) : jQuery(el).fadeOut(this.showSpeed);
  }
}
