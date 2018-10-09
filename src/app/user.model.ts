export class User  {
    firstName : string;
    lastName : string;
    dob : Date;
    address : Address;
    phone :Array<Phone>;
}
export class Address {
    street1 : string;
    street2 : string;
    street3 : string;
    street4 : string;
}
export class Phone{
country :string;
type:string;
number:number;
}