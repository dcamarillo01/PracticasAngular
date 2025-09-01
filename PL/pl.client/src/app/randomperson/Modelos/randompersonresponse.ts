import {RandomPerson} from './randomperson';

export interface RandomPersonResponse {
  results: RandomPerson[];
  info: {
    seed: string;
    results: number;
    page: number;
    version: string;
  };
}