import ParkedCar from "../core/entity/ParkedCar";
import ParkingLotRepository from "../core/repository/ParkingLotRepository";

export default class EnterParkingLot {
  parkingLotRespository: ParkingLotRepository;

  constructor(parkingLotRepositoty: ParkingLotRepository) {
    this.parkingLotRespository = parkingLotRepositoty;
  }

  async execute(code: string, plate: string, date: Date) {
    const parkingLot = await this.parkingLotRespository.getParkingLot(code);
    const parkedCar = new ParkedCar(code, plate, date);

    if (!parkingLot.isOpen(parkedCar.date))
      throw new Error("The parking lot is closed");
    if (parkingLot.isFull()) throw new Error("The parking lot is full");

    await this.parkingLotRespository.saveParkedCar(
      parkedCar.code,
      parkedCar.plate,
      parkedCar.date
    );
    return parkingLot;
  }
}
