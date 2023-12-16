import { Button, Input, Stack } from '@chakra-ui/react';
import { useState } from 'react';
import { useCreateMutation } from '../hooks/useCreateMutation';

const NewTodo = () => {
  const [title, setTitle] = useState('');

  const { mutate: create } = useCreateMutation();

  const submit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (title) {
      create(title);
      setTitle('');
    }
  };

  return (
    <form onSubmit={submit}>
      <Stack direction="row">
        <Input
          value={title}
          onChange={(event: any) => setTitle(event.target.value)}
          placeholder="new todo..."
        />
        <Button type="submit">Add todo</Button>
      </Stack>
    </form>
  );
};

export { NewTodo };
