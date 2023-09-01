import { Bike } from "./bike";
import { Rent } from "./rent";
import { User } from "./user";

export class App {
    users: User[] = [];
    bikes: Bike[] = [];
    rents: Rent[] = [];

    findUser(email: string): User {
        return this.users.find(user => user.email === email);
    }

    registerUser(user: User): void {
        for (const rUser of this.users) {
            if (rUser.email === user.email) {
                throw new Error('Duplicate user.');
            }
        }
        this.users.push(user);
    }

    registerBike(bike: Bike): void{
        bike.id = crypto.randomUUID();
        this.bikes.push(bike);
    }

    removeUser(user: User): void{
        for(const rUser of this.users){
            if(!rUser.email){
                throw new Error('User not found');
        }
        const index = this.users.findIndex(u =>u.email === user.email);
        this.bikes.splice(index, 1);
        }
    }

    rrentBike(bikeId: string, userEmail: string, startDate: Date, endDate: Date): void {
        // Encontra a bicicleta pelo ID.
        const bike = this.bikes.find(b => b.id === bikeId);
    
        if (!bike) {
            throw new Error('Bike not found.');
        }
    
        // Encontra o usuário pelo email.
        const user = this.findUser(userEmail);
    
        if (!user) {
            throw new Error('User not found.');
        }
    
        // Verifica se as datas de aluguel são válidas.
        if (startDate >= endDate || startDate < new Date()) {
            throw new Error('Invalid rental dates.');
        }
    
        // Verifica se a bicicleta está disponível para alugar.
        if (!Rent.canRent(this.rents, startDate, endDate)) {
            throw new Error('Bike is not available for the selected dates.');
        }
    
        // Cria um novo aluguel.
        const newRent = Rent.create(this.rents, bike, user, startDate, endDate);
    
        // Adiciona o aluguel à lista de aluguéis.
        this.rents.push(newRent);
    }
    
    returnBike(rent: Rent, returnDate: Date): void {
        // Verifica se o aluguel existe na lista de aluguéis.
        const rentIndex = this.rents.findIndex(r => r === rent);
    
        if (rentIndex === -1) {
            throw new Error('Rent not found.');
        }
    
        // Define a data de retorno no aluguel.
        this.rents[rentIndex].dateReturned = returnDate;
    }
}
