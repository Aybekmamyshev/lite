import {useEffect, useState} from "react";

import axios from "axios";
import {BASE_URL} from "../../utils/constants";





export const UseCategory = (category: string | undefined, page: number) => {

    const [data, setData] = useState([])
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [hasMore, setHasMore] = useState(false)


    useEffect(() => {
        setData([])
    }, [category]);

    const fetchPost = async () => {
        setLoading(false)
        try {
            await axios.get(`${BASE_URL}${category}?page=${page}`)
                .then((res) => {
                    setData(res.data.results)

                })
        } catch (error: any) {
            setError(error.message)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchPost()
    }, [category, page]);

    return {data, loading, error}
}

export default UseCategory