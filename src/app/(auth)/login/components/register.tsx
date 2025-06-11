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
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useRegisterHook } from "../hooks/register";
import { formatCpfCnpj } from "@/helpers/utils";

export function RegisterComponent() {
  const { signUp, registerForm } = useRegisterHook();

  return (
    <>
      <Form {...registerForm}>
        <form onSubmit={registerForm.handleSubmit(signUp)}>
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardTitle>Registrar</CardTitle>
              <CardDescription>
                Crie uma nova conta registrando as credenciais ou com a conta
                google.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={registerForm.control}
                name="name"
                render={({ field }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-4">
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input {...field} placeholder="Example" />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
              <FormField
                control={registerForm.control}
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
                control={registerForm.control}
                name="cpfCnpj"
                render={({ field: { onChange, ...field } }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-3">
                    <FormLabel>Cpf/Cnpj</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="123.456.789-12"
                        onChange={(e) => {
                          const { value } = e.target;
                          e.target.value = formatCpfCnpj(value);
                          onChange(e);
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />{" "}
              <FormField
                control={registerForm.control}
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
              <FormField
                control={registerForm.control}
                name="confirmPassword"
                render={({ field }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-3">
                    <FormLabel>Conformação de Senha</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" placeholder="******" />
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              />
            </CardContent>
            <CardFooter className="block">
              <Button variant="outline" className="w-full mb-2" type="submit">
                Criar conta
              </Button>
              <Button variant="outline" onClick={() => {}} className="w-full">
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
