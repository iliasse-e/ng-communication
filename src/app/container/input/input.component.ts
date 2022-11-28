import {Component, Input, OnInit} from '@angular/core';
import {Book} from "../types";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() public book?: Book;

  constructor() { }

  ngOnInit(): void {
  }

}
