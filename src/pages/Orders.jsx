import React, {useState ,useRef,useCallback} from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import  Header  from '../components/Header';
import { AgGridReact } from 'ag-grid-react';
const Orders = () => {
  const gridRef = useRef();
  const f = p => {
    alert(p)
  }
  const editing = { allowDeleting: true, allowEditing: true };
  const [rowData] = useState([
    {make: "Toyota", model: "Celica", price: 35000,},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxster", price: 72000},
    {make: "Toyota", model: "Celi", price: 35000},
    {make: "Ford", model: "Mon", price: 32000},
    {make: "Porsche", model: "Box ", price: 72000}
]);

const [defaultColDef,setDefaultColDef] = useState({
    sortable: true,
    filter: true,
    
    resizable: true,
    floatingFilter: true,
    editable: true,
    flex: 1,
    minWidth: 100,
    filterParams: {checkboxSelection: true,
      headerCheckboxSelection: true,
      buttons: ['reset', 'apply', 'cancel' , 'clear' , 'setFilter' ],
      closeOnApply: true,
      debounceMs: 0,
    }
});

const onBtnExport = useCallback(() => {
  gridRef.current.api.exportDataAsCsv();
}, []);


const [columnDefs,setColumnDefs] = useState([
    { field: 'make',filter:true,checkboxSelection: true,
    headerCheckboxSelection: true,
    
    filterParams: {
      buttons: ['reset', 'apply', 'cancel' , 'clear' , 'setFilter' ],
      closeOnApply: true,
      debounceMs: 0,
    }
  },
    { field: 'model',filter:true },
    { field: 'price' ,filter:'agNumberColumnFilter',}
]);

  return (
    <div className='-z-40 m-2 md:m-10 p-2 md:p-10 bg-slate-100 rounded-3xl'>
      <Header category='Orders' title='Orders' />
    <div className="ag-theme-alpine mx-auto bg-gray-100" style={{height: 400, width: 1000}}>
       <button onClick={onBtnExport}>Download CSV export file</button>
    <AgGridReact
    ref={gridRef}
        rowGroupPanelShow='always'
        rowData={rowData}
        sideBar={'columns'}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        enableRangeSelection={true}
        pagination={true}
        
        >
    </AgGridReact>
</div>
    </div>
  );
}

export default Orders
