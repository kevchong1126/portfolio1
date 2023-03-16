
import React, {useState, useEffect} from 'react'

const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({x: null, y: null});

    useEffect(() => {
        const func = (e) => {
            setMousePosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener('mousemove', func);

        return () => { window.removeEventListener('mousemove', func)}
    }, [])

  return mousePosition
}

export default useMousePosition