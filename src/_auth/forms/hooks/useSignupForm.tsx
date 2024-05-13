import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { SigninFormSchema } from "@/lib/validation";
import { createUserAccount } from "@/lib/appwrite/api.ts";
import { useToast } from "@/components/ui/use-toast.ts";

export const useSignupForm = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof SigninFormSchema>>({
    resolver: zodResolver(SigninFormSchema),
    defaultValues: {
      name: "",
      username: "",
      password: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit(
    async (values: z.infer<typeof SigninFormSchema>) => {
      const newUser = await createUserAccount(values);

      if (newUser) {
        return toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong. Try again.",
          description: "There was a problem with your Sign Up.",
        });
      }
    },
  );

  return {
    form,
    functions: { onSubmit },
    state: null,
  };
};
