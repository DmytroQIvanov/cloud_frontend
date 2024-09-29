import React from "react";
import Wrapper from "@/_components/Wrapper/Wrapper";
import { headers } from "next/headers";

const Template = ({ children }: any) => {
  // const header = headers();
  // const ip = header;
  return (
    <Wrapper
    // ip={ip}
    // agent={header?.get("user-agent")}
    // forwarded={header?.get("user-agent")}
    >
      {children}
    </Wrapper>
  );
};

export default Template;
