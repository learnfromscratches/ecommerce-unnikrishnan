import { DataGrid } from '@mui/x-data-grid';


export default function DataTable(props) {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={props.rows}
        getRowId={row => {
          return row._id;
        }}
        columns={props.columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
