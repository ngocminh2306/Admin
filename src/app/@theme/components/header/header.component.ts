import { Component, Input, OnInit } from '@angular/core';

import { NbMenuService, NbSidebarService } from '@nebular/theme';
import { UserData } from '../../../@core/data/users';
import { AnalyticsService } from '../../../@core/utils';
import { LayoutService } from '../../../@core/utils';
import { NbAuthService, NbAuthJWTToken } from '@nebular/auth';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {

  @Input() position = 'normal';

  user: any;

  userMenu = [{ title: 'Profile' }, { title: 'Log out' }];

  constructor(private sidebarService: NbSidebarService,
              private authService: NbAuthService,
              private menuService: NbMenuService,
              // private userService: UserData,
              private analyticsService: AnalyticsService,
              private layoutService: LayoutService) {
                this.authService.onTokenChange()
                .subscribe((token: NbAuthJWTToken) => {
          
                  if (token.isValid()) {                  
                    this.user = token.getPayload(); // here we receive a payload from the token and assigne it to our `user` variable 
                    this.user.name = this.user['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
                  }
                });
  }

  ngOnInit() {
    // this.userService.getUsers()
    //   .subscribe((users: any) => {
    //     this.user = users.nick
    //   });
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  goToHome() {
    this.menuService.navigateHome();
  }

  startSearch() {
    this.analyticsService.trackEvent('startSearch');
  }
}
