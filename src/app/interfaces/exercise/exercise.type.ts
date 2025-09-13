import { CategoryResponse } from "../category/category.type"

export type ExerciseCreate = {
    name: string,
    description: string,
    videoUrl: string,
    category: string
}

export type ExerciseResponse = {
    _id: string,
    name: string,
    description: string,
    videoUrl: string,
    category: CategoryResponse,
    isActive: boolean,
    createdAt: string,
    updatedAt: string,
    __v: number,
}