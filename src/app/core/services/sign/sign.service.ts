import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  constructor(
    // private router: Router,
    // private authorizationApiService: AuthorizationApiService,
    // private destroyRef: DestroyRef,
    // private localStorageService: LocalStorageService
  ) {}

  public logIn(email: string, password: string): void {
    // if (email && password) {
    //   this.authorizationApiService
    //     .logIn({email, password})
    //     .pipe(takeUntilDestroyed(this.destroyRef))
    //     .subscribe((response: accessTokenResponse): void => {
    //       this.localStorageService.set(ELocalStorage.Token, (response.accessToken));
    //       this.router.navigate([EPage.Main]).then();
    //     });
    // }
  }

  public logOut(): void {
    // this.authorizationApiService
    //   .logOut()
    //   .pipe(takeUntilDestroyed(this.destroyRef))
    //   .subscribe((): void => {
    //     this.localStorageService.remove(ELocalStorage.Token);
    //     this.router.navigate([EPage.Authorization]).then();
    //   });
  }
}
