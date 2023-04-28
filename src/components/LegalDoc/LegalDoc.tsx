import React from 'react';
import { LegalDocProps, LineProps } from './LegalDoc.types';
import Link from 'next/link';

function Line({ line }: LineProps) {
  const emails = ['support@headstartr.com', 'privacy@headstartr.com'];
  const isEmailThere = line.includes(emails[0]) || line.includes(emails[1]);
  if (isEmailThere) {
    const [sentence, email] = line.split('at');
    return (
      <span>
        {sentence} at
        <Link href={`mailto:${email}`} className="text-brandBlue underline">
          {email}
        </Link>
      </span>
    );
  } else {
    return <span>{line}</span>;
  }
}

function LegalDoc({ docHeading, sections }: LegalDocProps) {
  return (
    <div className="px-[14.5%]">
      <h1 className="text-2xl font-bold">{docHeading}</h1>
      <ul className="">
        {sections.map((section) => (
          <li key={section.title} className="flex flex-col gap-3 py-5">
            <h2 className="text-lg font-medium">{section.title}</h2>
            <div>
              <ul>
                {section.content.map((line, index) => (
                  <li key={index}>{<Line line={line} />}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LegalDoc;
