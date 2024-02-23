import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import firebase from '../Firebase';
import GUGULogo from '../1_Assets/MainAssets/HomeLogo.png';
import InputBox from '../1_Assets/MainAssets/InputBox.png';
import ButtonBox from '../1_Assets/MainAssets/ButtonBox.png';

const Registration = () =>{ 
    const history = useNavigate();
    // eslint-disable-next-line
    const [select, setSelect] = useState('')

    function handleSubmit(){

        const Users = firebase.firestore().collection("Users");

        const name = document.getElementById('Name').value
        const email = document.getElementById('email').value
        const number = document.getElementById('no').value

        var length = document.getElementById("Name").value.length
        var validRegex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        
        if (document.getElementById("Name").value === "" ||  length < 3)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID NAME"
            return;
        }

        if (document.getElementById("email").value === "" || document.getElementById("email").value.match(!validRegex))
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID EMAIL"
            return;
        }
        

        if (document.getElementById("no").value === "" || document.getElementById("no").value.length > 13 || document.getElementById("no").value.length < 8)
        {
            document.getElementById("error").innerHTML = "PLEASE ENTER A VALID PHONE NUMBER";
            return;
        }


        else{
            document.getElementById("SubmitButton").innerHTML  = "Loading...";
            Users.add({
                Name:name,
                Email:email,
                Number:number,
                StartTime: firebase.firestore.FieldValue.serverTimestamp(),
            }).then(doc =>{
                history("/Dashboard", {state:{id:doc.id}})
                
            })
            console.log(name,email,number,select)
           ;
        }
    }

    return(
        <>
            <div style={{display:"flex", flexDirection:"column", width:"100vw", height: "100vh", justifyContent:"center", alignItems:"center"}}>

                <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>

                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                        <img style={{width: '200px'}} className='GUGUMainLogo' src={GUGULogo} alt="Nissan Logo"/>
                    </div>

                    <div style={{width: '80vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '20px'}}>

                        <div style={{height: '90px', width: '500px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${InputBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                          <input type="text" placeholder='NAME' id="Name" style={{marginLeft: '-12px', textAlign: 'center', border: 'none',  background:"#0099FF", width:"370px", height:'70%', paddingLeft: '10px', paddingRight: '10px', fontSize: '30px', color: 'white', marginTop: '10px'}}/> 
                        </div>

                        <div style={{height: '90px', width: '500px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${InputBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                          <input type="email" placeholder='EMAIL' id='email' style={{marginLeft: '-12px', textAlign: 'center', border: 'none',  background:"#0099FF", width:"370px", height:'70%', paddingLeft: '10px', paddingRight: '10px', fontSize: '30px', color: 'white', marginTop: '10px'}}/> 
                        </div>

                        <div style={{height: '90px', width: '500px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${InputBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
                          <input className='specialFont' type="number" placeholder='MOBILE PHONE' id='no' style={{marginLeft: '-12px', textAlign: 'center', border: 'none',  background:"#0099FF", width:"370px", height:'70%', paddingLeft: '10px', paddingRight: '10px', fontSize: '30px', color: 'white', marginTop: '10px'}}/> 
                        </div>

                    </div>

                    <div style={{width: '300px', height: '30px', padding: '0', margin: '0',  display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <p id="error" style={{color: '#fc0f64', padding: '0', margin: '0', fontSize: '15px'}}></p>
                    </div>

                    <button onClick={handleSubmit} id='SubmitButton' style={{backgroundColor: 'transparent', border: 'none', height: '90px', width: '370px', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url('${ButtonBox}')`, display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', cursor: 'grab', fontSize: '30px', color: 'white'}} >
                        SUBMIT
                    </button>

                </div>

            </div>
        </>
    )
}

export default Registration