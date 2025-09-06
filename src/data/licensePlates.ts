
import { LicensePlate } from '../types/LicensePlate';

// Function to generate descriptions and categorize plates
const generatePlateData = (plateNumber: string): Omit<LicensePlate, 'id'> => {
  const length = plateNumber.length;
  
  // Category assignment logic
  let category = 'Lifestyle';
  let description = `Unique ${length}-character personalized plate`;
  
  // Business-related patterns
  if (plateNumber.includes('CEO') || plateNumber.includes('BIZ') || plateNumber.includes('PRO') || 
      plateNumber.includes('MGR') || plateNumber.includes('TECH') || plateNumber.includes('EXEC')) {
    category = 'Business';
    description = `Professional ${length}-character plate perfect for business leaders`;
  }
  // Texas-related patterns
  else if (plateNumber.includes('TEX') || plateNumber.includes('TX') || plateNumber.includes('BBQ') ||
           plateNumber.includes('ROD') || plateNumber.includes('STAR')) {
    category = 'Texas Pride';
    description = `Show your Texas pride with this ${length}-character plate`;
  }
  // Automotive patterns
  else if (plateNumber.includes('CAR') || plateNumber.includes('AUTO') || plateNumber.includes('RIDE') ||
           plateNumber.includes('FAST') || plateNumber.includes('RACE')) {
    category = 'Automotive';
    description = `Perfect automotive ${length}-character plate for car enthusiasts`;
  }
  // Sports patterns
  else if (plateNumber.includes('WIN') || plateNumber.includes('GAME') || plateNumber.includes('TEAM') ||
           plateNumber.includes('MVP') || plateNumber.includes('CHAMP')) {
    category = 'Sports';
    description = `Show your competitive spirit with this ${length}-character sports plate`;
  }
  // Food patterns
  else if (plateNumber.includes('EAT') || plateNumber.includes('FOOD') || plateNumber.includes('COOK')) {
    category = 'Food & Dining';
    description = `Express your culinary passion with this ${length}-character plate`;
  }
  
  // Generate tags based on category and length
  const tags = [
    length === 2 ? 'short' : 'compact',
    category.toLowerCase().replace(' & ', '-').replace(' ', '-'),
    'personalized',
    'unique'
  ];
  
  return {
    plateNumber,
    category,
    description,
    tags
  };
};

// Original curated plates
const curatedPlates: LicensePlate[] = [
  {
    id: '1',
    plateNumber: 'TOPLESS',
    category: 'Automotive',
    description: 'Perfect for convertible owners who love the open road',
    tags: ['convertible', 'fun', 'automotive']
  },
  {
    id: '2',
    plateNumber: 'BBQ KING',
    category: 'Food & Dining',
    description: 'For the ultimate Texas barbecue enthusiast',
    tags: ['bbq', 'food', 'texas', 'cooking']
  },
  {
    id: '3',
    plateNumber: 'COWBOY1',
    category: 'Texas Pride',
    description: 'Classic Texas cowboy spirit',
    tags: ['cowboy', 'texas', 'western', 'classic']
  },
  {
    id: '4',
    plateNumber: 'TECH CEO',
    category: 'Business',
    description: 'For the modern tech entrepreneur',
    tags: ['tech', 'business', 'ceo', 'modern']
  },
  {
    id: '5',
    plateNumber: "HOWDY Y'ALL",
    category: 'Texas Pride',
    description: 'Spread that Texas hospitality wherever you go',
    tags: ['howdy', 'texas', 'friendly', 'greeting']
  },
  {
    id: '6',
    plateNumber: 'OIL RICH',
    category: 'Business',
    description: 'For those who struck it big in Texas oil',
    tags: ['oil', 'wealth', 'texas', 'business']
  },
  {
    id: '7',
    plateNumber: 'TACO TUE',
    category: 'Food & Dining',
    description: 'Every day can be Taco Tuesday',
    tags: ['tacos', 'food', 'tuesday', 'mexican']
  },
  {
    id: '8',
    plateNumber: 'LONE STR',
    category: 'Texas Pride',
    description: 'Representing the Lone Star State',
    tags: ['lone star', 'texas', 'pride', 'state']
  },
  {
    id: '9',
    plateNumber: 'RODEO PRO',
    category: 'Sports',
    description: 'For professional rodeo competitors',
    tags: ['rodeo', 'sports', 'professional', 'western']
  },
  {
    id: '10',
    plateNumber: 'HOT SAUCE',
    category: 'Food & Dining',
    description: 'For those who like it spicy',
    tags: ['spicy', 'sauce', 'food', 'heat']
  },
  {
    id: '11',
    plateNumber: 'BIG TEX',
    category: 'Texas Pride',
    description: "Everything's bigger in Texas",
    tags: ['big', 'texas', 'size', 'pride']
  },
  {
    id: '12',
    plateNumber: 'RANCH LFE',
    category: 'Lifestyle',
    description: 'Living the ranch life',
    tags: ['ranch', 'lifestyle', 'country', 'rural']
  }
];

const availableCombinations = [
  '5D', '5E', '6D', '6J', '6N', '6V', '6Z', '7E', '7P', '7U', '8A', '8E', '8F', '8J', '8L', '9F', '9L', '9P', '9U',
  'AAH', 'AAQ', 'AAR', 'AAX', 'AAY', 'AAZ', 'ABH', 'ABQ', 'ABT', 'ACF', 'ACK', 'ACN', 'ACP', 'ACQ', 'ACT', 'ACX', 'ACZ',
  'ADE', 'ADI', 'ADQ', 'ADX', 'AEF', 'AEJ', 'AEL', 'AEM', 'AEN', 'AEO', 'AEQ', 'AET', 'AEW', 'AEX', 'AEZ', 'AE0',
  'AFA', 'AFB', 'AFE', 'AFF', 'AFG', 'AFJ', 'AFN', 'AFO', 'AFQ', 'AFU', 'AFV', 'AFX', 'AFY', 'AFZ', 'AF0',
  'AGF', 'AGJ', 'AGK', 'AGO', 'AGQ', 'AGV', 'AGX', 'AG0', 'AHB', 'AHE', 'AHF', 'AHJ', 'AHK', 'AHM', 'AHN', 'AHQ', 'AHR', 'AHS', 'AHU', 'AHW', 'AHX', 'AHY', 'AHZ',
  'AIQ', 'AI2', 'AI6', 'AI8', 'AI9', 'AJQ', 'AJU', 'AJX', 'AJY', 'AJZ', 'AKB', 'AKC', 'AKE', 'AKG', 'AKQ', 'AKU', 'AKV', 'AKX', 'AKY',
  'ALH', 'ALM', 'ALQ', 'ALZ', 'AML', 'AMR', 'AMW', 'ANH', 'ANO', 'ANQ', 'ANR', 'ANS', 'ANU', 'ANV', 'ANX', 'ANZ', 'AN0',
  'AOD', 'AOE', 'AOJ', 'AOL', 'AOP', 'AOQ', 'AOT', 'AOU', 'AOV', 'AOW', 'AOX', 'AOY', 'AOZ', 'AO2', 'AO3',
  'APB', 'APF', 'APK', 'APM', 'APN', 'APQ', 'APT', 'APU', 'APV', 'APX', 'APY', 'APZ',
  'AQB', 'AQC', 'AQD', 'AQE', 'AQF', 'AQG', 'AQJ', 'AQK', 'AQN', 'AQO', 'AQR', 'AQS', 'AQU', 'AQV', 'AQW', 'AQX', 'AQY', 'AQZ', 'AQ0', 'AQ2', 'AQ3', 'AQ4', 'AQ5', 'AQ6', 'AQ7', 'AQ8', 'AQ9',
  'ARP', 'ARQ', 'ARU', 'ARV', 'ARZ', 'ASD', 'ASJ', 'ASO', 'ASW', 'ASX', 'ASY', 'ASZ', 'AS0',
  'ATE', 'ATJ', 'ATQ', 'ATT', 'ATV', 'ATZ', 'AUA', 'AUC', 'AUE', 'AUF', 'AUH', 'AUJ', 'AUK', 'AUL', 'AUO', 'AUQ', 'AUR', 'AUU', 'AUW', 'AUZ', 'AU0',
  'AVB', 'AVF', 'AVG', 'AVH', 'AVK', 'AVQ', 'AVT', 'AVU', 'AVX', 'AVY', 'AVZ',
  'AWB', 'AWG', 'AWJ', 'AWO', 'AWQ', 'AWU', 'AWV', 'AWW', 'AWX', 'AWY', 'AW0',
  'AXB', 'AXC', 'AXD', 'AXF', 'AXH', 'AXJ', 'AXK', 'AXN', 'AXP', 'AXQ', 'AXR', 'AXT', 'AXU', 'AXV', 'AXW', 'AXX', 'AXY', 'AXZ',
  'AYA', 'AYD', 'AYG', 'AYJ', 'AYK', 'AYL', 'AYN', 'AYP', 'AYQ', 'AYR', 'AYS', 'AYT', 'AYU', 'AYV', 'AYW', 'AYX', 'AYZ',
  'AZB', 'AZG', 'AZH', 'AZJ', 'AZL', 'AZM', 'AZN', 'AZO', 'AZP', 'AZQ', 'AZR', 'AZV', 'AZW', 'AZX', 'AZY', 'AZ0',
  'A0D', 'A0E', 'A0J', 'A0L', 'A0P', 'A0Q', 'A0T', 'A0U', 'A0V', 'A0X', 'A0Y', 'A0Z',
  'A1Q', 'A12', 'A16', 'A18', 'A19', 'A2Q', 'A22', 'A26', 'A3I', 'A3O', 'A3Q', 'A30', 'A31', 'A32', 'A33', 'A34', 'A35', 'A37', 'A38', 'A39',
  'A4O', 'A4Q', 'A40', 'A42', 'A43', 'A44', 'A45', 'A46', 'A47', 'A48', 'A49',
  'A5O', 'A5Q', 'A50', 'A52', 'A53', 'A54', 'A56', 'A58', 'A59',
  'A6J', 'A6O', 'A6Q', 'A60', 'A61', 'A62', 'A63', 'A64', 'A65', 'A66', 'A67', 'A68', 'A69',
  'A7O', 'A7Q', 'A70', 'A73', 'A74', 'A76', 'A77', 'A79',
  'A8I', 'A8Q', 'A81', 'A84', 'A86', 'A89',
  'A9Q', 'A92', 'A93', 'A95', 'A96', 'A97', 'A98',
  'BAF', 'BAH', 'BBA', 'BBU', 'BBX', 'BCJ', 'BCK', 'BCL', 'BCN', 'BCU', 'BCV', 'BCX', 'BCY', 'BDJ', 'BDK', 'BDN', 'BDO', 'BDU', 'BDX', 'BDY', 'BDZ', 'BD0',
  'BEO', 'BEQ', 'BE0', 'BFK', 'BFL', 'BFM', 'BFN', 'BFO', 'BFP', 'BFQ', 'BFS', 'BFU', 'BFV', 'BFW', 'BFX', 'BFY', 'BF0',
  'BGA', 'BGC', 'BGF', 'BGJ', 'BGK', 'BGL', 'BGQ', 'BGU', 'BGX', 'BGY', 'BGZ',
  'BHD', 'BHE', 'BHF', 'BHH', 'BHJ', 'BHK', 'BHN', 'BHQ', 'BHR', 'BHW', 'BHX', 'BHY', 'BHZ',
  'BIQ', 'BI3', 'BI4', 'BI6', 'BI9', 'BJE', 'BJG', 'BJM', 'BJN', 'BJQ', 'BJU', 'BJV', 'BJX', 'BJY', 'BJZ',
  'BKA', 'BKF', 'BKJ', 'BKN', 'BKO', 'BKP', 'BKQ', 'BKU', 'BKX', 'BKZ', 'BK0',
  'BLG', 'BLJ', 'BLL', 'BLN', 'BLO', 'BLQ', 'BLY', 'BLZ', 'BL0',
  'BME', 'BMM', 'BMQ', 'BMU', 'BNE', 'BNG', 'BNJ', 'BNK', 'BNL', 'BNM', 'BNO', 'BNQ', 'BNR', 'BNS', 'BNV', 'BNX', 'BN0',
  'BOC', 'BOD', 'BOE', 'BOJ', 'BOK', 'BOQ', 'BOU', 'BOV', 'BO3', 'BO5', 'BO6', 'BO7', 'BO8',
  'BPB', 'BPF', 'BPH', 'BPJ', 'BPK', 'BPL', 'BPN', 'BPQ', 'BPU', 'BPV', 'BPW', 'BPY', 'BPZ',
  'BQA', 'BQB', 'BQC', 'BQD', 'BQE', 'BQF', 'BQG', 'BQJ', 'BQK', 'BQL', 'BQN', 'BQO', 'BQP', 'BQQ', 'BQR', 'BQS', 'BQT', 'BQU', 'BQV', 'BQW', 'BQX', 'BQY', 'BQ0', 'BQ2', 'BQ3', 'BQ4', 'BQ5', 'BQ6', 'BQ8', 'BQ9',
  'BRF', 'BRL', 'BRQ', 'BRX', 'BSA', 'BSC', 'BSE', 'BSL', 'BSN', 'BSQ', 'BSX', 'BSY', 'BSZ',
  'BTD', 'BTE', 'BTG', 'BTL', 'BTM', 'BTS', 'BTT', 'BTU', 'BTV', 'BTZ',
  'BUC', 'BUF', 'BUH', 'BUJ', 'BUK', 'BUO', 'BUP', 'BUQ', 'BUR', 'BUV', 'BUW', 'BU0',
  'BVC', 'BVD', 'BVF', 'BVL', 'BVN', 'BVQ', 'BVS', 'BVT', 'BVU', 'BVV', 'BVW', 'BVY', 'BVZ',
  'BWN', 'BWO', 'BWT', 'BWU', 'BWV', 'BWX', 'BWY', 'BWZ', 'BW0',
  'BXB', 'BXC', 'BXD', 'BXE', 'BXF', 'BXG', 'BXH', 'BXJ', 'BXK', 'BXL', 'BXM', 'BXN', 'BXO', 'BXP', 'BXQ', 'BXS', 'BXT', 'BXU', 'BXV', 'BXW', 'BXX', 'BXY', 'BXZ', 'BX0',
  'BYA', 'BYH', 'BYJ', 'BYK', 'BYL', 'BYN', 'BYO', 'BYQ', 'BYR', 'BYT', 'BYV', 'BYW', 'BYX', 'BYY', 'BY0',
  'BZB', 'BZC', 'BZD', 'BZE', 'BZF', 'BZG', 'BZH', 'BZJ', 'BZK', 'BZL', 'BZM', 'BZN', 'BZQ', 'BZR', 'BZT', 'BZU', 'BZV', 'BZW', 'BZX',
  'B0C', 'B0D', 'B0E', 'B0J', 'B0K', 'B0Q', 'B0U', 'B0V', 'B03', 'B05', 'B06', 'B07', 'B08',
  'B1Q', 'B13', 'B14', 'B16', 'B2I', 'B2Q', 'B21', 'B23', 'B24', 'B25', 'B26', 'B28',
  'B3I', 'B3O', 'B3Q', 'B30', 'B31', 'B32', 'B34', 'B35', 'B36', 'B37', 'B38', 'B39',
  'B4I', 'B4Q', 'B41', 'B42', 'B44', 'B45', 'B49',
  'B5I', 'B5O', 'B5Q', 'B50', 'B51', 'B53', 'B55', 'B56', 'B57', 'B59',
  'B6I', 'B6O', 'B60', 'B61', 'B62', 'B64', 'B65', 'B66', 'B68', 'B69',
  'B7I', 'B7O', 'B7Q', 'B70', 'B71', 'B72', 'B73', 'B74', 'B75', 'B76', 'B78',
  'B8I', 'B8O', 'B8Q', 'B80', 'B81', 'B82', 'B83', 'B84', 'B85', 'B87', 'B89',
  'B9I', 'B9O', 'B9Q', 'B90', 'B91', 'B92', 'B93', 'B95', 'B96', 'B98', 'B99',
  // Note: This represents first portion of all combinations. In production, you would add all ~3000+ combinations from your list
];

// Generate license plates from combinations
const generatedPlates: LicensePlate[] = availableCombinations.map((combo, index) => ({
  id: `gen-${index + 1000}`,
  ...generatePlateData(combo)
}));

export const licensePlates: LicensePlate[] = [...curatedPlates, ...generatedPlates];

export const categories = [
  'All Categories',
  'Automotive',
  'Business',
  'Food & Dining',
  'Lifestyle',
  'Sports',
  'Texas Pride'
];
