import '../App.css';
import React,{useState, useRef} from 'react';
import Rate from '../Components/Rate'
import styled from 'styled-components';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import TextField from '../Components/TextField'
import Tooltip from '@mui/material/Tooltip';
import call from '../API/ApiHelper';
const Container = styled.div`
  padding:250px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border: 3px solid #223344;
  flex-direction: column;
  `;
const StyledTextField = styled(TextField)`
  display:flex;
  border: 3px solid #223344;
`;
function Rating() {
const [rateVal, setRate] = useState(0);
const [error, setError] = useState(false);
const email = useRef();
const comment = useRef();
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};
const PostData = async ()=>{
  if (validateEmail(email.current.value)){
  setError(false);
  const uuid= sessionStorage.getItem("sessionId");
  await call('Post',()=>{},
  {
    sessionId: uuid,
    email: email.current.value,
    comment: comment.current.value,
    rate: rateVal
  });
  sessionStorage.setItem("email",email.current.value );
}
else 
setError(true);

}

  return (
    <div className="App">
      <React.Fragment>
      <Container>
          <p>
          Gamers rating system
            <span>
            Let Us Know Your Experience
            </span>
            Powered By XXX
          </p>
          <Rate onChange={setRate}/>          
          <StyledTextField error={error} label="Email" ref={email} />
          <StyledTextField label="comment"  ref={comment} />
          <Tooltip title="Submit">
            <IconButton onClick={()=>{PostData();}} aria-label="fingerprint" size="large" style={{ color: "yellow" }} >
              <Fingerprint fontSize='Large'/>
            </IconButton>
          </Tooltip>
      </Container>
      </React.Fragment>

    </div>
  );
}
export default Rating;
