import { Blog } from "../hooks";
import { Appbar } from "./Appbar";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div className="grid grid-cols-12 px-10 w-full pt-200 max-w-screen-xl pt-12">
          <div className="col-span-8">
            <div className="text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">
              Posted on 16th October 2023
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="col-span-4">
            <div className="text-slate-600 text-lg">Author</div>
            <div className="flex w-full">
              <div className="pr-4 flex flex-col justify-center">
                <Avatar />
              </div>
              <div>
                <div className="text-xl font-bold">{blog.author.email}</div>
                <div className="pt-2 text-slate-500">
                  Witty remark about the author!
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Avatar() {
  return (
    <div>
      <div className="relative w-9 h-9 overflow-hidden bg-gray-300 rounded-full">
        <svg
          className="absolute w-10 h-10 text-gray-500 -left-0.5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
    </div>
  );
}
