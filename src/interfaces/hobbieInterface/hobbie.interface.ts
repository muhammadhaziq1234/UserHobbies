export interface BaseHobbieDTO {
  name: string;
  passion: string;
}

export interface HobbieDTO extends BaseHobbieDTO {
  id: string;
}
