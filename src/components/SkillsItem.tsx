import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function SkillsItem({ children }: Props) {
  return (
    <li>
      <p>{children}</p>
    </li>
  );
}
