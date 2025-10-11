"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { todoFormSchema, todoFormValues } from "@/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createTodoActions } from "@/actions/todo.actions";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import Spinner from "./spinner";

const AddTodoForm = ({userId}: {userId: string | null}) => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const defaultValues: Partial<todoFormValues> = {
        title: "",
        body: "",
        completed: false,
    };

    const form = useForm<todoFormValues>({
        resolver: zodResolver(todoFormSchema),
        defaultValues,
        mode: "onChange",
    });

    const onSubmit = async (data: todoFormValues) => {
        setLoading(true);
        await createTodoActions({title: data.title, body: data.body || "", completed: data.completed || false, userId});
        form.reset();
        setOpen(false);
        setLoading(false);
    };

    return(
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button><Plus size={14} className="mr-1"/>New Todo</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Todo</DialogTitle>
            </DialogHeader>
            <div className="py-4">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="body"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Short description</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Tell us a little bit about yourself" className="resize-none" {...field} />
                        </FormControl>
                        <FormDescription>you can write a short description about your next todo</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                      <FormItem>
                        <div className="flex items-center space-x-2">
                            <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                              ref={field.ref}
                              name={field.name}
                            />
                          </FormControl>
                          <FormLabel>Completed</FormLabel>
                        </div>
                        <FormDescription>Your to-do item be uncompleted by default unless you checked it.</FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />


                  <DialogFooter>
                    <Button type="submit" disabled={loading}>{
                        loading ? (<><Spinner /> Saving</>) : ("Save")
                      }</Button>
                    <DialogClose asChild>
                        <Button variant="destructive">Cancel</Button>
                    </DialogClose>
                    
                  </DialogFooter>
                </form>
              </Form>
      
            </div>
            
          </DialogContent>
      </Dialog>
    );
}

export default AddTodoForm