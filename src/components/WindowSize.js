import React, { useState, useEffect } from 'react'

export default function useWindowSize(cb) {
    const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])

    useEffect(() => {
        const handleResize = () => {
            cb()
            setWindowSize([window.innerWidth, window.innerHeight])
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return [windowWidth, windowHeight]
}
// import React, { useState, useEffect } from 'react'

// export default function WindowSize() {

//     //hooks for width and height of window
//     const [[windowWidth, windowHeight], setWindowSize] = useState([window.innerWidth, window.innerHeight])

//     //hooks for visible
//     const [visible, setVisible] = useState(false)


//     useEffect(() => {

//         let timeOutId
//         //effect
//         const resizeEventHandler = () => {
//             setWindowSize([window.innerWidth, window.innerHeight])
//             setVisible(true)
//             clearTimeout(timeOutId)
//             timeOutId = setTimeout(() => setVisible(false), 5000)
//         }
//         window.addEventListener("resize", resizeEventHandler)

//         //return
//         return () => {
//             //cleanup

//             window.removeEventListener("resize", resizeEventHandler)
//         }
//     }, [])



//     return (
//         <div className={`window-size ${visible ? "" : "hidden"}`}>
//             {windowWidth} x {windowHeight}
//         </div>
//     )
// }
