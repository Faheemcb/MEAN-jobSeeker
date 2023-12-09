import { WorkExperience } from "./WorkExperience";

export class Profile {
    profileName?: string;
    profileSummary?: string;
    resume?: string;
    qualifications?: string;
    workExperiences?: WorkExperience;
    skills?: string[] | null;
}