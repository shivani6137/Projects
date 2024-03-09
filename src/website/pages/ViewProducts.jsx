import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate,useParams} from 'react-router-dom';


function ViewProducts() {

    const redirect=useNavigate();

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch()
    },);


    const {cate_id}=useParams();
    const fetch = async () => {
        const res = await axios.get(`http://localhost:3000/services?cate_id=${cate_id}`);
        console.log(res.data);
        setData(res.data);
    }
  return (
    <div className="container-xxl py-2">
    <div className="container py-2 px-lg-5">
        
        <div className="wow fadeInUp" data-wow-delay="0.1s">
           <h1 className="text-center mb-5">Products</h1>
        </div>
        <div className="row g-4">
            {
                data.map((value, index) => {
                    return (
                        <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={index}>
                            <div className="service-item bg-light text-center p-5">
                                <img src={value.img} width="70%" height="200px" alt=""/>
                                <h4 className='text-dark mb-2 mt-2'>{value.name}</h4>
                                <h4 className="mb-0">Price: {value.price} Rs/kg</h4>
                                {/* <a className="btn btn-square" href="javascript:void(0)"><i className="fa fa-arrow-right" /></a> */}
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
</div>

  )
}

export default ViewProducts
