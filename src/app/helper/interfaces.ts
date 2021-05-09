export interface PersonProfile {
    id: number,
    firstName: string,
    lastName:string,
    birthDate: string,
    gender: string,
    country: string,
    street: string,
    apartment: string
}

export interface DialogConfirmData {
    cancelText: string,
    confirmText: string,
    message: string,
    title: string
}
