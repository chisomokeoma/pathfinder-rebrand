"use client"

import { userAtom } from "@/api/queries-store";
import MenteeMentorshipRequest from "@/components/mentee/mentee-mentorship-request";
import MentorRequestBtn from "@/components/mentors/mentor-request-btn";
import MentorsMentorshipRequest from "@/components/mentors/mentors-mentorship-request";
import { RequestStatus, UserRole } from "@/types";
import { usePortal } from "@ibnlanre/portal";

function MentorshipRequest() {
  const [user, setUser] = usePortal.atom(userAtom);
  return (
    <main>
      {user?.role === UserRole.MENTEE ? (
        <MenteeMentorshipRequest />
      ) : (
        <MentorsMentorshipRequest />
      )}
    </main>
  );
}

export default MentorshipRequest;
