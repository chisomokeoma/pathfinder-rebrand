// import { allBlogs } from "@/.contentlayer/generated"
import AsideBlog from "@/components/blog/aside";
import SectionBlog from "@/components/blog/section";

export default function Blog() {
  // console.log(allBlogs);

  return (
    <main className="px-40 py-4 flex gap-8 mt-10">
      <aside>
        <AsideBlog />
      </aside>
      <section>
        <SectionBlog />
      </section>
    </main>
  );
}
