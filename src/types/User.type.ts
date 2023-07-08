export default interface User{
    id: number,
    name: string, 
    username: string,
    email: string,
    password: string,
    token: string,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}