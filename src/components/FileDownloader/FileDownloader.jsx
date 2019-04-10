import React from 'react';
import PropTypes from 'prop-types';

import './FileDownloader.css';

const FileDownloader = (props) => {
    const {
        fileName,
        value,
        handleFileChosen,
    } = props;

    return (
        <div className='b-file-downloader'>
            <label className='b-file-downloader__label'>
                <input
                    className='b-file-downloader__input'
                    type='file'
                    name='file'
                    accept='.txt'
                    value={value}
                    onChange={(e) => handleFileChosen(e)}
                />
                {
                    fileName ?
                        <span>{`Файл загружен ${fileName}`}</span>
                        :
                        <span>Выберите файл</span>
                }
            </label>
        </div>
    );
};

FileDownloader.propTypes = {
    fileName: PropTypes.string,
    value: PropTypes.string,
    handleFileChosen: PropTypes.func
};

export default FileDownloader;
