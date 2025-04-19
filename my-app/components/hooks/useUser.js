import { useUser as useUserFromProvider } from "../../app/provider";

export function useUser() {
  return useUserFromProvider();
}
