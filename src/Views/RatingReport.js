import React, { useEffect, useState } from 'react';
import '../App.css';
import call from '../API/ApiHelper';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'email', headerName: 'Email', width: 270 },
    { field: 'comment', headerName: 'Comment', width: 550 },
    { field: 'rate', headerName: 'Rate', width: 130 },
];

const GridDiv = styled.div`
    background-Color: #ffffff;
    height: 100%;
    width: 100%;
    display: block;
  justify-content: center;
  .MuiDataGrid-row{
      font-weight:500;
      font-size:16px;
  }
  .MuiDataGrid-columnHeaderTitle{
    font-weight:700;
    font-size:16px;
  }
    `;
export default function DataTable() {
    const [res, setRes] = useState([]);
    async function GetData() {
        await call('Get', setRes);
    }
    useEffect(() => {
        GetData();
    }, []);

    return (
        <GridDiv>
            <DataGrid
                rows={res}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[1]}
                checkboxSelection
                autoHeight
                density='comfortable'
                
            />


        </GridDiv>
    );
}