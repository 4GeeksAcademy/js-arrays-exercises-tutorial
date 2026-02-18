// Your code here
function getParkingLotState(slots) {

  let state = new Object();
  state.totalSlots = 0;
  state.availableSlots = 0;
  state.occupiedSlots = 0;

  for (let row of slots) {
    for (let element of row) {
      if (element === 1 || element == 2) state.totalSlots += 1;
      if (element === 1) state.occupiedSlots += 1;
      if (element === 2) state.availableSlots += 1;
    }

  }
  return state;
}
let parkingState = [
  [1, 0, 1, 1],
  [0, 0, 0, 2],
  [1, 1, 2, 1],
  [2, 1, 1, 1]
]
console.log(getParkingLotState(parkingState))
