import { Component, OnInit } from '@angular/core';
import { GetUserDetailsService } from '../services/get-user-details.service';

@Component({
  selector: 'app-to-route',
  templateUrl: './to-route.component.html',
  styleUrls: ['./to-route.component.scss']
})
export class ToRouteComponent implements OnInit {

  constructor(private getUserService: GetUserDetailsService) { }

  ngOnInit(): void {
    this.getUserService.getDetails().subscribe(
      data => console.log('data-> ', data)
    );
  }

}
