import { useEffect } from 'react';

/**
 * A React Hook that attaches an {@link https://developer.mozilla.org/en-US/docs/Web/Events event} listener to a target object on mount.
 * The listener is removed when the target unmounts.
 *
 * @kind function
 *
 * @param {Object} target The target to attach the listener to
 * @param {String} type The type of {@link https://developer.mozilla.org/en-US/docs/Web/Events event}, such as `resize`, `error`, etc.
 * @param {Function} listener a callback function to be invoked
 * @param  {...any} rest any other arguments to pass to the function
 */
export const useEventListener = (target, type, listener, ...rest) => {
    useEffect(() => {
        target.addEventListener(type, listener, ...rest);

        // return a callback, which is called on unmount
        return () => {
            target.removeEventListener(type, listener, ...rest);
        };
    }, [target, listener, type]);
};
