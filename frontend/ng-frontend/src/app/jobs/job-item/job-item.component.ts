import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { PromptComponent } from 'src/app/shared/components/prompt/prompt.component';
import { UserService } from 'src/app/user/user.service';

@Component({
  selector: 'app-job-item',
  templateUrl: './job-item.component.html',
  styleUrls: ['./job-item.component.scss']
})
export class JobItemComponent implements OnInit {
  @Input() data: any;
  @Input() index: any;
  setStar = false;
  @ViewChild('promptComponent', { static: false}) promptComponent!: PromptComponent;
  constructor(private auth: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
  }
  routing() {
    console.log('item', this.data)
  }

  toggleStar() {
    this.setStar = !this.setStar;
  }

  saveToFavourites(id: string) {
    if (this.auth.isLoggedOut()) {
      alert('Need to Log in');
    }
    this.userService.addToFavourites({id : id})
    this.toggleStar();


    // check logged in status
    // this.auth.isLoggedIn

    // if false then popUp to Prompt login
    //if true then change icon to a different color
  }
}
