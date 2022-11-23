export interface IResponse<T> {
    error: boolean
    message: string
    response: T
}