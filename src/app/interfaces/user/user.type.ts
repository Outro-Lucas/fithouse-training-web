export enum Role {
    trainer = 'trainer',
    client = 'client',
}

export type User = {
    id: string,
    email: string,
    name: string,
    type: Role
}

export type loginBody = {
    email: string,
    password: string
}