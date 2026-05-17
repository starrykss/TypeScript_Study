import type { ReactNode } from 'react';

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children?: ReactNode;
}

function Header({ image, children }: HeaderProps) {
  return (
    <header>
      {/* 이미지 */}
      <img {...image} />

      {/* 본문 */}
      {children}
    </header>
  );
}

export default Header;
