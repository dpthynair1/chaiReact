import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from "../index";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function PostForm({ post }) {
  console.log("Post in postform from editpost:::: ", post);
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData", userData);

  const submit = async (data) => {
    console.log("data", data);
    if (post) {
      console.log("post from submit in postform", post);
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      console.log("file from submit in postform", file);
      if (file) {
        console.log("file from submit in postform 1", file);
        console.log("post from submit in postform", post.featuredImage);
        await appwriteService.deleteFile(post.featuredImage);
      }
      console.log("dbpost1");
      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      console.log("dbpost2", dbPost);
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });
        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return (
        value
          .trim()
          .toLowerCase()
          // .replace(/^[a-zA-Z\d\s]+/g, "-")
          .replace(/\s/g, "-")
      );

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue(
          "slug",
          slugTransform(value.title, {
            shouldValidate: true,
          })
        );
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap"
    >
      <div className="w-2/3 px-2">
        <Input
          label={<span className="text-white">Title :</span>}
          placeholder="Title"
          className="mb-4 py-4"
          {...register("title", { required: true })}
        />
        <Input
          label={<span className="text-white">Slug :</span>}
          placeholder="Slug"
          className="mb-4 py-4"
          {...register("slug", {
            required: true,
          })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        />

        <RTE
          label={<span className="text-white">Content :</span>}
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>

      <div className="w-1/3 px-2">
        <Input
          label={<span className="text-white">Featured Image :</span>}
          type="file"
          className="mb-4 py-3"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />

        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
            {console.log("came here")}
            {console.log(post.title)}
            {console.log(appwriteService.getFilePreview(post.featuredImage))}
          </div>
        )}

        <Select
          label={<span className="text-white">Status :</span>}
          options={["active", "inactive"]}
          className="mt-2 py-4"
          {...register("status", { required: true })}
        />

        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : "bg-black"}
          className="w-full mt-12 py-4"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}

export default PostForm;
