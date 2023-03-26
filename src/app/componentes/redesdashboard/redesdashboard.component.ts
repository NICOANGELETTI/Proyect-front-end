import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-redesdashboard',
  templateUrl: './redesdashboard.component.html',
  styleUrls: ['./redesdashboard.component.css']
})
export class RedesdashboardComponent implements OnInit {

  constructor(private tokenService:TokenService) { }

  ngOnInit(): void {
  }
  onLogOut():void{
    this.tokenService.logOut();
    window.location.reload();
  }
}
