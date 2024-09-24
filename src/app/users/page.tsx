import UsersTable from "@/components/users/users.table";

const UsersPage = async (props: any) => {

    const calculatePagesCount = (pageSize: number, totalCount: number) => {
        return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
    }
    const LIMIT = 5;
    const page = props?.searchParams?.page ?? 1;

    const res = await fetch(
        `http://localhost:8000/users?_page=${page}&_limit=${LIMIT}`,
        {
            method: "GET",
            next: { tags: ['list-users'] }  //mỗi lần tạo mới người dùng thành công thì revalidateTag chỉ fetch lại list-users
        });
    const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
    const totalPages = calculatePagesCount(LIMIT, total_items)

    const data = await res.json();
    console.log(">><<<check props", props);


    return (
        <div>
            {/* cha của thằng table đây  */}
            <UsersTable
                users={data ? data : []}
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

export default UsersPage;