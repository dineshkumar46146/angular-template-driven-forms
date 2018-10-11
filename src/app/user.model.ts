export class User {
    firstName: string;
    lastName: string;
    email: string;
    dob: Date;
    address: Address;
    phone: Array<Phone>;
  }
  
  export class Phone {
    country: string;
    type: string;
    number: string;
  }
  
  export class Address {
    street1: string;
    street2: string;
    street3: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  }
  