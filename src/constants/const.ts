export enum TypeProduct {
  NoType = '',
  Collectible = 'Коллекционная',
  Instant = 'Моментальная',
  Digital = 'Цмфровая',
  Analog = 'Пленочная',
}

export enum CategoryProduct {
  NoCategory = '',
  Camcorder = 'Видеокамера',
  PhotoCamera = 'Фотокамера',
}

export enum LevelProduct {
  NoLevel = '',
  Zero = 'Нулевой',
  Amateur = 'Любительский',
  Professional = 'Профессиональный',
}

export const ActionsNames = {
  LoadProductList: 'productsList/load',
  LoadSimilarProductList: 'cimilarProductsList/load',
  LoadPromoOffersList: 'promoOffersList/load',
  LoadProductCard: 'productCard/load',
  LoadReviewsList: 'reviewsList/load',
  CheckProductListStatus: 'productListStatus/check',
  CheckSimilarListStatus: 'similarListStatus/check',
  SelectedProductBasket: 'productBasket/selected',
  AddProductBasket: 'productBasket/add',
  AddReview: 'review/add',
} as const;

export enum PageRoute {
  Catalog = '/',
  Product= '/cameras',
}

export enum RequestRoute {
  Cameras = '/cameras',
  Similar = '/similar',
  Promo = '/promo',
  Reviews = '/reviews',
  Coupons = '/coupons',
}

export enum RequestStatus {
  Pending = 'pending',
  Idle = 'idle',
  Success = 'success',
  Reject = 'error',
}

export const StarsColor = {
  Yellow: 'yellow',
  Gray: 'gray',
} as const;

export enum PaginationButtons {
  Next = 'Дальше',
  Prev = 'Назад',
}

export const BACKEND_URL = 'https://camera-shop.accelerator.pages.academy';

export const REQUEST_TIMEOUT = 3000;

export const magicNumbers = {
  fiveStars: 5,
  cardsOnPage: 9,
  paginationItemsOnPage: 3,
  firstPage: 1,
  step: 3,
  showReviewStep: 3,
};

export const ratingStars = [
  {
    id: 'star-5',
    title: 'Отлично',
    value: '5'
  },

  {
    id: 'star-4',
    title: 'Хорошо',
    value: '4'
  },

  {
    id: 'star-3',
    title: 'Нормально',
    value: '3'
  },

  {
    id: 'star-2',
    title: 'Плохо',
    value: '2'
  },

  {
    id: 'star-1',
    title: 'Ужасно',
    value: '1'
  },
];

export const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
