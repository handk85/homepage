//https://en.wikipedia.org/wiki/BibTeX#Entry_types
interface Author {
  family: string;
  given: string;
}

export type PaperType = "journal" | "conference" | "thesis" | "book";
export type Paper = Journal | Conference | Thesis | Book;

export interface Publication {
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

export interface Journal extends Publication {
  type: "journal";
  journal: string;
  volume: string;
}

export interface Conference extends Publication {
  type: "conference";
  booktitle: string;
  editor?: string;
  volume?: string;
  serires?: string;
  chapter?: string;
  address?: string;
  edition?: string;
}

export interface Thesis extends Publication {
  type: "thesis";
  school: string;
}

export interface Book extends Publication {
  type: "book";
  publisher: string;
}

const nonBibtexFields = ["type", "id", "pdf", "site"];
function paperToBibtex(paper: Paper) {
  return Object.entries(paper).map((item) => {
    if (item[0] === "author") {
      const authors = item[1] as Author[];
      const author = authors
        .map((a) => {
          return `${a.family}, ${a.given}`;
        })
        .join(" and ");
      return `  author={${author}}`;
    } else {
      if (item[1]) {
        if (!nonBibtexFields.includes(item[0])) {
          return `  ${item[0]}={${item[1]}}`;
        }
      }
    }
    return null;
  });
}

export function generateBibtex(paper: Paper) {
  switch (paper.type) {
    case "journal":
      return `@ARTICLE{${paper.id},
${paperToBibtex(paper)
  .filter((item) => item != null)
  .join(",\n")}
}`;
    case "conference":
      return `@INPROCEEDINGS{${paper.id},
${paperToBibtex(paper)
  .filter((item) => item != null)
  .join(",\n")}
}`;
    case "thesis":
      return "";
    case "book":
      return "";
  }
}
