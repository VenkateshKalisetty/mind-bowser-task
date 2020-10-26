export interface IManager {
    managerId: number;
    firstName: string;
    lastName: string;
    dob: string;
    address: string;
    company: string;
    email: string;
    password: string;
}

export interface IEmployee {
    employeeId: number;
    firstName: string;
    lastName: string;
    address: string;
    dob: string;
    mobile: string;
    city: string;
}

export interface IAuth {
    email: string;
    password: string;
}
