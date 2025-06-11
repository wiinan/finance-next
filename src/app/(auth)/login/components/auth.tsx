import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useAuthHook } from "../hooks/auth";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "@mynaui/icons-react";

export function AuthComponent() {
  const { authForm, authenticate, onBackAuthScreen } = useAuthHook();

  return (
    <>
      <Form {...authForm}>
        <form onSubmit={authForm.handleSubmit(authenticate)}>
          <Card className="w-full max-w-lg">
            <CardHeader>
              <CardDescription>
                <Button onClick={onBackAuthScreen} size="sm" variant={"ghost"}>
                  <ArrowLeft />
                  Voltar
                </Button>
              </CardDescription>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Digite o código recebido por email ou SMS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={authForm.control}
                name="token"
                render={({ field }) => (
                  <div className="grid w-full max-w-md items-center gap-3 mt-4">
                    <FormLabel>Código</FormLabel>
                    <FormControl>
                      <InputOTP
                        {...field}
                        maxLength={6}
                        pattern={REGEXP_ONLY_DIGITS}
                      >
                        <InputOTPGroup>
                          <InputOTPSlot index={0} />
                          <InputOTPSlot index={1} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={2} />
                          <InputOTPSlot index={3} />
                        </InputOTPGroup>
                        <InputOTPSeparator />
                        <InputOTPGroup>
                          <InputOTPSlot index={4} />
                          <InputOTPSlot index={5} />
                        </InputOTPGroup>
                      </InputOTP>
                    </FormControl>
                    <FormMessage />
                  </div>
                )}
              ></FormField>
            </CardContent>
            <CardFooter className="block">
              <Button className="w-full mb-2" variant="outline" type="submit">
                Login
              </Button>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </>
  );
}
