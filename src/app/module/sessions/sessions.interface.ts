export interface ISession {
  title: string;
  instructorName: string;
  images: string[];
  status: string;
  date: string;
  sessionLink: string;
  endTime: string;
  startTime: string;
  location: string;
  description: string;
  eligibilityCriteria: string[];
  sponsorLogos?: string[]
}
