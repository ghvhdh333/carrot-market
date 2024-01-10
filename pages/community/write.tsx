import type { NextPage } from "next";
import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import Title from "@/components/title";

const Write: NextPage = () => {
  return (
    <>
      <Title text="질문하기"/>
      <Layout canGoBack title="질문하기">
        <form className="p-4 space-y-4">
          <TextArea required placeholder="무엇이든 질문해보세요!" />
          <Button text="제출하기" />
        </form>
      </Layout>
    </>
  );
};

export default Write;