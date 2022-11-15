import { useReactiveVar } from "@apollo/client";
import { Loading2 } from "../../apolloClient";
import LoadingStyle from "./Loading.styled";
import Image from "next/image";

const AnotherLoading = () => {
  const Loading = useReactiveVar(Loading2);
  if (Loading) {
    return (
      <LoadingStyle>
        <Image src="/buttonLoading.svg" alt="Button Loading" width={200} height={200} />
      </LoadingStyle>
    );
  }
};

export default AnotherLoading;
