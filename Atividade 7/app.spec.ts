import { App } from './app';
import { Bike } from './bike';

describe('App', () => {
  let app: App;
  let bike: Bike;

  beforeEach(() => {
    app = new App();
    bike = new Bike('caloi mountainbike', 'mountain bike',
    1234, 1234, 100.0, 'My bike', 0, [],{
        latitude: -23.1639329,
        longitude: -45.7932071,
        city: 'Jandira',
        state: 'São Paulo',
    });
  });

  it('deve lançar uma exceção ao tentar mover uma bicicleta não registrada', () => {
    expect(() => app.checkBikeExists(bike.id)).toThrowError('Bike not found.');
  });

});