import { useEffect , useState } from "react"

const getValue = (param) => new URLSearchParams(window.location.search).get(param)

export function useSearchParam(param) {
    const [value, setValue] = useState(() => getValue(param))

   
    useEffect(() => {

        const onChange = () =>{
            console.log(getValue(param))
        }

        window.addEventListener('popstate', onChange)
        window.addEventListener('pushstate', onChange)
        window.addEventListener('replacestate', onChange)

        return () => {
            window.removeEventListener('popstate', onChange)
            window.removeEventListener('pushstate', onChange)
            window.removeEventListener('replacestate', onChange)
        }
    })
    
   

    return value
}