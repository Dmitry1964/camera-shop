export interface ProductTypes {
    id: number;
    name: string;
    vendorCode: string;
    type: ProductType;
    category: ProductCategory;
    description: string;
    level: ProductLevel;
    price: number;
    rating: number;
    reviewCount: number;
    previewImg: string;
    previewImg2x: string;
    previewImgWebp: string;
    previewImgWebp2x: string;
}

export enum ProductType {
  collectible = 'Коллекционная',
  instatn = 'Моментальная',
  digital = 'Цифровая',
  analog = 'Пленочная',
  none = ''
}

export enum ProductCategory {
  video = 'Видеокамера',
  photo = 'Фотоаппарат',
  none = '',
}

export enum ProductLevel {
  soft = 'Нулевой',
  middle = 'Любительский',
  hard = 'Профессиональный',
  none = ''
}

export interface PromoProduct {
  id: number;
  name: string;
  previewImg: string;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
}

// export type ProductsList = ProductType[];
