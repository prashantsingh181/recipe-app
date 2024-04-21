import React, { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
    const [isAlreadyAtTop, setIsAlreadyAtTop] = useState(true);
    useEffect(() => {
        function handleScroll() {
            if (window.scrollY === 0) {
                setIsAlreadyAtTop(true);
            } else {
                setIsAlreadyAtTop(false);
            }
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    })
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    if (!isAlreadyAtTop) {
        return (
            <button className="p-3 bg-highlight fixed z-10 bottom-4 right-4 rounded-md shadow-2xl hover:scale-110 duration-300" onClick={scrollToTop}>
                <FaArrowUp className="text-2xl text-light" />
            </button>
        )
    }
}

export default ScrollToTop