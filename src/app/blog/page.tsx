import BlogsTable from "@/components/blogs/blogs.table";

const calculatePagesCount = (pageSize: number, totalCount: number) => {
    //nếu có 0 items thì vẫn có 1 page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
}

const BlogsPage = async (props: any) => {
    const LIMIT = 2;
    const page = props?.searchParams?.page ?? 1;

    const res = await fetch(
        `http://localhost:8000/blogs?_page=${page}&_limit=${LIMIT}`,
        {
            method: "GET"
        }
    );

    //tính tổng số blogs từ header
    const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
    //tính tổng total pages
    const totalPages = calculatePagesCount(LIMIT, total_items);
    const data = await res.json();
    console.log("check", props);


    return (
        <div>
            <BlogsTable
                blogs={data ? data : []}
                meta={
                    {
                        current: +page,
                        pageSize: LIMIT,
                        total: total_items
                    }
                }
            />
        </div>

    )
}

export default BlogsPage;