import { useState } from "react";
import styled from "styled-components";
import BlockText from "../shared/texts/BlockText";
import { InputField, InputForm, InputLabel } from "./common";

const RegisterFormContainer = styled.div`
  width: 900px;
`;

const SectionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  margin: 5px;
`;

const AddressForm = ({handleChange}) => {
  return (
          <Section>
            <BlockText style={{textAlign : "center"}} >
                {`তর বাড়ি কই? তর নাম , ঠিকানা দে >>>  `}
            </BlockText>
            <InputLabel>
              {"Address : "}
              <InputField
                type="text"
                id="address"
                name="address"
                placeholder="Your Address"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"streetAddress : "}
              <InputField
                type="text"
                id="streetAddress"
                name="streetAddress"
                placeholder="streetAddress"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"City : "}
              <InputField
                type="text"
                id="city"
                name="city"
                placeholder="City"
                required
                onChange={handleChange}
              />
            </InputLabel>
            <InputLabel>
              {"state_Province_Region : "}
              <InputField
                type="text"
                id="state_Province_Region"
                name="state_Province_Region"
                placeholder="state_Province_Region"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"Zip Code : "}
              <InputField
                type="number"
                id="zipCode"
                name="zipCode"
                placeholder="zipCode"
                onChange={handleChange}
                required
              />
            </InputLabel>
            <InputLabel>
              {"Country : "}
              <InputField
                type="text"
                id="country"
                name="country"
                placeholder="Country"
                onChange={handleChange}
                required
              />
            </InputLabel>
          </Section>

  );
};

export default AddressForm;
