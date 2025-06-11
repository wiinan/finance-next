"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { Toaster } from "sonner";
import { LoginComponent } from "@/app/(auth)/login/components/login";
import { RegisterComponent } from "@/app/(auth)/login/components/register";
import { useAuthHook } from "@/app/(auth)/login/hooks/auth";
import { AuthComponent } from "./components/auth";

export function LoginScreen() {
  const { authData } = useAuthHook();
  console.log(authData)

  return (
    <>
      <Toaster />
      <div className="h-screen grid grid-cols-6 gap-4">
        <div style={{ color: "red" }} className="col-span-4 col-start-1">
          <Image
            style={{
              width: "100%",
              height: "100vh",
              display: "block",
              backgroundSize: "cover",
              objectPosition: "50% 50%",
              backgroundRepeat: "no-repeat",
            }}
            width={0}
            height={0}
            sizes="100vh"
            alt="login"
            src="https://images.unsplash.com/photo-1569025690938-a00729c9e1f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          ></Image>
        </div>
        <div className="col-span-2 h-screen flex justify-center items-center">
          <div className="w-full max-w-lg">
            <Tabs defaultValue="login">
              <TabsList>
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Registrar</TabsTrigger>
              </TabsList>
              <TabsContent value="login">
                {authData ? <AuthComponent /> : <LoginComponent />}
              </TabsContent>
              <TabsContent value="register">
                {authData ? <AuthComponent /> : <RegisterComponent />}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
