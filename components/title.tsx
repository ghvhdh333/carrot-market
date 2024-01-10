import Head from "next/head";

interface TitleProps {
    text?: string;
  }

export default function Title({text}: TitleProps){

    return (
        <Head>
            <title>당근 마켓 | {text}</title>
        </Head>
    )
}