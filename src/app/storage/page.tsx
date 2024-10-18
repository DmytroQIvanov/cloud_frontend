import React from "react";
import FileList from "@/app/FileList";
import Wrapper from "@/_components/Wrapper/Wrapper";

const Page = () => {
  return (
    <div>
      <Wrapper>
        <FileList type={"cloud"} />
      </Wrapper>
    </div>
  );
};

export default Page;
