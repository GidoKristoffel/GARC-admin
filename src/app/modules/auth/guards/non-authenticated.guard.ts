import { CanActivateFn, Router } from '@angular/router';
import { SecurityService } from "../../../core/services/security/security.service";
import { inject } from "@angular/core";
import { EPage } from "../../../core/enums/page.enum";

export const nonAuthenticatedGuard: CanActivateFn = (): boolean => {
  if (!inject(SecurityService).isAuthenticated()) {
    return true;
  } else {
    inject(Router).navigate([EPage.Main]).then();
    return false;
  }
};
