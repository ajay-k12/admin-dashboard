import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'
import { ordersData, contextMenuItem, ordersGrid } from '../data/dummy';
import { Header } from '../components';

function Orders() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 pt-24 bg-white rounder-3xl'>
      <Header category="Page" title="Orders" />
      <GridComponent id='gridcomp' dataSource={ordersData} allowPaging={true} allowSorting={true}>
        <ColumnsDirective>
          { ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders