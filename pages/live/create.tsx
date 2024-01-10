import type { NextPage } from "next";
import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import Title from "@/components/title";

const Create: NextPage = () => {
  return (
    <>
      <Title text="라이브 시작하기"/>
      <Layout canGoBack title="라이브 시작하기">
      <form className=" space-y-4 py-10 px-4">
        <Input required label="Name" name="name" type="text" />
        <Input
          required
          label="Price"
          placeholder="0.00"
          name="price"
          type="text"
          kind="price"
        />
          <TextArea name="description" label="Description" />
          <Button text="라이브 시작하기" />
        </form>
      </Layout>
    </>
  );
};

export default Create;