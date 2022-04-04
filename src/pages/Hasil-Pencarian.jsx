/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faUserGroup, faGear, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function hasilPencarian() {
    return (
        <><div className="container custom-box my-4 p-3 m-auto border rounded shadow">
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
                            <select className="form-select form-control rounded px-2 border clickable" aria-label="Default select example">
                                <option selected>Pilih Tipe Driver</option>
                                <option value="1" className="text-muted">Dengan Sopir</option>
                                <option value="2" className="text-muted">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div className="col-md-3">
                            <div className="inner-addon left-addon">
                                <input type="date" className="form-control px-2 clickable" placeholder="Pilih Tanggal" />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select className="form-control rounded px-2 border custom clickable">
                                <option value="1" className="text-muted">08.00 WIB</option>
                                <option value="2" className="text-muted">09.00 WIB</option>
                                <option value="2" className="text-muted">10.00 WIB</option>
                                <option value="2" className="text-muted">11.00 WIB</option>
                                <option value="2" className="text-muted">12.00 WIB</option>
                            </select>
                            <FontAwesomeIcon icon={faClock} className="text-muted ml-2 custom-errspan"/>
                        </div>
                        <div className="col-md-3">
                            <div className="inner-addon right-addon">
                                <input type="text" className="form-control px-2 clickable" placeholder="Jumlah Penumpang" />
                                <FontAwesomeIcon icon={faUserGroup} className="text-muted custom-errspan"/>
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
                                <button class="btn custom-btn-car font-weight-bold mr-2 unclickable">Edit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div><div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card p-3 mb-4">
                            <img src={require("../images/image 1.png")} className="card-img-top" alt="Mobil"/>
                                <div className="card-body">
                                    <p className="card-text">Nama/Tipe Mobil</p>
                                    <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor ea consequuntur. Adipisci quasi dolore amet error fuga, qui molestiae temporibus, dolores eveniet voluptate rem voluptatibus ad iste magnam similique.
                                    </p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faUserGroup}/></span>&nbsp;4 Orang</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faGear}/></span>&nbsp;Manual</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faCalendar}/></span>&nbsp;Tahun 2020</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <span>
                                                <a href="/detail-paket" className="btn btn-success w-100 py-2 text-center">
                                                    Pilih Mobil</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-3 mb-4">
                            <img src={require("../images/image 1.png")} className="card-img-top" alt="Mobil"/>
                                <div className="card-body">
                                    <p className="card-text">Nama/Tipe Mobil</p>
                                    <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor ea consequuntur. Adipisci quasi dolore amet error fuga, qui molestiae temporibus, dolores eveniet voluptate rem voluptatibus ad iste magnam similique.
                                    </p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faUserGroup}/></span>&nbsp;4 Orang</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faGear}/></span>&nbsp;Manual</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faCalendar}/></span>&nbsp;Tahun 2020</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <span>
                                                <a href="/detail-paket" className="btn btn-success w-100 py-2 text-center">
                                                    Pilih Mobil</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-4">
                        <div className="card p-3 mb-4">
                            <img src={require("../images/image 1.png")} className="card-img-top" alt="Mobil"/>
                                <div className="card-body">
                                    <p className="card-text">Nama/Tipe Mobil</p>
                                    <p className="card-text font-weight-bold text-dark"> Rp 430.000 / hari</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolor ea consequuntur. Adipisci quasi dolore amet error fuga, qui molestiae temporibus, dolores eveniet voluptate rem voluptatibus ad iste magnam similique.
                                    </p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faUserGroup}/></span>&nbsp;4 Orang</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faGear}/></span>&nbsp;Manual</p>
                                    <p className="card-text"><span className="text-muted"><FontAwesomeIcon icon={faCalendar}/></span>&nbsp;Tahun 2020</p>
                                    <div className="row">
                                        <div className="col-12">
                                            <span>
                                                <a href="/detail-paket" className="btn btn-success w-100 py-2 text-center">
                                                    Pilih Mobil</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div></>
    )
}
