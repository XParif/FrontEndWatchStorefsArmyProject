import styled from "styled-components";
import BlockText from "../../../shared/texts/BlockText";
import ProductSorting from "./ProductSorting";
import CardGroup from './../../../shared/cards/CardGroup';
import Pagination from './../../../shared/paginations/index';
import { useState } from "react";

const ProductSectionStyle = styled.div`
  width: 100%;
`;

const ProductController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({theme}) => theme?.color?.white};
  position: sticky;
  top: 4rem;
  z-index: 1;
`;

// const allProduct = [
//   {
//     id: 1,
//     title: "Watch 1",
//     rating: 5,
//     price: 200,
//     offerPrice: 100,
//   },
//   {
//     id: 2,
//     title: "Watch 2",
//     rating: 4,
//     price: 250,
//     offerPrice: 230,
//   },
//   {
//     id: 3,
//     title: "Watch 3",
//     rating: 5,
//     price: 150,
//     offerPrice: 145,
//   },
//   {
//     id: 4,
//     title: "Watch 4",
//     rating: 3,
//     price: 120,
//     offerPrice: 99,
//   },
//   {
//     id: 5,
//     title: "watch 5",
//     rating: 2,
//     price: 120,
//     offerPrice: 100,
//   },
//   {
//     id: 6,
//     title: "watch 6",
//     rating: 5,
//     price: 100,
//     offerPrice: 99,
//   },
//   {
//     id: 7,
//     title: "watch 7",
//     rating: 3,
//     price: 150,
//     offerPrice: 120,
//   },
//   {
//     id: 8,
//     title: "watch 8",
//     rating: 4,
//     price: 250,
//     price: 210,
//   },
//   {
//     id: 6,
//     title: "watch 6",
//     rating: 5,
//     price: 100,
//     offerPrice: 99,
//   },
//   {
//     id: 7,
//     title: "watch 7",
//     rating: 3,
//     price: 150,
//     offerPrice: 120,
//   },
//   {
//     id: 8,
//     title: "watch 8",
//     rating: 4,
//     price: 250,
//     price: 210,
//   },
//   {
//     id: 8,
//     title: "watch 8",
//     rating: 4,
//     price: 250,
//     price: 210,
//   },
// ];

const ProductSection = ({ sorting ,qureParamsArray,filteredProduct , pagiNationINfo}) => {
  const [uiState , setUiState] = useState(false)
  const { pageCount , page , pageSize , total } = pagiNationINfo
  return (
    <ProductSectionStyle>
      <ProductController>
        <ProductSorting  page={page} sorting = {sorting} qureParamsArray={qureParamsArray}   />
        <Pagination uiState={uiState} setUiState={setUiState} sorting= {sorting} qureParamsArray={qureParamsArray} totalPage={pageCount} page={page} />
        <BlockText size="md">Showing page-{!!page? page : 1} of {!!pageCount ? pageCount : 1 } Page(s)</BlockText>
      </ProductController>
      <CardGroup list={filteredProduct} />
      <ProductController>
        <Pagination setUiState={setUiState}  uiState={uiState} sorting= {sorting} qureParamsArray={qureParamsArray} totalPage={pageCount} page={page} />
        <BlockText size="md">Showing page-{!!page? page : 1} of {!!pageCount ? pageCount : 1 } Page(s)</BlockText>
      </ProductController>
    </ProductSectionStyle>
  );
};

export default ProductSection;
