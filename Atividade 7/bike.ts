export class Bike {
    constructor(
        public name: string,
        public type: string,
        public bodySize: number,
        public maxLoad: number,
        public rate: number,
        public description: string,
        public ratings: number,
        public imageUrls: string[],
        public Location: {
          latitude: number;
          longitude: number;
          city: string;
          state: string;
        },
        public available: boolean = true,
        public id?: string
    ) {}
  }