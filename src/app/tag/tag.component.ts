import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/modal/tag';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit{

  @Input()
  foodPageTags?:string[];

  @Input()
  justifyContent:string='center';
  tags:Tag[]=[];

  constructor(private fs: FoodService){}

  ngOnInit(): void {
    
  }

}
