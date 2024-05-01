import SelectAge from "@/components/authentication/select-age";
import { Suspense } from "react";

export default function MenteeAge() {
  return (
    <Suspense>
      <SelectAge />
    </Suspense>
  );
}
