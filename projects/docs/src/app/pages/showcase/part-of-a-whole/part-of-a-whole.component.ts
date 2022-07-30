import { Component, OnInit } from '@angular/core';
import {
  PartOfAWholeTypes
} from "../../../../../../lib/src/lib/components/part-of-a-whole/interface/part-of-a-whole.interface";

@Component({
  selector: 'app-part-of-a-whole',
  templateUrl: './part-of-a-whole.component.html',
  styleUrls: ['./part-of-a-whole.component.scss']
})
export class PartOfAWholeComponent implements OnInit {

  constructor() { }

  public type = PartOfAWholeTypes;

  ngOnInit(): void {
  }

}
