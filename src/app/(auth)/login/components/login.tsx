"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BrandGoogle } from "@mynaui/icons-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLoginHook } from "../hooks/login";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export function LoginComponent() {
  const { signIn, loginForm } = useLoginHook();

  return (
    <>
      <Form {...loginForm}>
        <form onSubmit={loginForm.handleSubmit(signIn)}>
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Logue na conta com email e senha ou com o google.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={loginForm.control}
                name="email"
                render={({ field }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-4">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        type="email"
                        placeholder="example@email.com"
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={loginForm.control}
                name="password"
                render={({ field }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-3">
                    <FormLabel>Senha</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
            </CardContent>
            <CardFooter className="block">
              <Button className="w-full mb-2" variant="outline" type="submit">
                Login
              </Button>
              <Button onClick={() => {}} variant="outline" className="w-full">
                <BrandGoogle />
                Entrar com o google
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}
