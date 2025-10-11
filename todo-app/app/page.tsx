import AddTodoForm from "@/components/AddTodoForm";

export default function Home() {

  

  

  return (
    <main className="container">
    <AddTodoForm />      

    {/* <ul>
      {
        todos.map(todo => <li key={todo.id} >{ todo.title}</li>)
      }
    </ul> */}
    </main>
  );
}
