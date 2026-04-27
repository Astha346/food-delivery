import { Injectable } from '@nestjs/common';

@Injectable()
export class FoodsService {
  private foods = [
    {
      id: 1,
      name: 'Margherita Pizza',
      price: 500,
      category: 'pizza',
      type: 'veg',
      image: '/images/margherita.jpg'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      price: 650,
      category: 'pizza',
      type: 'non-veg',
      image: '/images/pizza3.avif'
    },
    {
      id: 3,
      name: 'Cheese Burst Pizza',
      price: 700,
      category: 'pizza',
      type: 'veg',
      image: '/images/pizza2.jpg'
    },
    {
      id: 4,
      name: 'BBQ Chicken Pizza',
      price: 750,
      category: 'pizza',
      type: 'non-veg',
      image: '/images/pizza4.avif'
    },
    {
      id: 5,
      name: 'Veg Burger',
      price: 220,
      category: 'burger',
      type: 'veg',
      image: '/images/burger1.avif'
    },
    {
      id: 6,
      name: 'Chicken Burger',
      price: 300,
      category: 'burger',
      type: 'non-veg',
      image: '/images/burger2.avif'
    },
    {
      id: 7,
      name: 'Cheese Burger',
      price: 280,
      category: 'burger',
      type: 'veg',
      image: '/images/burger3.avif'
    },
    {
      id: 8,
      name: 'Veg Sandwich',
      price: 180,
      category: 'breakfast',
      type: 'veg',
      image: '/images/sandwitch.avif'
    },
    {
      id: 9,
      name: 'Egg Omelette',
      price: 150,
      category: 'breakfast',
      type: 'non-veg',
      image: '/images/omelette.avif'
    },
    {
      id: 10,
      name: 'Pancakes',
      price: 220,
      category: 'breakfast',
      type: 'veg',
      image: '/images/pancake.avif'
    },
    {
      id: 11,
      name: 'Tomato Soup',
      price: 120,
      category: 'soups',
      type: 'veg',
      image: '/images/soup1.avif'
    },
    {
      id: 12,
      name: 'Chicken Soup',
      price: 180,
      category: 'soups',
      type: 'non-veg',
      image: '/images/soup1.avif'
    },
    {
      id: 13,
      name: 'Veg Alfredo Pasta',
      price: 280,
      category: 'pasta',
      type: 'veg',
      image: '/images/paste3.avif'
    },
    {
      id: 14,
      name: 'Chicken Pasta',
      price: 320,
      category: 'pasta',
      type: 'non-veg',
      image: '/images/paste2.avif'
    },
    {
      id: 15,
      name: 'Veg Thali',
      price: 350,
      category: 'maincourse',
      type: 'veg',
      image: '/images/veg.avif'
    },
    {
      id: 16,
      name: 'Chicken Curry',
      price: 420,
      category: 'maincourse',
      type: 'non-veg',
      image: '/images/chickenrice.avif'
    }
  ];

  findAll(category?: string, search?: string) {
    let result = this.foods;

    // FILTER BY CATEGORY
    if (category && category !== 'all') {
      result = result.filter(food => food.category === category);
    }

    // FILTER BY SEARCH
    if (search && search.trim() !== '') {
      result = result.filter(food =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    return result;
  }
}