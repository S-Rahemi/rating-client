import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const TF = styled(TextField)(
    {
        '& label.Mui-focused': {
            color: '#a8a249',
          },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#a8a249',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'gray',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'gold',
            },
        },
    });
const TextInput = React.forwardRef((props,ref) => {
      return(
        <Box paddingTop={2} paddingBottom={2}>
            <TF onClick={(e,n)=>{props.onClick(false);}} error={props.error} label={props.label} inputRef={ref}  multiline={props.multiline} maxRows={5} color="success" size="small"/>
        </Box>
      );
    });
export default TextInput;