import { cn } from '../../utils/lib';
import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}
/**
 * A reusable card component that provides a visually styled container
 * with built-in responsiveness, dark mode support, and hover effects.
 *
 * @param {Object} props - The component properties.
 * @param {string} [props.className] - Additional CSS classes for custom styling.
 * @param {React.ReactNode} props.children - The content to be displayed inside the card.
 * @param {React.HTMLAttributes<HTMLDivElement>} props.props - Additional attributes applicable to a div element.
 *
 * @returns {JSX.Element} A styled card component with hover effects.
 */
export default function Card({ className, children, ...props }: Readonly<CardProps>) {
  return (
    <div className='size-full rounded-3xl shadow-xs transition-shadow duration-300 hover:shadow-lg'>
      <div
        {...props}
        className={cn(
          'size-full overflow-hidden rounded-3xl',
          'bg-white dark:bg-dark-900',
          'select-none md:cursor-grab md:active:cursor-grabbing',
          'dark:ring-1 dark:ring-dark-800',
          className
        )}>
        {children}
      </div>
    </div>
  );
}