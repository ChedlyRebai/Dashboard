import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import  Header  from '../components/Header';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: true };
  const handleSave = (args) => {
    
  };

  // Function to handle row deletion
  const handleDelete = (args) => {
   
  };

  // Function to handle adding new row
  const handleAdd = (args) => {
    console.log(args);
  };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        allowFiltering
        allowResizing
        allowDeleting
        allowTextWrap
        allowReordering
        allowRowDragAndDrop
        allowSelection
        allowGrouping
        allowKeyboard
        allowRow
        
        
        allowVirtualScrolling
     
        showColumnChooser
        allowRowHeightResizing
        allowCellSelection
        allowHeaderDragAndDrop
        
        
        toolbar={['Add', 'Edit', 'Delete', 'Update', 'Cancel', 'Search', 'ColumnChooser', 'PdfExport', 'ExcelExport', 'CsvExport']}
        
        // ... add more options as needed
      >
        <ColumnsDirective>
         
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}

          {/* Add new columns */}
          <ColumnDirective field='NewColumn' headerText='New Column' width='150' />
          {/* ... add more new columns */}
        </ColumnsDirective>
        <Inject services={[
          Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport,
          /* Add new services here if needed */
        ]} />
      </GridComponent>
    </div>
  );
};

export default Orders;
