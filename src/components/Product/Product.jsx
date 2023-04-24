import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../BASE_URL/BASE_URL';
import { Avatar, Card } from 'antd';
import { Rate } from 'antd';
const { Meta } = Card;

const Product = () => {
    const [result, setResult] = useState([])
    useEffect(() => {
        axios.get(`${BASE_URL}/product`)
            .then((res) => { setResult(res.data) })
    }, [])
    
  const [value, setValue] = useState(1);
  const desc = ['вали', 'сваливай', 'ладно', 'ок', 'оставайся'];
    console.log(result)
    return (
        <div>
             <span>
      <Rate tooltips={desc} onChange={setValue} value={value} />
      {value ? <span className="ant-rate-text">{desc[value - 1]}</span> : ''}
    </span>
            {
                result.map(item =>
                    <div className="cont" style={{maxWidth:"300px", margin:'0 auto', display:'flex', flexWrap:'wrap' }}>


                        {/* <Card
                            title="Card title"
                            bordered={false}
                            style={{
                                width: 300,
                            }}
                        > <p>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.price}</p>
                        <img src={item.img_url} width='75px' alt="" />
                        </Card> */}
                        <div className="card">
                        <Card
                            style={{
                                width: 300,
                                border:"2px solid black",
                                marginTop:'40px',
                                // display:'flex'
                                

                            }}
                            cover={
                                <img
                                    alt="example"
                                    src={item.img_url}
                                />
                            }
                           
                        >
                            <Meta
                                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                                title={item.title}
                                description={item.desc}
                                price={item.price}
                            />
                        </Card>
                        </div>
                        
                    </div>
                    

                )
            }
        </div>
    );
};

export default Product;