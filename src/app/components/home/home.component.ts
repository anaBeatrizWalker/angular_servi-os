import { Component, OnInit } from '@angular/core';
import { TimerService } from '../../services/timer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  //Injeção de dependência
  constructor(public timer: TimerService) {}

  ngOnInit() {}
}
