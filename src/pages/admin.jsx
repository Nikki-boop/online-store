import './styles/admin.css'

function Admin (){

    function handleCouponInput(e){
        console.log("val changed")
    }

    return(
        <div className="admin page">
            <h3>Store Management</h3>

            <div className="parent">
                <div className="products">
                    <h4>Manage Products</h4>
                    <div>
                        <label className='form-label'>Title</label>
                        <input className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'>Category</label>
                        <input className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'>Image</label>
                        <input className='form-control'></input>
                    </div>
                    <div>
                        <label className='form-label'>Price</label>
                        <input className='form-control'></input>
                    </div>
                    <div className="controls">
                        <button className='btn btn-outline-dark'>Save Product</button>
                    </div>
                </div>

                <div className="coupons">
                    <h4>Manage Coupons</h4>

                    <div>
                        <label className='form-label'>Code</label>
                        <input className='form-control' onChange={handleCouponInput}></input>
                    </div>
                    <div>
                        <label className='form-label'>Discount</label>
                        <input className='form-control'></input>
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