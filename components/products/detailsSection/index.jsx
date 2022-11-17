import TitleBar from './titleBar/index';
import Details from './details/index';
import SingleTitle from './titleBar/SingleTitle';
import BlockText from '../../shared/texts/BlockText';
const DetailsSection = ({productInfo}) => {

    return(
        <>
            <TitleBar >
                <SingleTitle>Description</SingleTitle>
                <SingleTitle>Reviews</SingleTitle>
                {/* <SingleTitle>Policy</SingleTitle> */}
            </TitleBar>
            <Details>
            <BlockText size="md" line="lg">
                {JSON.stringify(productInfo.description)}
            </BlockText>
            </Details>
        </>
    )
}

export default DetailsSection