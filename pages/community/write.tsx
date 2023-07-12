import Button from "@/components/button";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import { NextPage } from "next";

const Write: NextPage = () => {
    return (
        <Layout title="글쓰기" canGoBack={true}>
            <form className="px-4 py-10">
                <TextArea required placeholder="Ask a question!" />
                <Button text="Submit" />
            </form>
        </Layout>
    );
}

export default Write;