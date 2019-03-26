import { IUser } from "./user.model";

export const USER_DATA: IUser[] = [{
    firstName: "Bill",
    lastName: "Gates",
    dob: new Date("Dec 24 '1965"),
    isWorking: true,
    income: 50000,
    company: "Microsoft Inc.",
    image: "./assets/images/bill.jpg",
    vote: 180
}, {
    firstName: "Steve",
    lastName: "jobs",
    dob: new Date("Jan 2 '1964"),
    isWorking: false,
    income: 0,
    company: "Apple Inc.",
    image: "./assets/images/steve.png",
    vote: 120
}, {
    firstName: "Tim B.",
    lastName: "Lee",
    dob: new Date("Aug 4 '1968"),
    isWorking: true,
    income: 30000,
    company: "World Wide Web",
    image: "./assets/images/tim.jpg",
    vote: 220
}]