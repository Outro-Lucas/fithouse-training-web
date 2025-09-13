export type CategoryType = {
    _id: string,
    name: string,
    createdAt: Date,
    updatedAt: Date
}

export type CategoryResponse = {
    _id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
    __v: number,
}