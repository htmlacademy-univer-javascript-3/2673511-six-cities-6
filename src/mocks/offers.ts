export interface Offer {
    id: number;
    title: string;
    price: number;
    city: string;
    imageUrl: string;
    rooms: number;
    description: string;
  }

export const mockOffers: Offer[] = [
  {
    id: 1,
    title: 'Уютная студия в центре',
    price: 350,
    city: 'Амстердам',
    imageUrl: 'apartment-small-04.jpg',
    rooms: 1,
    description: 'Просторная студия в самом сердце Амстердама. Идеально подходит для путешественников, которые хотят быть в центре событий.'
  },
  {
    id: 2,
    title: 'Светлая квартира у канала',
    price: 280,
    city: 'Амстердам',
    imageUrl: 'apartment-small-03.jpg',
    rooms: 2,
    description: 'Уютная квартира с видом на живописный канал. Отличное место для романтического отдыха или деловой поездки.'
  },
  {
    id: 3,
    title: 'Стильный лофт в модном районе',
    price: 420,
    city: 'Амстердам',
    imageUrl: 'apartment-01.jpg',
    rooms: 3,
    description: 'Просторный лофт в самом модном районе города. Идеальное сочетание индустриального стиля и современного комфорта.'
  },
  {
    id: 4,
    title: 'Комфортабельная квартира для семьи',
    price: 310,
    city: 'Амстердам',
    imageUrl: 'apartment-02.jpg',
    rooms: 2,
    description: 'Удобная квартира для семейного отдыха. Расположена в тихом районе, но при этом недалеко от центра.'
  }
];
