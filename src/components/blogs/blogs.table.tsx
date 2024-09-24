'use client'

import { Pagination, Table } from 'antd'
import { IBlog } from '@/types/backend';
import type { ColumnsType } from 'antd/es/table';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';

interface IProps {
    blogs: IBlog[] | [];
    meta : {
        current : number;
        pageSize : number;
        total : number;
    }
}
const BlogsTable = (props: IProps) => {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const { blogs, meta } = props; //data


    const columns: ColumnsType<IBlog> = [
        {
            title: 'Id',
            dataIndex: 'id',

        },
        {
            title: 'Title',
            dataIndex: 'title',

        },
        {
            title: 'Author',
            dataIndex: 'author',

        },
        {
            title: 'Content',
            dataIndex: 'content',

        },
    ];

    const onChange = (pagination : any, filters : any, sorter : any, extra : any ) => {
        if(pagination && pagination.current) {
            const params = new URLSearchParams(searchParams);
            params.set('page', pagination.current);
            replace(`${pathname}?${params.toString()}`)
        }
    }
    return (
        <Table
            rowKey={"id"}
            bordered
            dataSource={blogs}
            columns={columns}
            onChange={onChange}
            pagination={
                {
                    ...meta, 
                    showTotal: (total, range) => {
                        return (<div>{range[0]} - {range[1]} trên {total} rows </div>)
                    }
                }
            }
        />
    )
}
export default BlogsTable;