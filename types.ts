export interface ISignUp {
  name: string;
  email: string;
  password: string;
  skills: Skills;
  interests: any[];
  verificationPin: string;
  status: boolean;
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Skills {
  types: any[];
}

export interface SignUpResponse {
  access_token: string;
}

export interface IVerifyResponse {
  id: number;
  email: string;
  role: string;
  isVerified: boolean;
  profilePicture: null;
}

export interface LoggedInUser {
  id: number;
  email: string;
  profilePicture: null;
  isVerified: boolean;
  role: UserRole;
  name: string;
  gender: string;
  institution: null;
  availability: UserAvailability[];
  mentees: any[];
  location: string;
  industry: string;
  levelOfExpertise: string;
  yearsOfExperience: number
  bio: string
  headline: string
}

export enum UserRole {
  MENTOR = "MENTOR",
  MENTEE = "MENTEE",
}

export interface UserAvailability {
  dayAvailable: string;
  timeAvailable: number;
}

export interface LoginResponse {
  access_token: string;
  isVerified: boolean;
}

export interface CourseResponse {
  id: number;
  type: string;
  title: string;
  coverPhoto: null;
  category: string;
  createdAt: Date;
  description: string;
  studentsEnrolled: number;
  price: null;
  level: string;
  lessons: number;
  hasCertifications: boolean;
  studentGraduated: number;
  owner: CourseData;
}

export interface CourseData {
  email: string;
  name: string;
}

export interface CourseDetailsResponse {
  id: number;
  type: string;
  content: string
  title: string;
  coverPhoto: null | string;
  category: string;
  createdAt: Date;
  description: string;
  studentsEnrolled: number;
  price: null;
  level: string;
  lessons: number;
  hasCertifications: boolean;
  studentGraduated: number;
  owner: CourseDetailsData;
}

export interface CourseDetailsData {
  id: number;
  name: string;
  email: string;
}

export interface MentorsList {
  id: number;
  email: string;
  name: string;
  industry: string;
  profilePicture: string;
}

export interface MentorDetails {
  id: number;
  availability: MentorDetailsAvailability[];
  email: string;
  name: string;
  resources: MentorDetailsResources[];
  status: RequestStatus;
  profilePicture: string;
  industry: string;
  headline: string;
  bio: string;
}

export interface MentorDetailsResources {
  id:                number;
  type:              ResourceType;
  title:             string;
  description:       string;
  content:           null;
  coverPhoto:        null;
  category:          string;
  createdAt:         Date;
  studentsEnrolled:  number;
  price:             null;
  level:             string;
  duration:          string;
  lessons:           number;
  quizzes:           number;
  hasCertifications: boolean;
  studentGraduated:  number;
  userId:            number;
}

export enum  ResourceType{
  course = "course",
  article = "article"
}

export enum RequestStatus {
  NOT_ACTIVE = "NOT_ACTIVE",
  PENDING_REQUEST = "PENDING_REQUEST",
  MENTOR_ACCEPTED = "MENTOR_ACCEPTED",
}

export enum Action {
  ACCEPT = "ACCEPT",
  REJECT = "REJECT",
}

export enum Age {
  ABOVE_18 = "ABOVE_18",
  UNDER_18 = "UNDER_18",
}

export interface MentorDetailsAvailability {
  id: number;
  mentorId: number;
  dayAvailable: string;
  timeAvailable: number;
  timeRemainingForSchedule: number;
  lastDateScheduled: null;
}

export interface PendingMentorshipRespnse {
  id: number;
  menteeId: number;
  email: string;
  name: string;
  location: string;
  gender: string;
  profilePicture: string;
  skills: [];
  industry: string;
}
