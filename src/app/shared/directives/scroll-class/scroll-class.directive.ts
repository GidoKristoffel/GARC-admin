import {
  AfterViewInit,
  Directive,
  ElementRef,
  OnDestroy,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[cltScrollClass]',
  standalone: true,
})
export class ScrollClassDirective implements AfterViewInit, OnDestroy {
  private resizeObserver!: ResizeObserver;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.checkScroll();
    this.initResize();
  }

  private initResize(): void {
    this.resizeObserver = new ResizeObserver(() => this.checkScroll());
    this.resizeObserver.observe(this.elementRef.nativeElement);
  }

  private checkScroll(): void {
    const element = this.elementRef.nativeElement;
    const hasScrollbar: boolean =
      element.scrollHeight > element.scrollTop + element.clientHeight ||
      element.scrollTop > 0;

    if (hasScrollbar) {
      this.renderer.addClass(element, 'scroll');
    } else {
      this.renderer.removeClass(element, 'scroll');
    }
  }

  ngOnDestroy(): void {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }
}
