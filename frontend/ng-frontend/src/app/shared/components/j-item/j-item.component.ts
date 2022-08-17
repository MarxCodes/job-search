import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/auth/auth.service';
import { PromptComponent } from 'src/app/shared/components/prompt/prompt.component';
import { UserService } from 'src/app/user/user.service';
@Component({
  selector: 'app-j-item',
  templateUrl: './j-item.component.html',
  styleUrls: ['./j-item.component.scss']
})
export class JItemComponent implements OnInit {
  @Input() data: any;
  @Input() index: any;
  // @Input() savedList!: [];
  setStar = false;
  savedJobs = this.userService.getFavouriteJobs()
  @ViewChild('promptComponent', { static: false}) promptComponent!: PromptComponent;
  // justSaved = this.userService.getFavouriteJobs().pipe(map(el => el.map(yo => yo._id))).subscribe(el => {
  //   if (this.data['_id'] === el) {
  //     this.toggleStar()
  //   }
  // });

  constructor(private auth: AuthService,
              private userService: UserService) { }

  ngOnInit(): void {
    // console.log(this.auth.isLoggedIn());
    // if(this.auth.isLoggedIn() === false ){
    //   this.auth.logout();
    // }
    // if(this.auth.isLoggedIn()) {
    //   this.savedJobs.subscribe(data => {
    //       data.map(i => {
    //         if (i._id === this.data._id) {
    //           this.toggleStar()
    //         }
    //       })
    //     })
    // }

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
    console.log(id)
    this.userService.addToFavourites({id : id})
    this.toggleStar();


    // check logged in status
    // this.auth.isLoggedIn

    // if false then popUp to Prompt login
    //if true then change icon to a different color
  }
}
