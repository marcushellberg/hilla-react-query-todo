import {useMutation, useQuery, useQueryClient} from "react-query";
import {TodoEndpoint} from "Frontend/generated/endpoints";
import {Checkbox} from "@hilla/react-components/Checkbox.js";
import {TextField} from "@hilla/react-components/TextField.js";
import {Button} from "@hilla/react-components/Button.js";
import {useState} from "react";

export function TodoView() {
  const queryClient = useQueryClient();
  const todosQuery = useQuery('todos', TodoEndpoint.findAll);
  const todoMutation = useMutation(TodoEndpoint.save, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos')
      setTask('');
    }
  });

  const [task, setTask] = useState('');

  function save() {
    todoMutation.mutate({
      done: false,
      task
    });
  }

  return (
    <div className="m-l">
      <h1>Todo</h1>
      <div className="flex gap-s mb-l">
        <TextField
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}/>
        <Button
          theme="primary"
          onClick={save}>Add</Button>
      </div>
      {todosQuery.data?.map(todo => (
        <div className="flex gap-s" key={todo.id}>
          <Checkbox
            checked={todo.done}
            onCheckedChanged={e => todoMutation.mutate({
              ...todo,
              done: e.detail.value
            })}/>
          <span>{todo.task}</span>
        </div>
      ))}
    </div>
  )
}