import { Paper, Author } from "./Types";

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
