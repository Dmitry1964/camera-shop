export const BACKEND_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

export const TIMEOUT = 5000;

export enum FetchStatus {
  Idle = 'idle',
  Pending = 'loading',
  Fulfilled = 'succes',
  Rejected = 'error'
}

export enum ApiActions {
  DataFetchCameras = 'data/fetchCameras',
  DataFetchPromo = 'data/fetchPromo',
}
