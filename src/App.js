import './App.css';
import React, { Fragment, useState, useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ROUTES_PATH from './Routes/routesConstants';
import Rating from './Views/Rating'
import RatingReport from './Views/RatingReport'
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';

function App() {
  useEffect(()=>{
    const uuid = uuidv4();
    sessionStorage.setItem("sessionId",uuid);  
  },[]);
  return (
    <div>
      <header className="App-header">
        <PopupState variant="popover" popupId="popup-menu">
          {(popupState) => (
            <React.Fragment>
              <Button variant="contained" {...bindTrigger(popupState)}>
                Main Menu
              </Button>
              <Menu  {...bindMenu(popupState)}>
                <MenuItem component={Link} to="/" onClick={popupState.close}>Rate Your Game</MenuItem>
                <MenuItem component={Link} to="/report" onClick={popupState.close}>Report</MenuItem>
              </Menu>
            </React.Fragment>
          )}
        </PopupState>
      </header>

      <Routes>
        <Route path={ROUTES_PATH.rating} element={<Rating />} />
        <Route path={ROUTES_PATH.report} element={<RatingReport />} />
      </Routes>
    </div>
  );
}
export default App;
