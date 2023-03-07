import * as React from 'react';
import useWorkList from 'src/shared/hooks/useWorkList';

import tagStyled from 'styled-components';
import { StyledButton } from 'src/shared/styled';

const ButtonList = () => {
    const {
        countOfBtn,
        pushWorkReg,

        changeCountofBtn
    } = useWorkList() ;

    const addButton = () => {
        pushWorkReg(`Button ${Number(countOfBtn)+1} was added.`);
        changeCountofBtn();
    }

    const clickButton = (index) => {
        pushWorkReg(`Button ${Number(index)+1} clicked.`);
    }

    return (
        <ButtonListMain>
            {
                [...Array(Number(countOfBtn))].map((item, index) => (
                    <StyledButton key={index} onClick={() => clickButton(index)}>Button {index + 1}</StyledButton>
                ))
            }
            <StyledButton
                onClick={addButton}
            >
                Add Button {Number(countOfBtn) + 1}
            </StyledButton>
        </ButtonListMain>
    )
}

export default ButtonList;

const ButtonListMain = tagStyled.div`
    padding-top : 10px;
    display : flex;
    flex-direction : column;
    gap : 10px;
`