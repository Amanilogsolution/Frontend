import React, { useState, useEffect } from 'react'
import Header from "../../Header/Header";
import Menu from "../../Menu/Menu";
import Footer from "../../Footer/Footer";
import { InsertCity, Activecountries } from '../../../api';
import { showactivestate } from '../../../api';

const Addcity = () => {
  const [selectCountry, setSelectCountry] = useState([]);
  const [selectState, setSelectState] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('india');
  const [selectedState, setSelectedState] = useState('india');

  useEffect(async () => {

    const result = await Activecountries()
    setSelectCountry(result)
  }, [])

  const handleClick = async () => {
    const city_id = document.getElementById('city_id').value;
    const city_name = document.getElementById('city_name').value;
    const User_id =localStorage.getItem("User_id");
    if (!city_id || !city_name) {
      alert('Enter data')
    }
    else {
      const result = await InsertCity(city_id, city_name, selectedState, selectedCountry,User_id);
      if (result == "Already") {
        alert('Already')
      } else {
        window.location.href = '/ShowCity'
      }
    }

  }
  const handleChangeCountry = async (e) => {
    let data = e.target.value
    setSelectedCountry(data)

    const statesresult = await showactivestate(data)
    setSelectState(statesresult)
  }
  const handleChangeState = async (e) => {
    let data = e.target.value
    setSelectedState(data)
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
              <br /> <h3 className="text-left ml-5">Add City</h3>
              <div className="row ">
                <div className="col ml-5">
                  <div className="card" style={{ width: "100%" }}>
                    <article className="card-body">
                      <form>
                        <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">Country Name</label>
                          <div className="col form-group">
                            <select
                              id="inputState"
                              className="form-control col-md-4"
                              onChange={handleChangeCountry}
                            >
                              <option selected hidden value="India">Choose Country</option>
                              {
                                selectCountry.map((data, index) => (
                                  <option key={index} value={data.country_name}>{data.country_name}</option>
                                ))

                              }
                            </select>
                          </div>
                          {/* form-group end.// */}
                        </div>

                        {/* <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">Country Id</label>
                          <div className="col form-group">
                            <input type="number" className="form-control col-md-4" id='country_id' />
                          </div>
                        </div> */}

                        <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">State Name</label>
                          <div className="col form-group">
                            <select
                              id="inputState"
                              className="form-control col-md-4"
                              onChange={handleChangeState}

                            >
                              <option selected hidden >Choose State</option>
                              {
                                selectState.map((data, index) => (
                                  <option key={index} value={data.state_name}>{data.state_name}</option>
                                ))

                              }
                            </select>
                          </div>
                          {/* form-group end.// */}
                        </div>
                        {/* 
                        <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">State Id</label>
                          <div className="col form-group">
                            <input type="number" className="form-control col-md-4" id='state_id' />
                          </div>
                        </div> */}

                        <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">City Id</label>
                          <div className="col form-group">
                            <input type="number" className="form-control col-md-4" id='city_id' />
                          </div>
                          {/* form-group end.// */}
                        </div>

                        <div className="form-row">
                          <label htmlFor="user_name" className="col-md-2 col-form-label font-weight-normal">City Name</label>
                          <div className="col form-group">
                            <input type="text" className="form-control col-md-4" id='city_name' />
                          </div>
                          {/* form-group end.// */}
                        </div>


                      </form>
                    </article>
                    {/* card-body end .// */}
                    <div className="border-top card-body">
                      <button className="btn btn-success" onClick={handleClick} >Save</button>
                      <button className="btn btn-light ml-3" onClick={() => { window.location.href = "./ShowState" }}>Cancel</button>
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


export default Addcity
