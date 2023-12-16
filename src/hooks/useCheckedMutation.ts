import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toggleTodoStatus } from '../services/todos';

export const useCheckedMutation = (id: number, completed: boolean) => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: () => toggleTodoStatus(id, !completed),
    onSuccess: () => client.invalidateQueries(['todos']),
  });
};
