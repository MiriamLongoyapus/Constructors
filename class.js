//Create a Car class or function constructor that has the following properties:
//a. make (string): The make of the car, e.g., "Toyota".
//b. model (string): The model of the car, e.g., "Camry".
//c. year (number): The year the car was manufactured, e.g., 2020.
//d. isAvailable (boolean): Indicates if the car is currently available for rent.
//The Car class or function constructor should also have a method called
//toggleAvailability that changes the isAvailable property to its opposite value (true to
//false, false to true)
class Car{
    constructor(make,model,year,isAvailable){
        this.make=make;
        this.model=model;
        this.year=year;
        this.isAvailable=isAvailable
    }
    toggleAvailability(){
        this.isAvailable=!this.isAvailable
    }
}
let car= new Car("Nissan","Serena",2023,false);
console.log(car)

//Create a Rental class or function constructor that has the following properties:
//● car (Car object): The car that has been rented.
//● renterName (string): The name of the person who rented the car.
//● rentalStartDate (Date object): The start date of the rental period.
//● rentalEndDate (Date object): The end date of the rental period.
//The Rental class or function constructor should also have a method called
//calculateRentalDuration that returns the rental duration in days.
class Rental{
    constructor(car,renterName,rentalStartDate,rentalEndDate){
        this.car=car;
        this.renterName=renterName;
        this.rentalStartDate=rentalStartDate;
        this.rentalEndDate=rentalEndDate;
    }
    calculateRentalDuration(){
        this.renterName=!this.renterName
        console.l0g (30*60)
        
    }
}
let rental=new Rental("Car","lease","2/6/2023","2/7/2023")
console.log(rental)

//Create an instance of the Car class or function constructor for a car in the
//inventory. Then, create an instance of the Rental class or function constructor for
//a rental involving the car you created. Finally, calculate the rental duration using
//the calculateRentalDuration method
//     rentalDuration();{
//         this.renterName=!this.renterName
//         const fav_car=new Car("mazda","demio",2023,true);{
//             RenntalCar(vehicle, startDate, endDate)
//               const rental = new Rental(this, vehicle, startDate, endDate, totalCost);
//               this.rentals.push(rental);
//               return rental;
//         // console.l0g (30*60)
        
//     }
// // }
rentalCarDuration()
    let hireduration=Math.round(Math.abs(this.rentalEndDate-this.rentalStartDate))/(1000
        *60*60*24)
        console.log(hireduration)
carhire.rentalCarDuration()
let carlease=new Rental("hondafit","mazdademio",new Date('8/05/2023'),new Date('6/5/2023'))
console.log(carlease)
carlease.rentalCarDuration()



//Create a Question class with the following properties:
//● text(string): The text of the question.
//● options(array): An array containing the multiple-choice options.
//● correctAnswer(string): The correct answer to the question.
//The Question class should also have a method called checkAnswer that takes a
//user's answer as a parameter and returns true if the answer is correct and false
//otherwise.
class Question{
   constructor (text,options,correctAnswer){
    this.text=text;
    this.options=options;
    this.correctAnswer=correctAnswer;
   }
   checkAnswer(answer){
    return answer===this.correctAnswer
   }
  }
let question=new Question("what are methods of array")
console.log(questions)

