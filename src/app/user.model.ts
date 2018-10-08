export class User {
    firstName:string;
    lastName:string;
    email:string;
    dod:Date;
    address:Address;
    phone :Array<Phone>;
}
export class Address{
    street1:string;
    street2:string;
    street3:string;
    country:string;
    state:string;
    zipcode:string;
}
export class Phone{
country:string;
type:string;
number:string;
}