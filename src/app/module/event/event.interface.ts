export interface IEvent {
  title: string;
  instructorName: string;
  images: string[];
  status: string;
  date: string;
  endTime: string;
  startTime: string;
  location: string;
  description: string;
  eligibilityCriteria: string[];
  sponsorLogos?: string[]
  createdAt: string;
  updatedAt: string;
}
