import React from 'react';

import App from '../../components/App/App';

class AppContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            fileName: '',
            value: '',
            isFindPalindrome: false
        };

        this.reader = {};
    }

    handleFileReader = () => {
        const content = this.reader.result;

        this.setState({
            text: content
        });
    };

    handleFileChosen = (e) => {
        const { value } = e.target;
        const file = e.target.files[0];
        this.reader = new FileReader();
        this.reader.onload = this.handleFileReader;
        this.reader.readAsText(file);

        this.setState({
            fileName: file.name,
            value
        });
    };

    clearFile = () => {
        this.setState({
            text: '',
            fileName: '',
            value: '',
            isFindPalindrome: false
        });
    };

    findPalindrome = () => {
        this.setState({
            isFindPalindrome: true
        })
    };

    render() {
        const {
            text,
            fileName,
            value,
            isFindPalindrome
        } = this.state;

        return (
            <App
                text={text}
                fileName={fileName}
                value={value}
                isFindPalindrome={isFindPalindrome}
                handleFileChosen={this.handleFileChosen}
                clearFile={this.clearFile}
                findPalindrome={this.findPalindrome}
            />
        );
    }
}

export default AppContainer;
