import { Comment, List } from "antd";
import React from "react";


export const ProductComments = ({ data }) => {
    return (
        <List
            dataSource={data}
            // 竖排列
            itemLayout="horizontal"
            renderItem={(item) => {
                return (
                    <li>
                        <Comment
                            author={item.author}
                            avatar={item.avatar}
                            content={item.content}
                            datetime={item.createDate}
                        />
                    </li>
                );
            }}
        ></List>
    );
}