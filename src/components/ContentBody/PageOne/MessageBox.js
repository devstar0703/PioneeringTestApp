import * as React from 'react';

import tagStyled from 'styled-components';

import useWorkList from 'src/shared/hooks/useWorkList';

import { StyledButton, StyledTextField } from "src/shared/styled";

const MessageBox = () => {
    const [text, setText] = React.useState('');

    const {
        pushWorkReg
    } = useWorkList();

    const messageSent = () => {
        pushWorkReg(`Message Sent: ${text}`);
        setText('');
    }

    return (
        <MessageBoxMain>
            <StyledTextField
                multiline
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <StyledButton disabled={!text} onClick={messageSent}> Message Sent </StyledButton>
        </MessageBoxMain>
    )
}

export default MessageBox;

const MessageBoxMain = tagStyled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 10px;
    align-items : flex-end;
`