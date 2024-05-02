import { createBuilder } from "@ibnlanre/portal";
import { API, LOGINAPI } from "./axios-config";
import { ICreateForm } from "@/components/authentication/create-form";
import { IVerify } from "@/components/authentication/otp-form";
import {
  IVerifyResponse,
  SignUpResponse,
  LoggedInUser,
  LoginResponse,
  CourseResponse,
  CourseDetailsResponse,
  MentorsList,
  MentorDetails,
  PendingMentorshipRespnse,
  Action,
} from "@/types";
import { IMenteeBiodata } from "@/components/authentication/mentee-biodata";
import { IMentorBiodata } from "@/components/mentors/mentor-biodata";
import { ILogin } from "@/components/authentication/login-form";
import { IResource } from "@/components/resources/course-form";
import { FormType } from "@/app/mentors/[mentor_details]/schedule-session/page";
import { IArticle } from "@/components/blog/article-form";

export const builder = createBuilder({
  authentication: {
    signup: (data: ICreateForm) =>
      LOGINAPI.post<SignUpResponse>(`api/auth/signup`, data),
    verify_email: (data: IVerify) =>
      API.post<IVerifyResponse>(`api/user/verify-email`, data),
    resend_otp: () => API.patch(`api/auth/resend-otp`),
    signin: (data: ILogin) => API.post<LoginResponse>(`api/auth/signin`, data),
  },
  user: {
    user_details: () => API.get<LoggedInUser>(`api/user`),
    biodata: (data: IMenteeBiodata) => API.patch(`api/user`, data),
    mentor_biodata: (data: IMentorBiodata) => API.patch(`api/user`, data),
    upload_profile_picture: (data: FormData) =>
      API.patch(`api/upload-profile-picture`, data),
    upload_cover_photo: (data: FormData) =>
      API.patch(`api/upload-cover-photo`, data),
  },

  resources: {
    courses: {
      create: (data: IResource) =>
        API.post<CourseResponse>(`api/courses`, data),
      fetch: () => API.get<CourseDetailsResponse[]>(`api/courses`),
    },
    article: {
      create: (data: IArticle) =>
        API.post<CourseResponse>(`api/articles`, data),
      fetch: () => API.get<CourseDetailsResponse[]>(`api/articles`),
    },
  },

  mentors: {
    mentors_list: () => API.get<MentorsList[]>(`api/mentors`),
    mentor_details_unauth: (id: string) => API.get<MentorDetails>(`api/mentors/${id}`),
    mentor_details_auth: (id: string) =>
      API.get<MentorDetails>(`api/mentors/auth/${id}`),
    mentorship_requests: {
      pending_mentorship_requests: () =>
        API.get<PendingMentorshipRespnse[]>(`api/mentors/mentorship-requests`),
      accept_reject: (data: {
        action: Action.ACCEPT | Action.REJECT;
        requestId: number;
      }) => API.post(`api/mentors/mentorship-requests/accept-reject`, data),
    },
  },

  mentee: {
    request_mentorship: (id: string) => API.post(`api/mentors/request/${id}`),
    cancel_mentorship_request: (data: { requestId: number }) =>
      API.patch(`api/mentors/mentorship-requests/cancel`, data),
  },
  session: {
    requests: {
      create: (data: FormType) => API.post(`/api/session/requests`, data),
    },
  },
});
