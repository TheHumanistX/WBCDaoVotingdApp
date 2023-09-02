import { useState } from 'react';

export const useSlideOutModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [topText, setTopText] = useState('');
    const [bottomText, setBottomText] = useState('');

    const showSlideOutModal = (top, bottom = '') => {
        setIsOpen(true);
        setTopText(top);
        setBottomText(bottom);
    };

    return { isOpen, topText, bottomText, showSlideOutModal, setIsOpen };
}