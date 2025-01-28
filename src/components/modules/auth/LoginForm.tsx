"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import { handleCredentialsSignin } from "@/app/actions";
// import { doCredentialLogin } from "@/app/actions";

const LoginForm = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const LoginSchema = z.object({
    userName: z.string().min(1, {
      message: "User Name is required",
    }),
    password: z.string().min(5, {
      message: "Password must be at least 5 characters",
    }),
  });

  // const predefinedUsers = [
  //   { userName: "dipesh", password: "123456789", role: "Admin" },
  //   { userName: "admin", password: "admin", role: "Admin" },
  //   { userName: "shyam", password: "123456789", role: "Admin" },
  // ];

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      userName: "",
      password: "",
    },
  });

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   const { userName, password } = values;

  //   // Validate credentials for predefined users
  //   const user = predefinedUsers.find(
  //     (user) => user.userName === userName && user.password === password
  //   );
  //   if (user) {
  //     // Store in localStorage on successful login
  //     localStorage.setItem("userName", values.userName);
  //     localStorage.setItem("password", values.password);
  //     router.push(`/admin/dashboard`);
  //   } else {
  //     setErrorMsg("Invalid credentials. Please try again.");
  //   }
  // };

  // async function onSubmit(event) {
  //   event.preventDefault();
  //   try {
  //     const formData = new FormData(event.currentTarget);

  //     const response = await doCredentialLogin(formData);

  //     if (!!response.error) {
  //       console.error(response.error);
  //       setError(response.error.message);
  //     } else {
  //       router.push("/admin/dashboard");
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     setError("Check your Credentials");
  //   }
  // }
  // const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
  //   try {
  //     const formData = new FormData();
  //     formData.append("userName", values.userName);
  //     formData.append("password", values.password);

  //     const response = await doCredentialLogin(formData);

  //     if (!!response.error) {
  //       console.error(response.error);
  //       setError(response.error.message);
  //     } else {
  //       router.push("/admin/dashboard");
  //     }
  //   } catch (e) {
  //     console.error(e);
  //     setError("Check your Credentials");
  //   }
  // };
  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      const result = await handleCredentialsSignin(values);
      if (result?.message) {
        setError(result.message);
      }
    } catch (error) {
      console.log("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="text-xl text-red-500">{error}</div>
      <div className="flex flex-row justify-center items-center py-10">
        <Card className="w-[400px] max-mobile-md:w-[350px] shadow-md">
          <CardHeader>
            <div className="flex items-center justify-center">
              <h1 className="text-3xl font-semibold">Login</h1>
            </div>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                // onSubmit={onSubmit}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Doe"
                          type="text"
                          id="userName"
                          name="userName"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="******"
                          type="password"
                          id="password"
                          name="password"
                        />
                      </FormControl>
                      <Button
                        size="sm"
                        variant="link"
                        asChild
                        className="px-0 font-normal"
                      ></Button>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <h3 className="text-red-500">{errorMsg}</h3>
                <Button
                  type="submit"
                  className="w-full border-2 bg-purple-shade-60 hover:bg-purple-shade-d60 text-white"
                >
                  Login
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
