import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import ParkingLotRepositorySQL from "../src/infra/repository/ParkingLotRepositorySQL";
import EnterParkingLot from "../src/usecase/EnterParkingLot";
import GetParkingLot from "../src/usecase/GetParkingLot";

test.skip("Should enter parking lot", async function () {
  const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
  const parkingLotRepositorySQL = new ParkingLotRepositorySQL();

  const enterParkingLot = new EnterParkingLot(parkingLotRepositorySQL);
  const getParkingLot = new GetParkingLot(parkingLotRepositorySQL);

  const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
  expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);

  await enterParkingLot.execute(
    "shopping",
    "MMM-0001",
    new Date("2021-04-17T10:00:00")
  );

  const parkingLotAfterEnter = await getParkingLot.execute("shopping");
  expect(parkingLotAfterEnter.occupiedSpaces).toBe(1);
});
