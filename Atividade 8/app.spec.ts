import sinon from "sinon"
import { App } from "./app"
import { Bike } from "./bike"
import { User } from "./user"
import { Location } from "./location"
import { BikeNotFoundError } from "./errors/bike-not-found-error"
import { UnavailableBikeError } from "./errors/unavailable-bike-error"
import { UserNotFoundError } from "./errors/user-not-found-error"

describe('App', () => {
    it('should correctly calculate the rent amount', async () => {
        const app = new App()
        const user = new User('Jose', 'jose@mail.com', '1234')
        await app.registerUser(user)
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        const clock = sinon.useFakeTimers();
        app.rentBike(bike.id, user.email)
        const hour = 1000 * 60 * 60
        clock.tick(2 * hour)
        const rentAmount = app.returnBike(bike.id, user.email)
        expect(rentAmount).toEqual(200.0)
    })

    it('should be able to move a bike to a specific location', () => {
        const app = new App()
        const bike = new Bike('caloi mountainbike', 'mountain bike',
            1234, 1234, 100.0, 'My bike', 5, [])
        app.registerBike(bike)
        const newYork = new Location(40.753056, -73.983056)
        app.moveBikeTo(bike.id, newYork)
        expect(bike.location.latitude).toEqual(newYork.latitude)
        expect(bike.location.longitude).toEqual(newYork.longitude)
    })

    it('should throw an exception when trying to move an unregistered bike', () => {
        const app = new App()
        const newYork = new Location(40.753056, -73.983056)
        expect(() => {
            app.moveBikeTo('fake-id', newYork)
        }).toThrow(BikeNotFoundError)
    })

    it('should throw an exception when trying to find an unregistered user', () => {
      const app= new App();
      const user= new User('Jose', 'jose@mail.com', '1234')
      app.registerUser(user)
      const located = app.findUser('jose@mail.com')
      expect(located).toEqual(user.email)
  })

    it('must throw an exception when registering a user', () => {
      const app = new App()
      const user= new User('Jose', 'jose@mail.com', '1234')
      app.registerUser(user)
      const located = app.findUser('jose@mail.com')
      expect(located).toEqual(user.email)
  })

    it('must throw an exception when registering a bike', () => {
      const app = new App()
      const bike = new Bike('caloi mountainbike', 'mountain bike',
      1234, 1234, 100.0, 'My bike', 5, [])
      app.registerBike(bike)
      const located = this.bikes.find(bike => bike.id === bike)
      expect(located).toEqual(bike.id)
    })

    it('should correctly authenticate user', async () => {
        const user = new User('jose', 'jose@mail.com', '1234')
        const app = new App()
        app.registerUser(user)
        expect(app.authenticate('jose@mail.com', '1234'))
    })
})