import { ClassValue, clsx } from 'clsx';
import { twMerge } from "tailwind-merge";

/**
 * Utility function for merging Tailwind CSS classes.
 * This function combines multiple class names, removes duplicates,
 * and resolves conflicts using `tailwind-merge`.
 *
 * @param {...ClassValue[]} classes - List of class names (strings or conditional objects).
 * @returns {string} A merged string of valid Tailwind classes.
 */
export function cn(...classes: ClassValue[]) {
    return twMerge(clsx(classes));
}

/**
 * Formats a given date string into a localized German date format.
 *
 * @param {string} date - The date string in a standard format (e.g., "2023-10-25").
 * @returns {string} The formatted date string in "DD. Month YYYY" format.
 */
export function formatDate(date: string): string {
    return new Date(date).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })
}

/**
 * Converts a given string into kebab-case.
 * Removes extra spaces, converts to lowercase, and replaces non-alphanumeric characters with `-`.
 *
 * @param {string} input - The string to be converted.
 * @returns {string} The kebab-case formatted string.
 *
 * @example
 * toKebabCase("Hello World!"); // "hello-world"
 */
export function toKebabCase(input: string) : string {
    return input
        .trim()
        .toLowerCase()
        .replace(/(^-+)|(-+$)/g, '')
        .replace(/[^a-z0-9]+/g, '-');
}

