import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') highlightColor: string = 'blue';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('');
  }

  private changeBackgroundColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

}
