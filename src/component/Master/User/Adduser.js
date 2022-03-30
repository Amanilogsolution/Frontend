import React from 'react'
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import {User} from '../../../api';

 const AddUser = () => {

    const handleClick = async(e) => {
        e.preventDefault();
        const employee_name = document.getElementById('employee_name').value;
        const role = document.getElementById('role').value;
        const warehouse = document.getElementById('warehouse').value;
        const user_name = document.getElementById('user_name').value;
        const password = document.getElementById('password').value;
        const email_id = document.getElementById('email_id').value;
        const phone = document.getElementById('phone').value;
        const operate_mode = document.getElementById('operate_mode').value;
        const customer = document.getElementById('customer').value;
        const reporting_to = document.getElementById('reporting_to').value;
        const designation = document.getElementById('designation').value;
        const tfa = document.getElementById('tfa').value;
        const result = await User(employee_name,role,warehouse,user_name,
          password,email_id,phone,operate_mode,customer,reporting_to,designation,tfa);
        if(result){
            window.location.href = '/ShowUser'
        }
    }
 
    return (
        <div>
        <div className="wrapper">
        <div className="preloader flex-column justify-content-center align-items-center">
            <div className="spinner-border" role="status"> </div>
          </div>
          <Header />
          <Menu />
          <div>
            <div className="content-wrapper">
              <div className="container-fluid">
                <br /> <h3 className="text-left ml-5">Add User</h3>
                <div className="row ">
                  <div className="col ml-5">
                    <div className="card" style={{ width: "100%" }}>
                      <article className="card-body">
                        <form>
                      
                          <div className="form-row">
                            <label htmlFor="employee_name" className="col-md-2 col-form-label font-weight-normal">employee_name</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='employee_name' placeholder ="employee_name"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="role" className="col-md-2 col-form-label font-weight-normal">role</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='role'  placeholder="role"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="warehouse" className="col-md-2 col-form-label font-weight-normal">warehouse</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='warehouse' placeholder ="warehouse"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">user_name</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='user_name'  placeholder="user_name"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
                          <div className="form-row">
                            <label htmlFor="password" className="col-md-2 col-form-label font-weight-normal">password</label>
                            <div className="col form-group">
                              <input type="password" className="form-control col-md-4" id='password' placeholder ="password"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="email_id" className="col-md-2 col-form-label font-weight-normal">email_id</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='email_id'  placeholder="email_id"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
                          <div className="form-row">
                            <label htmlFor="phone" className="col-md-2 col-form-label font-weight-normal">phone</label>
                            <div className="col form-group">
                              <input type="number" className="form-control col-md-4" id='phone' placeholder ="phone"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="operate_mode" className="col-md-2 col-form-label font-weight-normal">operate_mode</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='operate_mode'  placeholder="operate_mode"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
                          <div className="form-row">
                            <label htmlFor="customer" className="col-md-2 col-form-label font-weight-normal">customer</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='customer' placeholder ="customer"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="reporting_to" className="col-md-2 col-form-label font-weight-normal">reporting_to</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='reporting_to'  placeholder="reporting_to"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
                          <div className="form-row">
                            <label htmlFor="designation" className="col-md-2 col-form-label font-weight-normal">designation</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='designation' placeholder ="designation"/>
                            </div>
                            {/* form-group end.// */}
                          </div>
  
                          <div className="form-row">
                            <label htmlFor="tfa" className="col-md-2 col-form-label font-weight-normal">Two Factor Authentication</label>
                            <div className="col form-group">
                              <input type="text" className="form-control col-md-4" id='tfa'  placeholder='Two Factor Authentication'/>
                            </div>
                            {/* form-group end.// */}
                          </div>
    
  
                          
                        </form>
                      </article>
                      {/* card-body end .// */}
                      <div className="border-top card-body">
                        <button className="btn btn-success"onClick={handleClick} >Save</button>
                        <button className="btn btn-light ml-3" onClick={()=>{window.location.href="./ShowUser"}}>Cancel</button>
                      </div>
                    </div>
                    {/* card.// */}
                  </div>
                  {/* col.//*/}
                </div>
                {/* row.//*/}
              </div>   
            </div>
          </div>
          <Footer />
        </div>
      </div>
    )
 
}

export default AddUser