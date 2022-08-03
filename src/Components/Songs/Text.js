import React from 'react'

export default function Test() {
    return (
        <div>
            <div className='cont1'>
                <h1 className='head2'>Adding a new Song</h1>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Song Name</p>
                    <input type="text" className='inp1' id="input1"></input>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Date Released </p>
                    <input type="text" className='inp2' id="input2"></input>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Art Work </p>
                    <form style={{ 'margin-left': '12%' }}>
                        <input type="file" id="myfile" name="myfile" ></input>

                    </form>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Artist  </p>
                    <select className='artist' id="input3" >
                        <option value='noselect'>Search</option>
                        <option value='LewisCadalpi'>Lewis Cadalpi</option>
                        <option value='PostMalone'>Post Malone</option>
                        <option value='JustinBieber'>Justin Bieber</option>
                        <option value='Quavo'>Quavo</option>
                    </select>
                    <button type="button" className='butt3' data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Artist </button>
                </div>
                <button className='butt4' >Cancel</button>
                <button className='butt5' >Save</button>


                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Artist</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                                    <p style={{ 'color': '#4B5D67' }}>Artist Name</p>
                                    <input type="text" className='inp4'></input>
                                </div>
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                                    <p style={{ 'color': '#4B5D67' }}>Date of Birth </p>
                                    <input type="date" className='inp4'></input>
                                </div>
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'margin-left': '9%' }}>
                                    <p style={{ 'color': '#4B5D67' }}>Bio </p>
                                    {/* <input type="date" className='inp4'></input> */}
                                    <textarea style={{ 'margin-left': '25%' }} className='inp4' cols='50' rows='3'></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
