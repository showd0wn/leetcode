// topics = ["设计"]

/**
 * time O(1), space O(1)
 */
class ParkingSystem {
  park: [number, number, number];
  constructor(big: number, medium: number, small: number) {
    // 剩余车位
    this.park = [big, medium, small];
  }

  addCar(carType: number): boolean {
    if (this.park[carType - 1] == 0) {
      return false;
    }
    this.park[carType - 1] -= 1;
    return true;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
