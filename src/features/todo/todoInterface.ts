export interface TodoGet {
    id: string;
    name: string;
    created: string;
    __v: number;
    done: boolean;
}
export interface TodoPost {
    name: string;
    done?: boolean;
}

export interface TodoState {

    list: TodoGet[];
    isLoading: boolean;
}

export type ReturnType<T> = {
    data: T;
    message?: string;
};