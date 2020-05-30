import { useState } from "preact/hooks"


export default () => {
    const [showModal , setShowStatus] = useState(false)

    const openModal = e => setShowStatus(true)
    const closeModal = e => {
        console.log('closeModal', true)
        setShowStatus(false)
    }


    return [ showModal, openModal, closeModal]
}