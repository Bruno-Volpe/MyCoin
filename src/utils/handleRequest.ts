import { toast } from 'react-toastify'

interface handleRequestProps {
    callBackFn: () => void;
    setLoading: (loading: boolean) => void;
}

export default async function handleRequest({callBackFn, setLoading}: handleRequestProps) {
    try {
        return await callBackFn()
    }
    catch (error) {
        toast.warn('Token Espirado!') //TODO: substituir por um toast
    } finally {
        setLoading(false)
    }
}