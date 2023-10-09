import { RentRepo } from "../../src/ports/rent-repo";
import { Rent } from '../../src/Rent';

export class FakeRentRepo implements RentRepo {
  findOpenRentsFor(userEmail: string): Rent[] {
    return this.rents.filter(
      (rent) => rent.userEmail === userEmail && rent.returnDate === null
    );
  }
}