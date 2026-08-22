import React from 'react';

type SectionHeadingProps = {
  title: React.ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
  tone?: 'light' | 'dark';
};

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  tone = 'light'
}: SectionHeadingProps) {
  return (
    <div
      className={[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left'].
      join(' ')}>
      
      <h2
        className={[
        'font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl',
        tone === 'dark' ? 'text-white' : 'text-ink'].
        join(' ')}>
        
        {title}
      </h2>
      {subtitle ?
      <p
        className={[
        'mt-4 text-lg',
        tone === 'dark' ? 'text-white/65' : 'text-ink-muted'].
        join(' ')}>
        
          {subtitle}
        </p> :
      null}
    </div>);

}