import { Button } from "./ui/button";
import { signIn } from "@/auth";

export default function SignInButton() {
    return (
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button type="submit">Sign In</Button>
      </form>
    );
  }
  