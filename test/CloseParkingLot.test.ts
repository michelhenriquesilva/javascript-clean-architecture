import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import EnterParkingLot from "../src/usecase/EnterParkingLot";
import GetParkingLot from "../src/usecase/GetParkingLot";


test.skip("Should be closed parking lot", async function () {
    const parkingLotRepositoryMemory = new ParkingLotRepositoryMemory();
    const enterParkingLot = new EnterParkingLot(parkingLotRepositoryMemory);
    const getParkingLot = new GetParkingLot(parkingLotRepositoryMemory);
  
    const parkingLotBeforeEnter = await getParkingLot.execute("shopping");
    expect(parkingLotBeforeEnter.occupiedSpaces).toBe(0);
  
    await enterParkingLot.execute(
      "shopping",
      "MMM-0001",
      new Date("2021-04-17T10:00:00")
    );
  
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
  });