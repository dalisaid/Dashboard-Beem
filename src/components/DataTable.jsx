import React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

export const DataTable = ({ rows, columns }) => {

  return (
    <div style={{ height: 750, width: '100%', marginTop: '10px' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
            pagination: {
              paginationModel: {
                pageSize: 12,
              },
            },
          }}
          
          checkboxSelection
          disableRowSelectionOnClick
          slots={{ toolbar: GridToolbar }} />
            
    </div>
  );
};
