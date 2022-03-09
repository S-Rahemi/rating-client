import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import styled from 'styled-components';

const labels = {
  0.5: 'Useless',
  1: 'Weak',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

const LabelDiv = styled.div`
  color: gold;
  font-size:14px;
`;
const RatingDiv = styled(Rating)`
`;
export default function HoverRating(props) {
  const [value, setValue] = React.useState(4);
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        paddingTop: 1,
      }}
    >
      <RatingDiv
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          props.onChange(newValue);
          setValue(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 5 }} >
          <LabelDiv>{labels[hover !== -1 ? hover : value]}</LabelDiv>
          </Box>
      )}
    </Box>
  );
}