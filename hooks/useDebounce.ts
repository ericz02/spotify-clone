import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay || 500);

        return () => {
            clearTimeout(timer);
        };

    }, [value, delay]);

    return debouncedValue;
}

// debounce value, when we start typing, it will wait for 500ms before it will update the value
// thsi way we can prevent unnecessary api calls :)

export default useDebounce;