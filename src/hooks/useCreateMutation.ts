import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createTodo } from '../services/todos';
import { Todo } from '../types/todo';

export const useCreateMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: createTodo,

    onSuccess: (newTodo) => {
      client.setQueriesData<Todo[]>(['todos', 'all'], (oldTodos) => {
        return [...(oldTodos || []), newTodo];
      });
      client.invalidateQueries({
        queryKey: ['todos', 'all'],
        refetchType: 'none',
      });
    },
  });
};
