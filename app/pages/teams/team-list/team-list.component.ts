import { Component, OnInit } from '@angular/core';
import { Team } from '~/shared/models/team';
import { ServerService } from '~/shared/services/server.service';
import { RouterExtensions } from 'nativescript-angular/router';
import { ObservableArray } from 'data/observable-array';
import { AccountService } from '~/shared/services/account.service';
var appSettings = require('application-settings');
@Component({
  selector: 'team-list',
  moduleId: module.id,
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  public teams$: ObservableArray<Team>;

  constructor(
    private serverService: ServerService,
    private routerExtensions: RouterExtensions,
    private accounteService: AccountService
  ) {}

  ngOnInit() {
    this.teams$ = new ObservableArray<Team>();
    
    if (this.serverService.isLoggedIn()) {
      this.serverService.getTeams().subscribe(
        teams => {
          teams.forEach(team => this.teams$.push(team));
          console.log(teams);
        },
        error => {
          console.error('could not get teams', error);
        }
      );
    } else {
      this.routerExtensions.navigate(['/login'], {
        transition: {
          name: 'slideTop'
        }
      });
    }
  }

  isLoggedIn(): boolean {
    return this.serverService.isLoggedIn();
  }

  onTap(id: number) {
    this.routerExtensions.navigate(['/Members', id], {
      transition: {
        name: 'slideLeft',
        clearHistory: 'true'
      }
    });
  }

  logoutTapped() {
    if (this.serverService.isLoggedIn()) {
      this.serverService.logout();
      this.teams$ = new ObservableArray<Team>();
      this.routerExtensions.navigate(['/login'], {
        clearHistory: true,
        transition: {
          name: 'slideTop'
        }
      });
    }
  }

  tasksTapped() {
    this.routerExtensions.navigate(['/task-list'], {
      clearHistory: true,
      animated: false
    });
  }

  metricsTapped() {
    this.routerExtensions.navigate(['/metrics'], {
      clearHistory: true,
      animated: false
    });
  }
}
