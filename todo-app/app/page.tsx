import { getTodosActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";

export default async function Home() {
  const todos = await getTodosActions(); 
  return (
    <main className="container">
    <AddTodoForm />
    <TodoTable />

    <ul>
      {
        todos.map(todo => <li key={todo.id} >{ todo.title}</li>)
      }
    </ul>
    </main>
  );
}
