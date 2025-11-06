import { LoginContainer } from './../../modules/auth/container/login-container/login-container';
export interface AttractionModel {
  attractionId: number;
  name: string;
  price?: number;
  location: string;
  country?: string;
  city?: string;
  description: string;
  rating?: number;
  url?: string;
}
