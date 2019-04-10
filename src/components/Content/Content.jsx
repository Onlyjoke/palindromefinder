import React  from 'react';
import PropTypes from 'prop-types';

import './Content.css';

const Content = (props) => {
    const {
        text,
        clearFile,
        isFindPalindrome,
        findPalindrome
    } = props;
    let palindrome = [];
    const splitText = text.trim().split('.');

    splitText.forEach((item) => {
        if (isPalindrome(item) && item.length >= 3) {
            return palindrome.push(item);
        }

        return palindrome;
    });

    function isPalindrome(text) {
        const toLowerText = text.toLowerCase();
        const newText = toLowerText.replace(/\s+/g, '');

        return newText.split('').join('') === newText.split('').reverse().join('');
    }

    function renderText() {
        let newText = text;

        palindrome.forEach((item) => {
            const regConf = new RegExp(item, 'g');
            newText = newText.replace(regConf, `<span class='b-content__palindrome_type_color_red'>${item}</span>`);
        });

        return <span dangerouslySetInnerHTML={{__html: newText}}></span>;
    }

    function renderMaxLengthPalindrome() {
        const maxLength = Math.max(...(palindrome.map((item) => item.length)));

        return palindrome.map((item) => {
            if (item.length === maxLength) {
                return item;
            }
            return false;
        });
    }

    return (
        <div className='b-content'>
            <div className='b-content__buttons'>
                <button
                    className='b-content__btn b-content__btn-clear'
                    onClick={clearFile}
                    disabled={!text}
                >
                    Очистить
                </button>
                <button
                    className='b-content__btn b-content__btn-find'
                    onClick={findPalindrome}
                    disabled={!text}
                >
                    Найти палиндром
                </button>
            </div>
            {
                text &&
                <div>
                    <div className='b-content__title'>Загруженный текст</div>
                    <div className='b-content__text'>{ text }</div>
                </div>
            }
            {
                isFindPalindrome &&
                    <div>
                        <div className='b-content__title'>Найденный палиндром</div>
                        <div className='b-content__palindrome'>{ renderText() }</div>
                        <div className='b-content__title'>Самый длинный палиндром</div>
                        <div className='b-content__palindrome'>{renderMaxLengthPalindrome()}</div>
                    </div>
            }
        </div>
    );
};

Content.propTypes = {
    text: PropTypes.string,
    clearFile: PropTypes.func,
    isFindPalindrome: PropTypes.bool,
    findPalindrome: PropTypes.func
};

export default Content;
