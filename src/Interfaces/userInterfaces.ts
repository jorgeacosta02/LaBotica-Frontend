
// Interface for save user in db
export interface IUserData {
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    address: string;
    cp: string;
    city: string;
    province: string;
    // country: string;
    password: string;
    // active: boolean;
    role: string;
}

// Interface user from db
export interface IUserDataFromDB {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    address: string;
    cp: string;
    city: string;
    province: string;
    // country: string;
    password: string;
    // active: boolean;
    role: string;
}

// Interface for register user
export interface IUserRegisterData {
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    address: string;
    cp: string;
    city: string;
    province: string;
    // country: string;
    password: string;
    // active: boolean;
    role: string;
}

// LOGIN
export interface IUserLoginData {
    email: string;
    password: string;
  }

// ApiResponse
export interface ApiResponse {
    user: IUserData;
    message: string;
}

// LocalStorage 'user'
export interface ILocalStorageUserData {
    id: string,
    firstName: string;
    lastName: string;
    dni: string;
    phone: string;
    email: string;
    active: boolean;
    role: string;
}
  