import React from 'react';
import styled from "@emotion/styled";

import Image from "../../src/assets/logo.png";
import Quantity from "./Quantity";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;
  color: #fff;
  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const ShopDashing = ({ onAddSubscription, onRemoveSubscription, numSubscription }) => {
  return (
    <Shop>
      <ShopName>/stripe/dashing</ShopName>
      <Image src="../../src/assets/logo.png" width="100px"></Image>
      <Controls>
        <Quantity
          onAdd={onAddSubscription}
          onRemove={onRemoveSubscription}
          quantity={numSubscription}
        />
      </Controls>
    </Shop>
  );
};

export default ShopDashing;
