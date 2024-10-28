import { useState } from 'react';
import './styles/admin.css'

function Admin (){

    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });

    function handleCouponInput(e){
        const val =  e.target.value;
        const name = e.target.name;

        console.log(name, val);

        // if (name === "code") {
            
        // }
    }


    return(
        <div className="admin page">
            <h3>Store Management</h3>

            <div className="parent">
                <div className="products">
                    <h4>Manage Products</h4>
                    <div>
                        <label className='form-label'>Title</label>
                        <input className='form-control' name="title" onChange={handleCouponInput}></input>
                    </div>
                    <div>
                        <label className='form-label'>Category</label>
                        <input className='form-control' name="category" onChange={handleCouponInput}></input>
                    </div>
                    <div>
                        <label className='form-label'>Image</label>
                        <input className='form-control' name="image" onChange={handleCouponInput}></input>
                    </div>
                    <div>
                        <label className='form-label'>Price</label>
                        <input className='form-control' name="price" onChange={handleCouponInput}></input>
                    </div>
                    <div className="controls">
                        <button className='btn btn-outline-dark'>Save Product</button>
                    </div>
                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>

                    <div>
                        <label className='form-label'>Code</label>
                        <input className='form-control' name="code" onChange={handleCouponInput}></input>
                    </div>
                    <div>
                        <label className='form-label'>Discount</label>
                        <input className='form-control' type='number' name="discount" onChange={handleCouponInput}></input>
                    </div>

                    <div className="controls">
                        <button className='btn btn-outline-dark'>Save Coupons</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Admin;