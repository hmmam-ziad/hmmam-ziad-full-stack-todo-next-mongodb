import { getTodosActions } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodoTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const user = auth();
  const userId = (await user).userId;
  const todos = await getTodosActions({userId}); 
  return (
    <main className="container">
      <div className="mx-auto flex w-full lg:w-3/4 flex-col justify-center space-x-4">
        <AddTodoForm userId={userId} />
        <TodoTable todos={todos}/>
      </div>
    </main>
  );
}
