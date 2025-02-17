import { cn } from '../../utils/lib';
import * as React from "react";
import { JSX } from 'react';

interface ContainerProps<T extends React.ElementType> {
    as?: T;
}
/**
 * A flexible and reusable container component that supports dynamic element types.
 * It allows specifying the element type using the `as` prop while applying default styling.
 * @returns {JSX.Element} The dynamically rendered container with default responsive styling.
 */
export default function Container<T extends React.ElementType = 'div'>({
                                                                         as,
                                                                           ...props
                                                                       }: ContainerProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof ContainerProps<T>>): JSX.Element {
    const Component = as ?? 'div';
    return (
        <Component
            {...props}
            className={cn(
                'mx-auto px-4 py-6',
                'max-w-[1200px] max-lg:max-w-[800px] max-md:max-w-[375px] max-sm:max-w-[320px]',
                props.className
            )}
        />
    );
}