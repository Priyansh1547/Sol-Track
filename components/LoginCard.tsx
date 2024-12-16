import { LoginButton } from "@/components/ui/button/LoginButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function LoginCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Login</CardTitle>
      </CardHeader>
      <CardContent>
        <LoginButton />
      </CardContent>
    </Card>
  );
}
