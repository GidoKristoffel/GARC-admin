import { Injectable, Input, OnInit } from "@angular/core";
import { FormGroup, FormGroupDirective } from "@angular/forms";

@Injectable()
export abstract class InjectReactiveForm implements OnInit {
  @Input() form!: FormGroup;

  protected constructor(
    protected rootFormGroup: FormGroupDirective
  ) {}

  ngOnInit() {
    this.initForm();
  }

  private initForm(): void {
    this.form = this.rootFormGroup.control;
  }
}
