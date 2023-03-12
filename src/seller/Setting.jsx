import React, { useState } from 'react';
import './seller.css'

function Setting(props) {
    const [dokon, setDokon] = useState('')
    const [logo, setLogo] = useState('')
    const [tel, setTel] = useState('')
    const [manzil, setManzil] = useState('')
    const [meta, setMeta] = useState('')
    const [meta1, setMeta1] = useState('')
    const [baner, setBaner] = useState('')
    const [facebook, setFacebook] = useState('')
    const [google, setGoogle] = useState('')
    const [instagram, setInstagram] = useState('')
    const [twitter, setTwitter] = useState('')
    const [youtube, setYoutube] = useState('')
    return (
        <div className='setting'>
            <div className='dokon'>
                <h5>Do'kon sozlamalari</h5>
            </div>
            <div className='dokon2'>
                <div className='asosiy'>
                    <h5>Asosiy ma'lumotlar</h5>
                </div>
                <div class="card-body">
                    <form>
                        <div className="row">
                            <label className="col-md-2 col-form-label">Do'kon nomi<span className="text-danger text-danger">*</span></label>
                            <div className="col-md-10">
                                <input type="text" className="form-control mb-3" placeholder="Do'kon nomi" value={dokon} onChange={(e) => { setDokon(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <label className="col-md-2 col-form-label">Do'kon logotipi</label>
                            <div className="col-md-10">
                                <input type="file" className='form-control' placeholder='Faylni tanlang' value={logo} onChange={(e) => { setLogo(e.target.files) }} />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-md-2 col-form-label">
                                Do'kon telefoni
                            </label>
                            <div className="col-md-10">
                                <div className="input-group flex-nowrap mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text" id="addon-wrapping">+998</span>
                                    </div>
                                    <input type="number" className="form-control" placeholder="Telefon" required value={tel} onChange={(e) => { setTel(e.target.value) }} />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-md-2 col-form-label">Do'kon manzili <span className="text-danger text-danger">*</span></label>
                            <div className="col-md-10">
                                <input type="text" className="form-control mb-3" placeholder="Manzil" value={manzil} onChange={(e) => { setManzil(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-md-2 col-form-label">Meta sarlavhasi<span className="text-danger text-danger">*</span></label>
                            <div className="col-md-10">
                                <input type="text" className="form-control mb-3" placeholder="Meta sarlavhasi" value={meta} onChange={(e) => { setMeta(e.target.value) }} required />
                            </div>
                        </div>
                        <div className="row">
                            <label className="col-md-2 col-form-label">Meta tavsifi<span className="text-danger text-danger">*</span></label>
                            <div className="col-md-10">
                                <textarea name="meta_description" rows={3} className="form-control mb-3" required value={meta1} onChange={(e) => { setMeta1(e.target.value) }} />
                            </div>
                        </div>
                        <div className="dokon3">
                            <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className='dokon2'>
                <div className='asosiy'>
                    <h5>Banner sozlamalari</h5>
                </div>
                <div class="card-body">
                    <form className>
                        <div className="row">
                            <label className="col-md-2 col-form-label">Bannerlar (1500x450)</label>
                            <div className="col-md-10">
                                <input type="file" className='form-control' placeholder='Faylni tanlang' value={baner} onChange={(e) => { setBaner(e.target.files) }} />
                                <p className='biz'>Biz barqarorlikni saqlash uchun balandlikni cheklashimiz kerak edi. Ba'zi qurilmalarda balandlikni cheklash uchun bannerning ikkala tomoni ham kesilgan bo'lishi mumkin.</p>
                            </div>
                        </div>
                        <div className="dokon3">
                            <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                        </div>
                    </form>

                </div>
            </div>
            <div className='dokon2'>
                <div className='asosiy'>
                    <h5>Social Media Link</h5>
                </div>
                <div class="card-body">
                    <form >
                        <div className="form-box-content p-3">
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Facebook</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Facebook" value={facebook} onChange={(e) => { setFacebook(e.target.value) }} />
                                    <small className="text-muted">Https bilan havolani kiriting</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Instagram</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Instagram" value={instagram} onChange={(e) => { setInstagram(e.target.value) }} />
                                    <small className="text-muted">Https bilan havolani kiriting</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Twitter</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Twitter" value={twitter} onChange={(e) => { setTwitter(e.target.value) }} />
                                    <small className="text-muted">Https bilan havolani kiriting</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Google</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Google" value={google} onChange={(e) => { setGoogle(e.target.value) }} />
                                    <small className="text-muted">Https bilan havolani kiriting</small>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label className="col-md-2 col-form-label">Youtube</label>
                                <div className="col-md-10">
                                    <input type="text" className="form-control" placeholder="Youtube" value={youtube} onChange={(e) => { setYoutube(e.target.value) }} />
                                    <small className="text-muted">Https bilan havolani kiriting</small>
                                </div>
                            </div>
                        </div>
                        <div className="dokon3">
                            <button type="submit" className="btn2 btn btn-sm btn-primary">Saqlash</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="foot">
                <p class="mb-0">© Unimart v6.1.1</p>
            </div>
        </div>
    );
}

export default Setting;