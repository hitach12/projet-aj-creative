import { IUser } from "../types";
import { User } from "./user";

export const getUsers = () => {
    const users = localStorage.getItem("users");
    return users ? (JSON.parse(users) as User[]) : [];
}

export const login = (form: {password: string, email: string}) => {
    const users = getUsers();
    if (users.length === 0) {
        return {
            status: false,
            user: null
        };
    } 

    const user = users.find((item: User) => item.email === form.email && item.password === form.password);

    if (!user) {
        return {
            status: false,
            user: null
        };
    }

    return {
        status: true,
        user
    };

}

export const verifyCodeAcces = (code: string) => code === "123456789";

export const userExists = (email: string) => getUsers().some(item => item.email === email)

export const register = (user:IUser) => {
    const users = getUsers();
    const newUser = new User(user);
    if (userExists(newUser.email)) {
       return {status: false, data: null}; 
    }
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users))
    return {status: true, data: newUser};
}