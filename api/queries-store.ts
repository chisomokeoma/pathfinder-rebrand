import { LoggedInUser } from "@/types";
import { Atom } from "@ibnlanre/portal";

export const EmailQuery = new Atom("email-atom", "");

export const userAtom = new Atom<LoggedInUser | null>("user-atom ", null);

export const refetchUserDetails = new Atom('refetch', false)

export const scheduleStepAtom = new Atom("schedule-step", 1)
export const scheduleFormAtom = new Atom("schedule-form", 1)