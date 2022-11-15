import PageHead from '../../components/collection/pageHead/index';
import PageBody from '../../components/collection/pageBody/index';
import { useRouter } from 'next/router';
import { getCategories, getProductByCatagory } from '../../graphql';
import { client } from '../../apolloClient';




const Collections = ({sorting ,fiterQuery , listOFCagories , filteredProduct , pagiNationINfo}) => {
  return (
    <>
      <PageHead   title="Our All Collections" />
      <PageBody sorting = {sorting} pagiNationINfo={pagiNationINfo} filteredProduct={filteredProduct} list = {listOFCagories}  qureParamsArray={fiterQuery}  />
    </>
  );
};

export async function getServerSideProps(context) {
  const queryData = context.query
  const page = queryData["page"]
  const sorting = queryData?.sorting
  let catagories;
  if(Array.isArray(queryData["catagories"])){
    catagories = queryData["catagories"]
  }else if(!queryData["catagories"]){
    catagories = []
  }else{
    catagories = [queryData.catagories]
  }
  const { data : listOFCagories , loading , error} = await client
  .query({
    query: getCategories(),
  })
  listOFCagories.catagories = listOFCagories?.catagories.map(v => v?.name)

  //Product Sections

  const { data : filteredProduct}  = await client
  .query({
    query: getProductByCatagory(catagories , page , sorting),
  })

  let midifiedFilteredproduct;
  if(!filteredProduct["allProducts"]){
    midifiedFilteredproduct = []
  }else{
    midifiedFilteredproduct = filteredProduct["allProducts"];
  }
  let pagiNation;
  if(filteredProduct?.meta?.pagination){
    pagiNation = filteredProduct?.meta?.pagination
  }else{
    pagiNation = {}
  }

  return {
    props: {
      fiterQuery : catagories,
      listOFCagories : listOFCagories.catagories,
      filteredProduct : midifiedFilteredproduct,
      pagiNationINfo :  pagiNation,
      sorting : (sorting === undefined ?  "asc" : sorting)
      
      // 

   
    }, // will be passed to the page component as props
  }
}
export default Collections;
