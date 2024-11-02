import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../RTK/languageSlice';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const dispatch = useDispatch();
    const currentLanguage = useSelector((state) => state.language.current);

    useEffect(() => {
        i18n.changeLanguage(currentLanguage);
    }, [currentLanguage, i18n]);

    const changeLanguage = (e) => {
        const newLanguage = e.target.value;
        dispatch(setLanguage(newLanguage)); // Redux 상태 업데이트
        localStorage.setItem('language', newLanguage); // 로컬 저장소에 저장
    };

    return (
        <select onChange={changeLanguage} value={currentLanguage} className='text-black rounded'>
            <option value="ko">한국어</option>
            <option value="en">English</option>
            <option value="jp">日本語</option>
            <option value="zh">中文</option>
        </select>
    );
};

export default LanguageSelector;
