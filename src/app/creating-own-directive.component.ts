import { Directive, ElementRef, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class CreatingOwnDirective {

  constructor(private el: ElementRef) { }

  @Input() defaultColor: string;

  // tslint:disable-next-line:no-input-rename
  @Input('appHighlight') highlightColor: string;
  @HostBinding('style.backgroundColor') bc = 'purple';
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
    }
}
