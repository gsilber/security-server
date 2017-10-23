import { Directive, Input, ElementRef, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[loggedIn]',
})
export class LoggedInDirective implements OnInit {
  @Input() loggedIn = true;

  constructor(private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef, private _userSvc: UserService) {
   }

   ngOnInit() {
    console.log(this.loggedIn);
    this._userSvc.status.subscribe(result => {
      this.viewContainer.clear();
      if (result === this.loggedIn) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    });   
  }


}
