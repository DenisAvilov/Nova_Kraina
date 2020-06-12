import * as React from 'react'
import d from './Pagination.module.css'


export const Pagination = (props,  ) => {
let { totalCount, viewCountPage, page, pagination}  = props;

let count = 15 , //  default: 10 - maximum: 100 
    allPage = 0, viwePage = [], portion = 0, paginationCountProps = 15, leftPortionBorder = 0, rightPortionBorder = 0 ;


allPage = Math.ceil(totalCount / count);

portion = Math.ceil(allPage / paginationCountProps);
let [modePage , setModePage] = React.useState(1)
leftPortionBorder = ( modePage - 1) * paginationCountProps + 1
rightPortionBorder =  modePage * paginationCountProps

let readCount = (e) => {     
    viewCountPage(e)
    pagination(e)
}

for(let i = 1; i < allPage; i++ ){   
     viwePage.push( i )
}

  return(<div className={d.pagination}>
  {/* <p>{totalCount }  раздельть на { count}, получится { allPage } страниц</p>   */}
  <span onClick={() => setModePage(modePage - 1)}   className={ leftPortionBorder == 1 && d.hidden}  > Назад </span>
      { viwePage.filter(filter =>  filter >= leftPortionBorder &  filter <= rightPortionBorder).map(
          (p) => <span className={ page == p ?  d.pagination_current : d.pagination_item} onClick={ () => readCount(p)} key={p}>{ p }</span> ) }    
      { portion >  paginationCountProps  &&  <span onClick={() => setModePage(modePage + 1)} > Дальше </span> } 
  </div>)
}