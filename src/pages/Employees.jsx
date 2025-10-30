import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective,  Page, Search, Inject, Toolbar} from '@syncfusion/ej2-react-grids'; 

import { employeesData, contextMenuItems, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-gray-800 dark:text-gray-200 rounded-3xl">
      <Header category="Page" title="Employees"/>
      <div className="w-full overflow-x-auto">
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={["Search"]}
        width="auto"
        allowResizing
        allowTextWrap



      
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (   
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[ Page, Search,Toolbar]} />
      </GridComponent>
      </div>
    </div>
  )
}

export default Employees