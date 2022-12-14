import styled from "@emotion/styled";
import ImageListItem from '@mui/material/ImageListItem';
import { css } from "@emotion/react";

export const CustomImageListItem = styled(ImageListItem)`
    /* grid-column : ${(props)=> props.grid};     */
    .image{
        object-fit:fill;
        width:250px; 
        height:300px;
        margin-top:10px
    }

    ${((props) => props.grid && css`
        grid-column: 1 / -1 !important;
        flex-direction: row;
        
        .image{
            width:300px; 
            height:300px;
        }
    ` 
    )}
`;