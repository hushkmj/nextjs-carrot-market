import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import TextArea from "@/components/textarea";
import type { NextPage } from "next";
import { useForm } from "react-hook-form";

const Upload: NextPage = () => {
    const { register, handleSubmit } = useForm();
    return (
        <Layout title="라이브 시작하기" canGoBack={true}>
            <form className="space-y-5 py-10 px-4">
                <Input required register={register("name")} label="Name" name="name" type="text" />
                <Input
                    required
                    register={register("price")}
                    label="Price"
                    // placeholder="0.00"
                    name="price"
                    type="text"
                    kind="price"
                />
                <TextArea name="description" label="Description" />
                <Button text="Go live" />
            </form>
        </Layout>
    );
};

export default Upload;