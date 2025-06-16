import { getServerSession } from "next-auth";
import { authOptions } from "./AuthOptions";

export function auth() {
  return getServerSession(authOptions);
}
