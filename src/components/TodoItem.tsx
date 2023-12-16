import { Button, Checkbox, ListItem, Stack } from '@chakra-ui/react';
import { Todo } from '../types/todo';
import { useCheckedMutation } from '../hooks/useCheckedMutation';
import { useMutation } from '@tanstack/react-query';
import { deleteTodo } from '../services/todos';
import { useDeleteMutation } from '../hooks/useDeleteMutation';

const TodoItem = ({ completed, id, title }: Todo) => {
  const { mutate: toggle } = useCheckedMutation(id, completed);

  // const { mutate: toggleDelete } = useMutation({
  //   mutationFn: () => deleteTodo(id),
  // });

  const { mutate: toggleDelete } = useDeleteMutation(id);

  return (
    <ListItem>
      <Stack
        spacing={4}
        direction="row"
        justifyContent="space-between"
        onClick={() => toggle()}
      >
        <Checkbox isChecked={completed}>{title}</Checkbox>
        <Button colorScheme="red" size="sm" onClick={() => toggleDelete()}>
          X
        </Button>
      </Stack>
    </ListItem>
  );
};

export { TodoItem };
