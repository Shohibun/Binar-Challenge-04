/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faUserGroup,
  faGear,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";
import img from "../images/Infinity-1s-200px.svg";

export default function HasilPencarian(props) {
  const [dataMobil, setDataMobil] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    const responds = await axios
      .get("https://rent-cars-api.herokuapp.com/customer/car")
      .catch((err) => {
        console.log(err);
      });
    setDataMobil(responds.data);
    console.log(dataMobil);
    setLoading(false);
  };
  useEffect(() => {
    window.scroll(0, 0);
    //Langsung manggil dataMobil (hal pertama yang dilakukan)
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Memanggil fetchData sekali saja
  return (
    <>
      {loading === true ? (
        <>
          <div className="text-center">
            <img src={img} alt="" srcset="" />
          </div>
        </>
      ) : (
        <>
          <div className="container custom-box my-4 p-3 m-auto border rounded shadow">
            <div className="row">
              <div className="col-md-10">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <p className="custom-fs-p">Tipe Driver</p>
                  </div>
                  <div className="col-md-3">
                    <p className="custom-fs-p">Tanggal</p>
                  </div>
                  <div className="col-md-3">
                    <p className="custom-fs-p">Waktu Jemput/Ambil</p>
                  </div>
                  <div className="col-md-3">
                    <p className="custom-fs-p">Jumlah Penumpang (Optional)</p>
                  </div>
                  <div className="col-md-3">
                    <p className="custom-fs-p"></p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <select
                      className="form-select form-control rounded px-2 border clickable"
                      aria-label="Default select example"
                    >
                      <option selected>Pilih Tipe Driver</option>
                      <option value="1" className="text-muted">
                        Dengan Sopir
                      </option>
                      <option value="2" className="text-muted">
                        Tanpa Sopir (Lepas Kunci)
                      </option>
                    </select>
                  </div>
                  <div className="col-md-3">
                    <div className="inner-addon left-addon">
                      <input
                        type="date"
                        className="form-control px-2 clickable"
                        placeholder="Pilih Tanggal"
                      />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <select className="form-control rounded px-2 border custom clickable">
                      <option value="1" className="text-muted">
                        08.00 WIB
                      </option>
                      <option value="2" className="text-muted">
                        09.00 WIB
                      </option>
                      <option value="2" className="text-muted">
                        10.00 WIB
                      </option>
                      <option value="2" className="text-muted">
                        11.00 WIB
                      </option>
                      <option value="2" className="text-muted">
                        12.00 WIB
                      </option>
                    </select>
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-muted ml-2 custom-errspan"
                    />
                  </div>
                  <div className="col-md-3">
                    <div className="inner-addon right-addon">
                      <input
                        type="text"
                        className="form-control px-2 clickable"
                        placeholder="Jumlah Penumpang"
                      />
                      <FontAwesomeIcon
                        icon={faUserGroup}
                        className="text-muted custom-errspan"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <div className="row align-items-center">
                  <div className="col-md-12">
                    <p className="custom-fs-p">&nbsp;</p>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-12 pt-3">
                    <form>
                      <button class="btn custom-btn-car font-weight-bold mr-2 unclickable">
                        Edit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              {dataMobil.map((pencarian) => {
                return (
                  <div className="col-md-4">
                    <div className="card p-3 mb-4">
                      <img
                        src={`${pencarian.image}`}
                        className="card-img-top"
                        alt="Mobil"
                      />
                      <div className="card-body">
                        <p className="card-text">{pencarian.name}</p>
                        <p className="card-text font-weight-bold text-dark">
                          {" "}
                          Rp {pencarian.price} / hari
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Nesciunt dolor ea consequuntur. Adipisci quasi
                          dolore amet error fuga, qui molestiae temporibus,
                          dolores eveniet voluptate rem voluptatibus ad iste
                          magnam similique.
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faUserGroup} />
                          </span>
                          &nbsp;4 Orang
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faGear} />
                          </span>
                          &nbsp;Manual
                        </p>
                        <p className="card-text">
                          <span className="text-muted">
                            <FontAwesomeIcon icon={faCalendar} />
                          </span>
                          &nbsp;Tahun 2020
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <span>
                              <Link
                                to={`/detail-paket/${pencarian.id}`}
                                className="btn btn-success w-100 py-2 text-center"
                              >
                                Pilih Mobil
                              </Link>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}