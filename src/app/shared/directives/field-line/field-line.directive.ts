import { AfterViewInit, Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cltFieldLine]',
  standalone: true,
})
export class FieldLineDirective implements AfterViewInit {
  private readonly leftBlockStyles: {[key: string]: string} = {
    flex: '1',
    height: '2px',
    'background-color': '#ffffff14',
    'margin-left': '5px',
  };

  private readonly rightBlockStyles: {[key: string]: string} = {
    width: '7px',
    'margin-right': '5px',
    height: '100%',
    border: '2px solid #ffffff14',
    'border-right': '0',
    'box-sizing': 'border-box',
  };

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.addDecoratorBlocks();
  }

  private addDecoratorBlocks(): void {
    const fieldDiv = this.el.nativeElement;

    const leftBlock: HTMLDivElement = this.renderer.createElement('div');
    const rightBlock: HTMLDivElement = this.renderer.createElement('div');

    this.applyStyles(leftBlock, this.leftBlockStyles);
    this.applyStyles(rightBlock, this.rightBlockStyles);

    this.renderer.appendChild(fieldDiv, leftBlock);
    this.renderer.appendChild(fieldDiv, rightBlock);
  }

  private applyStyles(
    element: HTMLDivElement,
    styles: { [key: string]: string },
  ): void {
    for (let style in styles) {
      this.renderer.setStyle(element, style, styles[style]);
    }
  }
}
