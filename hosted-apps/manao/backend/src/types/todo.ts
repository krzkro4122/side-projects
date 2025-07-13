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

export interface TodoResolved extends TodoBase, Identifiable, TimeTracked {}

export interface CreateTodoRequest {
  title: string;
  completed?: boolean;
}

export interface UpdateTodoRequest {
  title?: string;
  completed?: boolean;
}

export interface TodoResponse {
  success: boolean;
  data?: TodoResolved;
  error?: string;
}

export interface TodosResponse {
  success: boolean;
  data?: TodoResolved[];
  error?: string;
}