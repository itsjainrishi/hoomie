export type Property = {
  id: string;
  propertyName: string;
  rentPrice: number;
  images: {
    url: string;
  }[] | undefined;
  floorSpace: number;
  petsAllowed: boolean;
  numberOfBedrooms: number;
  numberOfBathrooms: number;
  numberOfGarages: number;
  numberOfFloors: number;
  city: string;
  propertyType: string;
  numberOfParkingSpaces: number
  description: {
    raw: string;
  } | undefined;
  coordinate: {
    latitude: string;
    longitude: string;
  } | undefined;
  owner: {
    name: string;
    image: {
      url: string;
    } | undefined;
  } | undefined;
}