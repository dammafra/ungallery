import { Button } from "@nextui-org/button";
import { useAuth } from "@providers/auth/use-auth";
import { authService } from "@services/auth.service";
import { FcGoogle } from "react-icons/fc";

export const AuthButton = () => {
  const { setUser } = useAuth();

  return (
    <Button
      startContent={<FcGoogle size={22} />}
      onPress={() => authService.signIn().then(setUser)}
    >
      Sign in with Google
    </Button>
  );
};
