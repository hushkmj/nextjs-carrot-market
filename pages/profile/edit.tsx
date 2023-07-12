import Button from "@/components/button";
import Input from "@/components/input";
import Layout from "@/components/layout";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface EnterForm {
    email?: string;
    phone?: string;
}

const EditProfile: NextPage = () => {
    const { register, handleSubmit } = useForm<EnterForm>();
    const onValid = (data: EnterForm) => {
        console.log(data);
    }
    return (
        <Layout title="프로필 수정" canGoBack={true}>
            <form
                onSubmit={handleSubmit(onValid)}
                className="py-10 px-4 space-y-4"
            >
                <div className="flex items-center space-x-3">
                    <div className="w-14 h-14 rounded-full bg-slate-500" />
                    <label htmlFor="picture" className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700">
                        Change
                        <input type="file" id="picture" className="hidden" accept="image/*" />
                    </label>
                </div>
                <div className="space-y-1">
                    <Input
                        required
                        register={register("email")}
                        label="Email address"
                        name="email"
                        type="email"
                    />
                </div>
                <div className="space-y-1">
                    <Input
                        required
                        register={register("phone")}
                        label="Phone number"
                        name="phone"
                        type="number"
                        kind="phone"
                    />
                </div>
                <Button text="Update profile" />
            </form>
        </Layout >
    )
}

export default EditProfile;