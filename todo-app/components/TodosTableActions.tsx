"use client";
import { Pen, Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./spinner";
import { useState } from "react";
import { deleteTodoActions } from "@/actions/todo.actions";

const TodosTableActions = ({id}: {id: string}) => {

    const [loading, setLoading] = useState(false);

    return(
        <>
            <Button size="icon">
                    <Pen/>
                </Button>
                <Button size="icon" variant={"destructive"} onClick={async () =>{
                    setLoading(true);
                    await deleteTodoActions({id});
                    setLoading(false);
                }}>
                    {loading ? <Spinner />: <Trash size={16}/>}
                </Button>
        </>
    );
}

export default TodosTableActions