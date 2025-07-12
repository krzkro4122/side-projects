export interface TodoBase {
    title: string;
    completed: boolean;
}

export interface Identifiable {
    id: number;
}

export interface TimeTracked {
    createdAt: Date;
    updatedAt: Date;
}

export interface TodoResolved extends TodoBase, Identifiable, TimeTracked { }
