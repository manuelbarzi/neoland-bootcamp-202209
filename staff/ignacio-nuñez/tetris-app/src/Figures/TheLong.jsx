import { useEffect, useState } from "react"

function TheLong() {
    const [xPosition, setXPosition] = useState(1)
    const [yPosition, setYPosition] = useState(1)
    const [orientation, setOrientation] = useState('horizontal')

    document.onkeydown = (event) => {
        const key = event.key
        switch (key) {
            case 'a':
                if (orientation === 'horizontal') {
                    if (xPosition <= 1 || yPosition >= 19) break
                    setXPosition(xPosition - 1)
                } else if (orientation === 'vertical') {
                    if (xPosition < 1 || yPosition >= 19) break
                    setXPosition(xPosition - 1)
                }
                break
            case 'd':
                if (xPosition >= 5 || yPosition >= 19) break
                setXPosition(xPosition + 1)

                break
            case 'w': if (xPosition < 1) break
                orientation === 'horizontal' ? setOrientation('vertical') : setOrientation('horizontal')

                break

            default:
        }
    }

    useEffect(() => {
        const intervalId = setInterval(() => {
            setYPosition((actualValue) => {
                if (actualValue >= 19) clearInterval(intervalId)
                return actualValue + 1
            })
        }, 100)
    }, [])

    const position = orientation === 'horizontal' ? {
        gridTemplateColumns: 'repeat(4,minmax(0,1fr)',
        gridColumn: `${xPosition}/${xPosition + 4}`,
        gridRow: `${yPosition}/${yPosition + 1}`
    } : {
        gridTemplateRows: 'repeat(4,minmax(0,1fr)',
        gridColumn: `${xPosition + 1}/${xPosition + 2}`,
        gridRow: `${yPosition}/${yPosition + 4}`
    }

    return <div style={position} className="grid bg-blue-700">
        <div className={orientation === 'horizontal' ?
            'col-start-1 col-end-2 border-solid border-black border' :
            'row-start-1 row-end-2 border-solid border-black border'}></div>

        <div className={orientation === 'horizontal' ?
            'col-start-2 col-end-3 border-solid border-black border' :
            'row-start-2 row-end-3 border-solid border-black border'}></div>

        <div className={orientation === 'horizontal' ?
            'col-start-3 col-end-4 border-solid border-black border' :
            'row-start-3 row-end-4 border-solid border-black border'}></div>

        <div className={orientation === 'horizontal' ?
            'col-start-4 col-end-5 border-solid border-black border' :
            'row-start-4 row-end-5 border-solid border-black border'}></div>


    </div>
}

export default TheLong