"use client";
import Button from "@/components/ui/button";
import TextField from "@/components/ui/text-field";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export default function QuestionSection() {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };

  return (
    <div className="w-full bg-white text-black py-12 px-9 lg:p-[58px] flex flex-col lg:flex-row">
      <h2 className="text-[26px] lg:text-[48px] w-full lg:w-[350px] uppercase lg:mr-[64px] mb-[38px] lg:mb-0">
        Question? We are here to help!
      </h2>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <TextField
            name="name"
            className="w-full sm:w-[295px] inline-block mr-[38px]"
          />
          <TextField
            name="email"
            className="w-full sm:w-[295px] inline-block"
          />
          <TextField name="message" className="w-full sm:w-[295px]" rows={3} />
          <Button
            type="submit"
            label="Send"
            className="text-purple border-purple hover:bg-purple md:text-background md:border-background md:hover:bg-background"
          ></Button>
        </form>
      </FormProvider>
    </div>
  );
}
