import { useMutation } from '@tanstack/react-query';
import { deleteTodo } from '../services/todos';
import { Todo } from '../types/todo';

export const useDeleteMutation = (id: number) => {
  return useMutation({
    mutationFn: () => deleteTodo(id),
  });
};
