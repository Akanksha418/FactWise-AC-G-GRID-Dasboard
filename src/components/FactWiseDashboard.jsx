import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

import { useState, useRef, useMemo, useCallback } from "react";
import { sampleData } from "../data/sampleData";

export default function FactWiseDashboard() {
  const gridRef = useRef(null);
  const [quickFilter, setQuickFilter] = useState("");
  const [pageSize, setPageSize] = useState(10);

  // Columns
  const columnDefs = useMemo(
    () => [
      { field: "id", headerName: "ID", sortable: true, filter: "agNumberColumnFilter", width: 90, pinned: "left" },
      { field: "name", headerName: "Name", sortable: true, filter: true, flex: 1 },
      { field: "company", headerName: "Company", sortable: true, filter: true, flex: 1 },
      { field: "role", headerName: "Role", sortable: true, filter: true, width: 150 },
      { field: "location", headerName: "Location", sortable: true, filter: true, width: 140 },
      { field: "experience", headerName: "Exp (yrs)", sortable: true, filter: "agNumberColumnFilter", width: 120 },
      {
        field: "salary",
        headerName: "Salary (USD)",
        sortable: true,
        filter: "agNumberColumnFilter",
        width: 140,
        valueFormatter: (params) =>
          params.value ? `$${Number(params.value).toLocaleString()}` : "",
      },
      { field: "status", headerName: "Status", sortable: true, filter: true, width: 120 },
    ],
    []
  );

  // Default column config
  const defaultColDef = useMemo(
    () => ({
      resizable: true,
      minWidth: 80,
      sortable: true,
      filter: true,
      floatingFilter: true,
    }),
    []
  );

  // Export CSV
  const onExport = useCallback(() => {
    gridRef.current.api.exportDataAsCsv({
      fileName: "factwise-dashboard-export.csv",
    });
  }, []);

  // Save column state
  const saveColumnState = useCallback(() => {
    const state = gridRef.current.columnApi.getColumnState();
    localStorage.setItem("fw_col_state", JSON.stringify(state));
    alert("Column state saved!");
  }, []);

  // Restore column state
  const restoreColumnState = useCallback(() => {
    const raw = localStorage.getItem("fw_col_state");
    if (!raw) return alert("No saved state found");

    const state = JSON.parse(raw);
    gridRef.current.columnApi.applyColumnState({ state, applyOrder: true });
    alert("Column state restored!");
  }, []);

  const onGridReady = useCallback(() => {}, []);

  return (
    <div className="dashboard-wrapper">
      {/* Toolbar */}
      <div className="toolbar">
        <div className="left">
          <input
            placeholder="Quick search..."
            value={quickFilter}
            onChange={(e) => setQuickFilter(e.target.value)}
            className="quick-input"
          />

          <select value={pageSize} onChange={(e) => setPageSize(Number(e.target.value))}>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>

        <div className="right">
          <button onClick={onExport}>Export CSV</button>
          <button onClick={saveColumnState}>Save Columns</button>
          <button onClick={restoreColumnState}>Restore Columns</button>
        </div>
      </div>

      {/* AG Grid */}
      <div className="ag-theme-alpine" style={{ width: "100%", height: "600px" }}>
        <AgGridReact
          ref={gridRef}
          rowData={sampleData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          animateRows={true}
          pagination={true}
          paginationPageSize={pageSize}
          onGridReady={onGridReady}
          quickFilterText={quickFilter}
        />
      </div>
    </div>
  );
}
