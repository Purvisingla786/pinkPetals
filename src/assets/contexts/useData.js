import { useContext } from "react"
import Context from "./context"


const useData=()=>{
    const item = useContext(Context)
    return item
}

export default useData;