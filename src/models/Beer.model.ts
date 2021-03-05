export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: BeerVolume;
  boil_volume: BeerVolume;
  food_pairing: string[];
  brewer_tips: string;
}

export interface BeerVolume {
  value: number;
  unit: string;
}
