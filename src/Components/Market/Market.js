import React, { useContext, useEffect, useMemo, useState } from "react";
import ApiContext from "../Api/UseContextApi";
import "./Market.css";
import { AgGridReact, containerStyle } from "ag-grid-react";
import dataNew from "./dataNew";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import 'ag-grid-enterprise';

export default function Market() {
  const { data } = useContext(ApiContext);
  console.log("MARKET === ", data);

  const containerStyle = useMemo(
    () => ({
      width: "90%",
      height: "100%",
      margin: "auto",
      marginTop: "100px",
    }),
    []
  );
  // const gridStyle = useMemo(() => ({ height: '100%', width: '10%' }), []);

  const [rowData, setRowData] = useState(data);

  const [colDefs, setColDefs] = useState([
    { field: "rank", editable: "false" },
    { field: "symbol", editable: "false" },
    { field: "name", editable: "false" },
    { field: "price", editable: "false" },
    {
      field: 'sparkline',
      headerName: 'Price History',
      cellRenderer: 'agSparklineCellRenderer',
    },
    { field: "marketCap", editable: "false" },
    { field: "change", editable: "false" },
    { field: "24hVolume", editable: "false" },
  ]);

  // var autoGroupColumnDef = {
  //   headerName: 'sparkline',
  //   minWidth: 170,
  //   field: 'price',
  //   valueGetter: (params) => {
  //     if (params.sparkline) {
  //       return parseFloat(params.sparkline);
  //     } else {
  //       return params.data[params.colDef.field];
  //     }
  //   },
  // }

  // useEffect(()=>{
  //   if (data != null || data != ''){
  //   setRowData((p)=>{
  //     return {...p,[p[1].sparkline]:parseInt(p[1].sparkline)}})
  //   console.log("useEFFECT if= ",data)}
  //   else{
  //     setRowData(data)
  //     console.log("useEFFECT else= ",data)
  //   }
  // },[data])

  function onBtExport() {
    colDefs.api.exportDataAsExcel();
  }

  useEffect(() => {
    setRowData(data);
  }, [data]);

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      minWidth: 100,
      resizable: true,
      sortable: true,
      filter: true,
      editable: true,
      enableRowGroup: true,
      enablePivot: true,
      enableValue: true,
      resizable: true,
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div style={{ marginBottom: "20px", fontSize: "40px" }}>
        Market Data from API:
      </div>
      <div
        className="ag-theme-alpine"
        style={{
          height: "500px",
          // width: '600px'
        }}
      >
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          defaultColDef={defaultColDef}
          rowHeight={50}
          pagination={true}
          paginationPageSize={10}
          // onGridReady={onGridReady}
          // autoGroupColumnDef={autoGroupColumnDef}
        ></AgGridReact>
      </div>
    </div>
  );
}
