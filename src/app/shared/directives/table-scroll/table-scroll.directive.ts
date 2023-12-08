import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cltTableScroll]',
  standalone: true,
})
export class TableScrollDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  @HostListener('scroll', ['$event'])
  onScroll(event: Event): void {
    const scrollLeft = (event.target as HTMLElement).scrollLeft;

    this.renderer.setStyle(
      this.el.nativeElement.querySelector('thead'),
      'left',
      `-${scrollLeft}px`,
    );
    this.renderer.setStyle(
      this.el.nativeElement.querySelector('thead th:nth-child(1)'),
      'left',
      `${scrollLeft}px`,
    );

    const rows = this.el.nativeElement.querySelectorAll('tbody tr');
    rows.forEach((row: any): void => {
      const firstCell = row.querySelector('td:first-child');
      if (firstCell) {
        this.renderer.setStyle(firstCell, 'left', `${scrollLeft}px`);
      }
    });
  }
}
