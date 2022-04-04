/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faUserGroup, faGear, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function detailPaket() {
    return (
        <><div class="container custom-box my-4 p-3 border rounded shadow">
            <div class="row">
                <div class="col-md-12">
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <p class="custom-fs-p">Tipe Driver</p>
                        </div>
                        <div class="col-md-3">
                            <p class="custom-fs-p">Tanggal</p>
                        </div>
                        <div class="col-md-3">
                            <p class="custom-fs-p">Waktu Jemput/Ambil</p>
                        </div>
                        <div class="col-md-3">
                            <p class="custom-fs-p">Jumlah Penumpang (Optional)</p>
                        </div>
                    </div>
                    <div class="row align-items-center">
                        <div class="col-md-3">
                            <select class="form-select form-control rounded px-2 border clickable" aria-label="Default select example">
                                <option selected>Pilih Tipe Driver</option>
                                <option value="1" class="text-muted">Dengan Sopir</option>
                                <option value="2" class="text-muted">Tanpa Sopir (Lepas Kunci)</option>
                            </select>
                        </div>
                        <div class="col-md-3">
                            <div class="inner-addon left-addon">
                                <input type="date" class="form-control px-2 clickable" placeholder="Pilih Tanggal" />
                            </div>
                        </div>
                        <div class="col-md-3">
                            <select class="form-control rounded px-2 border custom clickable">
                                <option value="1" class="text-muted">08.00 WIB</option>
                                <option value="2" class="text-muted">09.00 WIB</option>
                                <option value="2" class="text-muted">10.00 WIB</option>
                                <option value="2" class="text-muted">11.00 WIB</option>
                                <option value="2" class="text-muted">12.00 WIB</option>
                            </select>
                            <FontAwesomeIcon icon={faClock} className="text-muted ml-2 custom-errspan"/>
                        </div>
                        <div class="col-md-3">
                            <div class="inner-addon right-addon">
                                <input type="text" class="form-control px-2 clickable" placeholder="Jumlah Penumpang" />
                                <FontAwesomeIcon icon={faUserGroup} className="text-muted custom-errspan"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div><div class="container">
                <div class="row">
                    <div class="col-md-8 border">
                        <p class="font-weight-bold my-3">Tentang Paket</p>

                        <p>Include</p>
                        <ul>
                            <li>Apa saja yang termasuk dalam paket misal derasi 12 jam </li>
                            <li>Sudah termasuk bensin selama 12 jam</li>
                            <li>Sudah termasuk Tiket Wisata</li>
                            <li>Sudah termasuk pajak</li>
                        </ul>

                        <p>Exclude</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                        <p class="font-weight-bold">Refund, Reschedule, Overtime</p>
                        <ul>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya RP 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                            <li>Tidak termasuk biaya makan sopir 75.000/hari</li>
                            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                            <li>Tidak termasuk akomodasi penginapan</li>
                        </ul>
                    </div>

                    <div class="col-md-4">
                        <div class="card p-3 mb-4">
                            <img src={require("../images/image 1.png")} class="card-img-top" alt="Mobil"/>
                                <div class="card-body">
                                    <p class="card-text font-weight-bold">Nama/Tipe Mobil</p>
                                    <span class="card-text mr-1 text-muted"><span><FontAwesomeIcon icon={faUserGroup}/></span>&nbsp;4 Orang</span>
                                    <span class="card-text mr-1 text-muted"><span><FontAwesomeIcon icon={faGear}/></span>&nbsp;Manual</span>
                                    <span class="card-text text-muted "><span><FontAwesomeIcon icon={faCalendar}/></span>&nbsp;Tahun 2020</span>
                                    <div class="row mt-3">
                                        <div class="row w-100">
                                            <div class="col-md-6">
                                                <p class="text-left pl-3">Total</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="font-weight-bold text-right">Rp 430.000</p>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <span>
                                                <a href="/" class="btn btn-success w-100 py-2 text-center">
                                                    Pilih Mobil</a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
                <div class="d-flex justify-content-center mt-4">
                    <a href="/" class="btn btn-success w-25 py-2 text-center">Lanjutkan Pembayaran</a>
                </div>
            </div></>
    )
}
