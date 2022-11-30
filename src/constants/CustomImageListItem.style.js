import styled from "@emotion/styled";
import ImageListItem from '@mui/material/ImageListItem';

export const CustomImageListItem = styled(ImageListItem)`
    /* grid-column : ${(props)=> props.grid};     */
    ${((props) => props.grid && 
        "grid-column: 1 / -1 !important"
    )}
`;