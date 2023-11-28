import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[clickOutside]',
  standalone: true
})
export class ClickOutsideDirective {
  @Output() clickOutside: EventEmitter<void> = new EventEmitter<void>();
  private initialized: boolean = false;

  constructor(private elementRef: ElementRef) {
    setInterval((): void => {
      this.initialized = true;
    }, 0);
  }

  @HostListener('document:click', ['$event.target'])
  onClick(target: any): void {
    if (this.initialized) {
      const clickedInside: boolean = this.elementRef.nativeElement.contains(target);

      if (!clickedInside) {
        this.clickOutside.emit();
      }
    }
  }
}
