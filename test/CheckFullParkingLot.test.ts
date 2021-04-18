import ParkingLotRepositoryMemory from "../src/infra/repository/ParkingLotRepositoryMemory";
import EnterParkingLot from "../src/usecase/EnterParkingLot";
import GetParkingLot from "../src/usecase/GetParkingLot";

test("Should be full parking lot", async function () {
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
    await enterParkingLot.execute(
      "shopping",
      "MMM-0002",
      new Date("2021-04-17T10:00:00")
    );
    await enterParkingLot.execute(
      "shopping",
      "MMM-0003",
      new Date("2021-04-17T10:00:00")
    );
    await enterParkingLot.execute(
      "shopping",
      "MMM-0004",
      new Date("2021-04-17T10:00:00")
    );
    await enterParkingLot.execute(
      "shopping",
      "MMM-0005",
      new Date("2021-04-17T10:00:00")
    );
  
    const parkingLotAfterEnter = await getParkingLot.execute("shopping");
    expect(parkingLotAfterEnter.occupiedSpaces).toBe(5);
  });