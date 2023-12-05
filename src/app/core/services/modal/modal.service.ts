import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EmbeddedViewRef,
  EnvironmentInjector,
  Injectable, Type
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private environmentInjector: EnvironmentInjector,
    private appRef: ApplicationRef,
  ) {}

  public open<C>(component: Type<C>): ComponentRef<C> {
    const componentRef: ComponentRef<C> = createComponent(component, {
      environmentInjector: this.environmentInjector
    });
    const domElement: HTMLElement = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.appRef.attachView(componentRef.hostView);
    document.body.appendChild(domElement)

    return componentRef;
  }

  public close<C>(componentRef: ComponentRef<C>): void {
    componentRef.destroy();
  }
}
