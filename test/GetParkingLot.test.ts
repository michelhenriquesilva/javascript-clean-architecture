import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";
import GetParkingLot from "../src/usecase/GetParkingLot";

test.skip("Should get parking lot", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL();
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);
  const parkingLot = await getParkingLot.execute("shopping");
  expect(parkingLot.code).toBe("shopping");
});