import { useEffect, useLayoutEffect, useState } from "react";
import { breakpoints } from './consts.ts';

/**
 * hook to determine the current screen breakpoint based on window width.
 * listens for window resize events and updates the breakpoint accordingly.
 */
function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState<string>('');

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            const newBreakpoint = Object.keys(breakpoints).find(
                (key) => width > breakpoints[key]
            ) ?? 'xxs';

            setBreakpoint(newBreakpoint);
        };

        handleResize(); // Initialize the breakpoint on first render
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return { breakpoint, setBreakpoint };
}

/**
 * hook that determines if a component has been mounted.
 *
 * @param {number} [delay=0] - Optional delay (in milliseconds) before marking the component as mounted.
 * @returns {boolean} `true` if the component has been mounted, `false` otherwise.
 */
function useMounted(delay: number = 0) {
    const [isMounted, setIsMounted] = useState(false);

    useLayoutEffect(() => {
        setTimeout(() => {
        setIsMounted(true);
        }, delay);
    }, [delay]);

    return isMounted;
}

export { useBreakpoint, useMounted };