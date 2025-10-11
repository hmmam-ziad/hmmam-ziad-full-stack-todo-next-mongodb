"use client";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./spinner";
import { useState } from "react";
import { deleteTodoActions } from "@/actions/todo.actions";
import EditTodoForm from "./EditTodoForm";
import { ITodo } from "@/interfaces";

const TodosTableActions = ({todo}: {todo: ITodo}) => {

    const [loading, setLoading] = useState(false);

    return(
        <>
            <EditTodoForm todo={todo}/>
                <Button size="icon" variant={"destructive"} onClick={async () =>{
                    setLoading(true);
                    await deleteTodoActions({id : todo.id? todo.id : ""});
                    setLoading(false);
                }}>
                    {loading ? <Spinner />: <Trash size={16}/>}
                </Button>
        </>
    );
}

export default TodosTableActions