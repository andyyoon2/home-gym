// 2023-04-24
class ShoppingMall {
  parkingLots: ParkingLot[];
}

class ParkingLot {
  name: string;
  location: string;
  floors: Floor[];
  rate: number;

  enter(time: Date) {}

  exit(time: Date) {}

  getNumberOfEmptySpaces(): number {}

  getRate(): number {}
}

class Floor {
  name: string;
  level: number;
  spaces: Space[];
}

class Space {
  isEmpty: boolean;
  size: string; // normal, compact, motorcycle
  type: string; // normal, handicap

  park() {}

  depart() {}
}
