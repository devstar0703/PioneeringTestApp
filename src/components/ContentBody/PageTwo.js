import * as React from 'react';

import tagStyled from 'styled-components';

import { StyledButton } from "src/shared/styled";

import CTAModal from './PageTwo/CTAModal';
import DeleteModal from './PageTwo/DeleteModal';
import RemoveModal from './PageTwo/RemoveModal';

const PageTwo = () => {
    const btnRef = React.useRef();

    const [removed_count, setRemovedCnt] = React.useState(0);
    const [clicked_count, setClickedCount] = React.useState(0);

    const [openCTA, setOpenCTA] = React.useState(false);
    const [openRemove, setOpenRemove] = React.useState(false);
    const [openDelete, setOpenDelete] = React.useState(false);

    const handleOpenCTA = () => { setOpenCTA(true) }
    const handleCloseCTA = () => { setOpenCTA(false) }

    const handleOpenRemove = () => { setOpenRemove(true); setRemovedCnt(removed_count); }
    const handleCloseRemove = () => { setOpenRemove(false); }
    
    const handleOpenDelete = () => { 
        setOpenDelete(true);
    }

    const handleCloseDelete = () => { 
        setOpenDelete(false);
        setClickedCount(clicked_count+1);
     }

    const removeClicked = () => { setRemovedCnt(removed_count + 1); }
    const deleteClicked = () => {
        if(btnRef.current.innerText.search('Delete') >= 0) {
            btnRef.current.innerText = `Disabled ${clicked_count}`;
            return;
        }
        if(btnRef.current.innerText.search('Disabled') >= 0) btnRef.current.innerText = `Delete ${clicked_count}`;
    }

    return (
        <PageTwoMain>
            <StyledButton
                onClick={handleOpenCTA}
            >
                Single CTA
            </StyledButton>
            <StyledButton
                onClick={handleOpenRemove}
            >
                Remove {removed_count}
            </StyledButton>
            <StyledButton
                onClick={handleOpenDelete}
                ref={btnRef}
            >
                Delete {clicked_count}
            </StyledButton>

            <CTAModal 
                open={openCTA}
                handleClose={handleCloseCTA}
            />
            <RemoveModal
                open={openRemove}
                handleClose={handleCloseRemove}
                count={removed_count}
                clickEvent={removeClicked}
            />
            <DeleteModal
                open={openDelete}
                handleClose={handleCloseDelete}
                btnRef={btnRef}
                clickEvent={deleteClicked}
            />
        </PageTwoMain>
    )
}

export default PageTwo;

const PageTwoMain = tagStyled.div`
    display : flex;
    gap : 20px;
    flex-wrap : wrap;
`