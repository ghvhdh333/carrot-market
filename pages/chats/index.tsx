import type { NextPage } from "next";
import Link from "next/link";
import Layout from "@/components/layout";
import Title from "@/components/title";

const Chats: NextPage = () => {
  return (
    <>
      <Title text="채팅"/>
      <Layout title="채팅" hasTabBar>
        <div className="divide-y-[1px] ">
          {[1, 1, 1, 1, 1, 1, 1].map((_, i) => (
            <Link href={`/chats/${i}`} key={i} className="flex px-4 cursor-pointer py-3 items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">Steve Jebs</p>
                <p className="text-sm  text-gray-500">
                  See you tomorrow in the corner at 2pm!
                </p>
              </div>
          </Link>
          ))}
        </div>
      </Layout>
    </>
  );
};

export default Chats;