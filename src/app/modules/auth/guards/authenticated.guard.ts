import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { SecurityService } from "../../../core/services/security/security.service";
import { EPage } from "../../../core/enums/page.enum";

export const authenticatedGuard: CanActivateFn = (): boolean => {
  if (inject(SecurityService).isAuthenticated()) {
    return true;
  } else {
    inject(Router).navigate([EPage.Authorization]).then();
    return false;
  }
};
