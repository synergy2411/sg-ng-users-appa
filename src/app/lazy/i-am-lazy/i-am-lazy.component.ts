import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

  constructor(public authService : AuthService) { 
    console.log("[LAZY]", this.authService.getToken());
  }

  ngOnInit() {
  }

}
