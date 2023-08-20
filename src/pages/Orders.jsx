// import React from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

// import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
// import  Header  from '../components/Header';

// const Orders = () => {
//   const editing = { allowDeleting: true, allowEditing: true, };
//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Orders" />
//       <GridComponent
//         id="gridcomp"
//         dataSource={ordersData}
//         allowPaging
//         allowSorting
//         allowExcelExport
//         allowPdfExport
//         contextMenuItems={contextMenuItems}
//         editSettings={editing}
//       >
//         <ColumnsDirective>
//           {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//           {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
//       </GridComponent>
//     </div>
//   );
// };
// export default Orders;


import * as ReactDOM from 'react-dom';
import * as React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Toolbar, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
function Orders() {
  const toolbarOptions= ['Add', 'Edit', 'Delete'];
  const editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true, mode: 'Dialog' };
  const editparams = { params: { popupHeight: '300px' } };
  const validationRules = { required: true };
  const orderidRules = { required: true, number: true };
  const pageSettings = { pageCount: 5 };
  return (
    <div className='control-pane'>
      <div className='control-section'>
        <GridComponent dataSource={ordersData} toolbar={toolbarOptions} allowPaging={true} editSettings={editSettings} pageSettings={pageSettings}>
          <ColumnsDirective>
            <ColumnDirective field='image' headerText='Order ID' width='120' textAlign='Right' validationRules={orderidRules} isPrimaryKey={true}></ColumnDirective>
            <ColumnDirective field='item' headerText='Customer Name' width='150' validationRules={validationRules}></ColumnDirective>
            <ColumnDirective field='customer name' headerText='Freight' width='120' format='C2' textAlign='Right' editType='numericedit'></ColumnDirective>
            <ColumnDirective field='total amount' headerText='Order Date' editType='datepickeredit' format='yMd' width='170' ></ColumnDirective>
            <ColumnDirective field='status' headerText='Ship Country' width='150' editType='dropdownedit' edit={editparams} ></ColumnDirective>
          </ColumnsDirective>
          <Inject services={[Page, Toolbar, Edit]} />
        </GridComponent>
      </div>
    </div>
  );
}
export default Orders;