export interface insertNickname {
    nickname: string;
    idSocket: string;
    createDate: Date;
}

export interface responseService {
    status: number;
    message?: string;
    response?: any;
}