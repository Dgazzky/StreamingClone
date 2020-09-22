import React from 'react'
import { Image, Modal as AntModal } from 'antd'

interface ModalProps {
    isVisible: boolean
    movie: any
    setIsVisible: (value: boolean) => void
}

const Modal = ({ isVisible, movie, setIsVisible }: ModalProps) => {
    return (
        <AntModal
            visible={isVisible}
            maskClosable={true}
            onCancel={() => setIsVisible(false)}
            centered
            closable={false}
            footer={null}
        >
            {movie['im:name']['label']}
            <Image
                preview={false}
                loading={'lazy'}
                src={movie['im:image'][2]['label']}
            />
        </AntModal>
    )
}
export default Modal
