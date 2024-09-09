"use client";
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';

interface AnimatedPageProps {
  href: string;
  className?: string;
  props?: React.AnchorHTMLAttributes<HTMLAnchorElement>;
  children: React.ReactNode;
}

export default function AnimatedPage({
  href,
  className,
  props,
  children
}: AnimatedPageProps) {
  const router = useRouter();

  function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const handleClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const body = document.querySelector("body");
    if (body) {
      body.classList.add("page-transition");
      await sleep(350);
      router.push(href);
      await sleep(350);
      body.classList.remove("page-transition");
    }
  }

  return (
    <Link href={href} className={className} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
}
