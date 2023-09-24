type PaperType = "journal" | "conference" | "thesis" | "book";
type Paper = Journal | Conference | Thesis | Book;

interface Author {
  family: string;
  given: string;
}

//https://en.wikipedia.org/wiki/BibTeX#Entry_types
interface Publication {
  id: string;
  type: PaperType;
  author: Author[];
  title: string;
  year: number;
  DOI?: string;
  number?: string;
  pages?: string;
  month?: string;
  note?: string;

  // Not in bibtex spec, but for the website
  site?: string;
  pdf?: string;
}

interface Journal extends Publication {
  type: "journal";
  journal: string;
  volume: string;
}

interface Conference extends Publication {
  type: "conference";
  booktitle: string;
  editor?: string;
  volume?: string;
  serires?: string;
  chapter?: string;
  address?: string;
  edition?: string;
}

interface Thesis extends Publication {
  type: "thesis";
  school: string;
}

interface Book extends Publication {
  type: "book";
  publisher: string;
}

interface ServiceItem {
  title: string;
  venue: string;
  date: string;
}

interface ContractDate {
  month: string;
  year: number;
}

interface Work {
  title: string;
  affiliation: string;
  url?: string;
  city: string;
  country: string;
  begin: ContractDate;
  end?: ContractDate;
}

interface Teaching {
  title: string;
  course: string;
  school: string;
  date: string;
}

interface Supervisor {
  name: string;
  homepage?: string;
  note?: string;
}

interface EducationItem {
  degree: string;
  department: string;
  school: string;
  schoolUrl: string;
  period: string;
  thesis?: string;
  supervisor?: Supervisor[];
}

interface TimelineItem {
  date: string;
  title: string;
  affiliation: string;
  type: "education" | "work";
  city?: string;
  description?: string;
}

export type {
  PaperType,
  Paper,
  Author,
  Publication,
  Journal,
  Conference,
  Thesis,
  Book,
  ServiceItem,
  ContractDate,
  Work,
  Teaching,
  EducationItem,
  TimelineItem,
};
