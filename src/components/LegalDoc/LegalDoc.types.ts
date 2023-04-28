export type legalDocSection = { title: string; content: string[] };
export type LegalDocProps = {
  docHeading: string;
  sections: Array<legalDocSection>;
};
export type LineProps = { line: string };
