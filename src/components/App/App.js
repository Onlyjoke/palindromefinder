import React  from 'react';
import PropTypes from 'prop-types';

import FileDownloader from '../FileDownloader/FileDownloader';
import Content from '../Content/Content';

const App = (props) => {
    const {
        text,
        fileName,
        value,
        isFindPalindrome,
        handleFileChosen,
        clearFile,
        findPalindrome
    } = props;

    return (
        <>
            <FileDownloader
                text={text}
                fileName={fileName}
                value={value}
                handleFileChosen={handleFileChosen}
                clearFile={clearFile}
            />
            <Content
                text={text}
                clearFile={clearFile}
                isFindPalindrome={isFindPalindrome}
                findPalindrome={findPalindrome}
            />
        </>
    );
};

App.propTypes = {
    text: PropTypes.string,
    fileName: PropTypes.string,
    value: PropTypes.string,
    isFindPalindrome: PropTypes.bool,
    handleFileChosen: PropTypes.func,
    clearFile: PropTypes.func,
    findPalindrome: PropTypes.func
};

export default App;
