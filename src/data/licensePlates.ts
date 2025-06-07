
import { LicensePlate } from '../types/LicensePlate';

export const licensePlates: LicensePlate[] = [
  {
    id: '1',
    plateNumber: 'TOPLESS',
    category: 'Automotive',
    description: 'Perfect for convertible owners who love the open road',
    price: 1250,
    isAvailable: true,
    tags: ['convertible', 'fun', 'automotive']
  },
  {
    id: '2',
    plateNumber: 'BBQ KING',
    category: 'Food & Dining',
    description: 'For the ultimate Texas barbecue enthusiast',
    price: 950,
    isAvailable: true,
    tags: ['bbq', 'food', 'texas', 'cooking']
  },
  {
    id: '3',
    plateNumber: 'COWBOY1',
    category: 'Texas Pride',
    description: 'Classic Texas cowboy spirit',
    price: 2100,
    isAvailable: false,
    tags: ['cowboy', 'texas', 'western', 'classic']
  },
  {
    id: '4',
    plateNumber: 'TECH CEO',
    category: 'Business',
    description: 'For the modern tech entrepreneur',
    price: 3500,
    isAvailable: true,
    tags: ['tech', 'business', 'ceo', 'modern']
  },
  {
    id: '5',
    plateNumber: 'HOWDY Y\'ALL',
    category: 'Texas Pride',
    description: 'Spread that Texas hospitality wherever you go',
    price: 1800,
    isAvailable: true,
    tags: ['howdy', 'texas', 'friendly', 'greeting']
  },
  {
    id: '6',
    plateNumber: 'OIL RICH',
    category: 'Business',
    description: 'For those who struck it big in Texas oil',
    price: 4200,
    isAvailable: false,
    tags: ['oil', 'wealth', 'texas', 'business']
  },
  {
    id: '7',
    plateNumber: 'TACO TUE',
    category: 'Food & Dining',
    description: 'Every day can be Taco Tuesday',
    price: 850,
    isAvailable: true,
    tags: ['tacos', 'food', 'tuesday', 'mexican']
  },
  {
    id: '8',
    plateNumber: 'LONE STR',
    category: 'Texas Pride',
    description: 'Representing the Lone Star State',
    price: 2800,
    isAvailable: true,
    tags: ['lone star', 'texas', 'pride', 'state']
  },
  {
    id: '9',
    plateNumber: 'RODEO PRO',
    category: 'Sports',
    description: 'For professional rodeo competitors',
    price: 1600,
    isAvailable: true,
    tags: ['rodeo', 'sports', 'professional', 'western']
  },
  {
    id: '10',
    plateNumber: 'HOT SAUCE',
    category: 'Food & Dining',
    description: 'For those who like it spicy',
    price: 720,
    isAvailable: true,
    tags: ['spicy', 'sauce', 'food', 'heat']
  },
  {
    id: '11',
    plateNumber: 'BIG TEX',
    category: 'Texas Pride',
    description: 'Everything\'s bigger in Texas',
    price: 3200,
    isAvailable: false,
    tags: ['big', 'texas', 'size', 'pride']
  },
  {
    id: '12',
    plateNumber: 'RANCH LFE',
    category: 'Lifestyle',
    description: 'Living the ranch life',
    price: 1400,
    isAvailable: true,
    tags: ['ranch', 'lifestyle', 'country', 'rural']
  }
];

export const categories = [
  'All Categories',
  'Automotive',
  'Business',
  'Food & Dining',
  'Lifestyle',
  'Sports',
  'Texas Pride'
];
