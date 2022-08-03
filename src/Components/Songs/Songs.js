import React from 'react';
import { useState } from "react";
import "./Songs.css";


let songDetails = [
    { 'artwork': 'https://i.pinimg.com/originals/93/bc/65/93bc65a8f41fe324b24de8822a9b8202.jpg', 'song': 'Some one You loved', 'DOR': 'July 21, 2019', 'artist': 'Lewis Capaldi', 'rating': 'Good' },
    { 'artwork': 'https://assets.vogue.com/photos/5b609aec67f1177f20a9a875/master/pass/00-promo-post-malone.jpg', 'song': 'Circles', 'DOR': 'September 27, 2019', 'artist': 'Post Malone', 'rating': 'Superhit' },
    { 'artwork': 'https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg', 'song': 'Intentions', 'DOR': 'January 02, 2020', 'artist': 'Justin Bieber', 'rating': 'Good' }
]

let singerdeatils = [
    { 'artist': 'Lewis Capaldi', 'DOB': 'July 21, 2019', 'songs': 'Some one you loved, Before you go, Hold me while you wait' },
    { 'artist': 'Post Malone', 'DOB': 'September 27, 2019', 'songs': 'Circles Rockstar, Sunflower, Psycho, Wow, Better Now' },
    { 'artist': 'Justin Bieber', 'DOB': 'January 02, 2020', 'songs': 'Intenstions, Let me love you, Despacito, Yummy, I dont care' }
]

let sing=["LewisCapaldi", "PostMalone","JustinBieber", "Quavo"]

export default function Songs() {

    let [songDetail, setSongs] = useState(songDetails)

    let [singerDet, setSinger] = useState(singerdeatils)

    let [singerss, serSing]= useState(sing)

    let addList=()=>{
        let N1= document.getElementById("input1").value;
        let N2= document.getElementById("input2").value;
        let N3= document.getElementById("input3").value;
        let P1=""
        console.log(N1, N2, N3);
        console.log(singerss)
        if(N3==="LewisCadalpi"){
            P1= "https://i.pinimg.com/originals/93/bc/65/93bc65a8f41fe324b24de8822a9b8202.jpg"
        }else if(N3==="PostMalone"){
            P1="https://assets.vogue.com/photos/5b609aec67f1177f20a9a875/master/pass/00-promo-post-malone.jpg"
        }else if(N3==="JustinBieber"){
            P1="https://upload.wikimedia.org/wikipedia/commons/d/da/Justin_Bieber_in_2015.jpg"
        }else if(N3==="Quavo"){
            P1="https://pagesix.com/wp-content/uploads/sites/3/2020/05/quavo-1-1.jpg?quality=75&strip=all"
        }else{
            P1="https://us.123rf.com/450wm/razihusin/razihusin1604/razihusin160400004/56945441-women-singing-under-spotlight.jpg?ver=6"
        }
        let newObj= {'artwork': P1, 'song': N1, 'DOR': N2, 'artist': N3, 'rating': 'Good'}

        
        if(N1!==""){
            setSongs([...songDetail, newObj])
        }
        console.log(songDetail);


    }

    let addArtists=()=>{
        let N1= document.getElementById("input4").value;
        let N2= document.getElementById("input5").value;
        let N3= document.getElementById("input6").value;
        console.log(N1, N2, N3);
        let newOb= { 'artist': N1, 'DOB': N2, 'songs': N3 }
        setSinger([...singerDet, newOb])
        serSing([...singerss, N1])
        alert("Successfully added the new singer to the Artist Category and Artist Drop down box in add Add artist...")
    }

    return (
        <div>
            <div className='main' id="songCont">
                <div className='d-flex flex-row justify-content-space-around p-3 mb-2'>
                    <h1 className='head1'>Top 10 Songs</h1>
                    <a href='#addSong' style={{ marginLeft: "55%", padding: "5px" }}> <button className='butt'>  +AddSongs</button></a>
                </div>
                <div className='row'>
                    <div className='col-10 tab'>
                        <table className='table table-hover'>
                            <thead>
                                <tr style={{ "color": "white", "backgroundColor": "#4B5D67" }}>
                                    <th>Art work</th>
                                    <th>Song</th>
                                    <th>Date of Release</th>
                                    <th>Artist</th>
                                    <th>Rating</th>
                                </tr>
                            </thead>
                            <tbody>
                                {songDetail.map((item) => {
                                    return <tr style={{ 'height': '100px', 'color': '#4B5D67', 'fontSize': 'bold' }}>
                                        <td><img className='imgs' src={item.artwork} /> </td>
                                        <td>{item.song}</td>
                                        <td>{item.DOR}</td>
                                        <td>{item.artist}</td>
                                        <td>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star checked"></span>
                                            <span className="fa fa-star"></span>
                                        </td>
                                    </tr>
                                })}
                            </tbody>

                        </table>

                    </div>
                    <a href='#artistcont'> <button className='buttt'>Click to see the Singer Details</button></a>

                </div>

            </div>
            {/* second parameter singer details ...........*/}
            <div className='main' id="artistcont">
                <h1 className='head2'>Top 10 Artists</h1>
                <div className='row'>
                    <div className='col-10 tab'>
                        <table className='table table-hover'>
                            <thead>
                                <tr style={{ "color": "white", "backgroundColor": "#4B5D67" }}>
                                    <th>Artist</th>
                                    <th>Date of Birth</th>
                                    <th>Song</th>
                                </tr>
                            </thead>
                            <tbody>
                                {singerDet.map((item) => {
                                    return <tr style={{ 'height': '100px', 'color': '#4B5D67', 'fontSize': 'bold' }}>
                                        <td>{item.artist}</td>
                                        <td>{item.DOB}</td>
                                        <td>{item.songs}</td>
                                    </tr>

                                })}

                            </tbody>
                        </table>

                    </div>

                </div>
                <a href='#songCont'> <button className='buttt' >Back to home</button></a>

            </div>

            {/* third container add song..... */}

            <div className='cont1' id="addSong">
                <h1 className='head2'>Adding a new Song</h1>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Song Name</p>
                    <input type="text" className='inp1' id="input1"></input>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Date Released </p>
                    <input type="text" className='inp2' id="input2"></input>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%' }}>
                    <p style={{ 'color': '#4B5D67' }}>Art Work </p>
                    <form style={{ 'marginLeft': '12%' }}>
                        <input type="file" id="myfile" name="myfile" ></input>

                    </form>
                </div>
                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%'  }}>
                    <p style={{ 'color': '#4B5D67' }}>Artist  </p>
                    <select className='artist' id="input3" >
                        <option value='noselect'>Search</option>
                        {singerss.map((item, index)=>{
                            return(
                                <option value={item} key={index}>{item}</option>
                            )
                        })}
                    </select>
                    <button type="button" className='butt3' data-bs-toggle="modal" data-bs-target="#exampleModal">+ Add Artist </button>
                </div>
                <a href="#songCont">  <button className='butt4' >Cancel</button></a>
                <a href="#songCont"> <button className='butt5' onClick={addList} >Save</button></a>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add Artist</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%' }}>
                                    <p style={{ 'color': '#4B5D67' }}>Artist Name</p>
                                    <input type="text" className='inp4' id="input4"></input>
                                </div>
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%'  }}>
                                    <p style={{ 'color': '#4B5D67' }}>Date of Birth </p>
                                    <input type="date" className='inp4' id="input5"></input>
                                </div>
                                <div className='d-flex flex-row justify-content-start cont1' style={{ 'marginLeft': '9%'  }}>
                                    <p style={{ 'color': '#4B5D67' }}>Bio- Songnames </p>
                                    {/* <input type="date" className='inp4'></input> */}
                                    <textarea style={{ 'marginLeft': '5%'  }} className='inp4' id="input6" cols='50' rows='3'></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={addArtists} data-bs-dismiss="modal">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* last */}

        </div>
    )
}
