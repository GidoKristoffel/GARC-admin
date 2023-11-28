import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgIconComponent } from "angular-svg-icon";
import { Router } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";

@Component({
  selector: 'clt-sidebar-btn',
  standalone: true,
  imports: [CommonModule, SvgIconComponent, TranslateModule],
  templateUrl: './sidebar-btn.component.html',
  styleUrl: './sidebar-btn.component.scss'
})
export class SidebarBtnComponent {
  @Input() icon: string = '';
  @Input() label: string = '';
  @Input() link!: string;

  constructor(
    private router: Router
  ) {}

  public redirectTo(): void {
    if (this.link) {
      console.log(this.link);
      this.router.navigate([this.link]).then();
    }
  }
}
