import {Directive, ElementRef, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') highlightColor: string = 'blue';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('focus') onFocus(): void {
    this.changeBorder(this.highlightColor);
  }

  @HostListener('blur') onBlur(): void {
    this.changeBorder('');
  }

  private changeBorder(color: string): void {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'border', `2px solid ${color}`);
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
    }
  }
}
