import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/modal/food';
import { Tag } from 'src/app/shared/modal/tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 20 },
      { name: 'Breakfast', count: 10 },
      { name: 'Dinner', count: 30 },
      { name: 'Lunch', count: 5 },
      { name: 'Food', count: 10 },
      { name: 'Lunch', count: 10 },
      { name: 'Food', count: 10 },
      { name: 'Food', count: 10 },
    ];
  }

  getFoodByTag(tag: string): Foods[] {

    return tag == 'All' ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));

    // if(tag=='All')
    // return this.getAll();
    // else
    // return this.getAll().filter(food=> food.tags?.includes(tag));
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        price: 30,
        name: 'Tea',
        favorite: false,
        star: 5,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-6.jpg',
        cookTime: '10-15 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 2,
        price: 30,
        name: 'Samosa',
        favorite: false,
        star: 3.4,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-5.jpg',
        cookTime: '10-15 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 3,
        price: 10,
        name: 'Aloo Bonda',
        favorite: true,
        star: 5,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-1.jpg',
        cookTime: '10-80 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 4,
        price: 40,
        name: 'Burger',
        favorite: false,
        star: 2,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-7.jpg',
        cookTime: '10-15 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 5,
        price: 30,
        name: 'Momos',
        favorite: true,
        star: 5,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-2.jpg',
        cookTime: '10-15 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 6,
        price: 20,
        name: 'Kachori',
        favorite: true,
        star: 5,
        tags: ['Food', 'Breakfast'],
        imageUrl: '/assets/food-4.jpg',
        cookTime: '10-30 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 7,
        price: 30,
        name: 'Fries',
        favorite: false,
        star: 5,
        tags: ['Dinner', 'Breakfast'],
        imageUrl: '/assets/food-3.jpg',
        cookTime: '5-15 min',
        origins: ['Indian', 'South Indian']


      },
      {
        id: 8,
        price: 40,
        name: 'Momos',
        favorite: true,
        star: 3,
        tags: ['Food', 'Lunch'],
        imageUrl: '/assets/food-2.jpg',
        cookTime: '10-30 min',
        origins: ['Indian', 'South Indian']


      },

    ];
  }

}
