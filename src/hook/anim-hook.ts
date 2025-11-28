import { useEffect, useState, type RefObject } from "react";

export function useQuantaIntersection (ref: RefObject<Element | null>, option: IntersectionObserverInit) {
    const [isIntercepting, setIntercepting] = useState(false)
    useEffect(() => {
        if (!ref.current) return

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntercepting(true)
            }
        }, option)

        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, [ref, option])
    return isIntercepting
}


export function useDelayAnim (value: boolean, timer: number): boolean {
    const [newvalue, setNewValue] = useState<boolean>(false)
    useEffect(() => {
        const delayFunc = setTimeout(() => {
            setNewValue(value)
        }, timer)
        return () => clearTimeout(delayFunc)
    }, [value, timer])
    return newvalue
}