import React from 'react'
import { Image, Typography } from "antd";
import { withRouter } from "react-router-dom";

const ProductImage2 = ({ id, size, imageSrc, price, title, history, location, match }) => {
    //   console.log('history',history)
    //   console.log('location',location)
    //   console.log('match',match)
    // console.log(id)
    return (
        <div onClick={() => history.push(`detail/${id}`)} >
            {size == "large" ? (
                <Image src={imageSrc} height={285} width={490} />
            ) : (
                <Image src={imageSrc} height={120} width={240} />
            )}
            <div>
                <Typography.Text type="secondary">
                    {title.slice(0, 25)}
                </Typography.Text>
                <Typography.Text type="danger" strong>
                    ¥ {price} 起
                </Typography.Text>
            </div>
        </div>
    );
}
export const ProductionImg = withRouter(ProductImage2);