import { useRouter } from "next/router";

export interface Link {
  label: string;
  onClick: () => void;
}

const useNavbarLinks = () => {
  const router = useRouter();

  return [
    {
      label: "Login",
      // Should be modals instead of routing
      onClick: () => router.push("/login"),
    },
    {
      label: "Register",
      onClick: () => router.push("/register"),
    },
  ] as Link[];
};

export default useNavbarLinks;
