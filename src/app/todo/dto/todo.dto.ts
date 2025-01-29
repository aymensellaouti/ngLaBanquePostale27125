export interface TodoApiResponseDto {
  todos: TodoDto[];
  total: number;
  skip: number;
  limit: number;
}

export interface TodoDto {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
}
