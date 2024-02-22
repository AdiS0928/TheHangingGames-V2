import $ from 'jquery';
import logo2 from '../1_Assets/Logo.png';
import frame from '../1_Assets/LockupFrame.png'
import React, { useEffect } from "react";
import { useState } from "react"
import { useNavigate } from 'react-router-dom';
import './trivia.css';

const TriviaQuiz = () => {

    // const location = useLocation()
    const history = useNavigate()

    var question = {
        1:{
            "Question":"What is the country of origin for Geely Auto?",
            "Options":{
                1:"China",
                2:"Japan",
                3:"Germany",
                4:"United States"
            },
            "Answer":1
        },
        2:{
            "Question":"Geely Auto acquired an equity stake in which European car manufacturer in 2010?",
            "Options":{
                1:"Volvo Cars",
                2:"Aston Martin",
                3:"Mercedes",
                4:"Lotus"
            },
            "Answer":1
        },
        3:{
            "Question":"Geely Auto acquired a significant stake in which European car manufacturer? ",
            "Options":{
                1:"BMW",
                2:"Volkswagan",
                3:"Daimler AG",
                4:"Renault"
            },
            "Answer":3
        },
        4:{
            "Question":"Which Geely products will be launched as the first batch in the UAE market? ",
            "Options":{
                1:"Coolray",
                2:"Emgrand",
                3:"Geometry C",
                4:"OPTION D"
            },
            "Answer":1
        }
    }

    const [questionn, setQuestionn] = useState('')
    const [opt1, seOpt1] = useState('')
    const [opt2, setOpt2] = useState('')
    const [opt3, setOpt3] = useState('')
    const [opt4, setOpt4] = useState('')
    const [qnos, setQnos] = useState([1,2,3,4])
    const [C,setC] = useState(0)

    const [score, setScore] = useState(0)   

    const [selected, setSelected] = useState(0)

    const[ans, setAns] = useState(0)
    const FULL_DASH_ARRAY = 283;
        const WARNING_THRESHOLD = 10;
        const ALERT_THRESHOLD = 5;

        const COLOR_CODES = {
        info: {
            color: "green"
        },
        warning: {
            color: "orange",
            threshold: WARNING_THRESHOLD
        },
        alert: {
            color: "red",
            threshold: ALERT_THRESHOLD
        }
        };

        const TIME_LIMIT = 60;
        let timePassed = 0;
        let timeLeft = TIME_LIMIT;
        let timerInterval = null;
        // eslint-disable-next-line
        let remainingPathColor = COLOR_CODES.info.color;

    useEffect(()=>{

        startTimer();

        function onTimesUp() {
        clearInterval(timerInterval);
        }

        function startTimer() {
            // eslint-disable-next-line
        timerInterval = setInterval(() => {
            // eslint-disable-next-line
            timePassed = timePassed += 1;
            // eslint-disable-next-line
            timeLeft = TIME_LIMIT - timePassed;
            document.getElementById("base-timer-label").innerHTML =  
            timeLeft
            
            setCircleDasharray();
            setRemainingPathColor(timeLeft);

            if (timeLeft === 0) {
                const time = document.getElementById("base-timer-label").innerHTML
                console.log(time,'rime')

                // const Users = firebase.firestore().collection("Users");

                // Users.doc(location.state.id).update({
                //     Time: firebase.firestore.FieldValue.serverTimestamp(),
                //     Score:score,
                //     TimeTaken:time
                // })

                
            onTimesUp();
            history('/score',{state:{score:score}})
            }
        }, 1000);
        }

        

        function setRemainingPathColor(timeLeft) {
        const { alert, warning, info } = COLOR_CODES;
        if (timeLeft <= alert.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(warning.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(alert.color);
        } else if (timeLeft <= warning.threshold) {
            document
            .getElementById("base-timer-path-remaining")
            .classList.remove(info.color);
            document
            .getElementById("base-timer-path-remaining")
            .classList.add(warning.color);
        }
        }

        function calculateTimeFraction() {
        const rawTimeFraction = timeLeft / TIME_LIMIT;
        return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
        }

        function setCircleDasharray() {
        const circleDasharray = `${(
            calculateTimeFraction() * FULL_DASH_ARRAY
        ).toFixed(0)} 283`;
        document
            .getElementById("base-timer-path-remaining")
            .setAttribute("stroke-dasharray", circleDasharray);
        }

        // timer code ends here


        var count = 60, timer = setInterval(function() {
            $("#base-timer__label").html(count--);
            // eslint-disable-next-line
            if(count == -1){
                
                clearInterval(timer);
                // const time = document.getElementById('base-timer__label').innerHTML
                // console.log(time,'rime')

                // const Users = firebase.firestore().collection("Users");

                // Users.doc(location.state.id).update({
                //     Time: firebase.firestore.FieldValue.serverTimestamp(),
                //     Score:score,
                //     TimeTaken:time
                // })

                history('/score',{state:{score:score}})
            } 
        }, 1000);

        var qno = Math.floor(Math.random() * (qnos.length-1)) + 0

        var temp = qnos

        const index = qno;

            console.log(qnos[qno],'llll')
        var qn = question[qnos[qno]]

        if(qnos[qno] === 4){
            document.getElementById('option4').style.display = 'none'
        }
        else{
            document.getElementById('option4').style.display = 'initial'
        }

        console.log(C,'count')

        setQuestionn(qn.Question)
        seOpt1(qn.Options[1])
        setOpt2(qn.Options[2])
        setOpt3(qn.Options[3])
        setOpt4(qn.Options[4])
        setAns(qn.Answer)

        
        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log(temp)
          console.log('qno',qno)

        setQnos(temp)
    },[])
    // eslint-disable-next-line
    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        let seconds = time % 60;

        if (seconds < 10) {
            seconds = `0${seconds}`;
        }

        return `${minutes}:${seconds}`;
        }

        // eslint-disable-next-line
    const [bool, setBool] = useState(false); 


    function Handleclick(e){
        if(e === 'option1'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(false);
            setSelected(1)
        }

        if(e === 'option2'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option3').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(false);
            setSelected(2)
        }

        if(e === 'option3'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option4').style.background = "transparent";
            document.getElementById('option4').style.color = "white";
            setBool(true);
            setSelected(3)
        }

        if(e === 'option4'){
            document.getElementById(e).style.background = "white";
            document.getElementById(e).style.color = "black";
            document.getElementById('option1').style.background = "transparent";
            document.getElementById('option1').style.color = "white";
            document.getElementById('option2').style.background = "transparent";
            document.getElementById('option2').style.color = "white";
            document.getElementById('option3').style.background = "transparent";
            document.getElementById('option3').style.color = "white";
            setBool(false);
            setSelected(4)
        }
    }



    function handleSubmit(){



        console.log(C)

        if(qnos.length === 0){
            if(ans === selected){
                setScore(score+1)
                console.log('yay',score)

                const time = document.getElementById('base-timer-label').innerHTML
                console.log(time,'rime')

                // const Users = firebase.firestore().collection("Users");

                // Users.doc(location.state.id).update({
                //     Time: firebase.firestore.FieldValue.serverTimestamp(),
                //     Score:score+1,
                //     TimeTaken:time
                // })

                history('/score',{state:{score:score+1,time:time}})


            }else{
                const time = document.getElementById('base-timer-label').innerHTML
                console.log(time,'rime')

                // const Users = firebase.firestore().collection("Users");

                // Users.doc(location.state.id).update({
                //     Time: firebase.firestore.FieldValue.serverTimestamp(),
                //     Score:score,
                //     TimeTaken:time
                // })
    
            console.log('score=',score)
            history('/score',{state:{score:score,time:time}})

            }

           
            return;

            
        }

        if(ans === selected){
          
            setScore(score+1)
            console.log('yay',score)
        }

        console.log(qnos.length-1)
        var qno = Math.floor(Math.random() * (qnos.length-1)) + 0

        var temp = qnos

        const index = qno;

        console.log(qno)


        if(qnos[qno] === 4){
            document.getElementById('option4').style.display = 'none'
        }
        else{
            document.getElementById('option4').style.display = 'initial'
        }




        var qn = question[qnos[qno]]

        setQnos(temp)

        setQuestionn(qn.Question)
        seOpt1(qn.Options[1])
        setOpt2(qn.Options[2])
        setOpt3(qn.Options[3])
        setOpt4(qn.Options[4])
        setAns(qn.Answer)

        setC(C+1)

        if (index > -1) { // only splice array when item is found
            temp.splice(index, 1); // 2nd parameter means remove one item only
          }

          console.log(temp)

    }

return(
    <div style={{display:"flex", flexDirection:"column", width:"100%", height: "100vh", justifyContent:"center", alignItems:"center"}}>
        <div style={{display: 'flex', flexDirection: 'column', gap:'5px', alignItems: 'center', justifyContent:'center', height: '100vh'}}>
            
            
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginBottom: '-10px'}}>
                <img style={{width: '320px'}} src={frame} alt="Geely Logo"/>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', marginBottom: '-20px'}}>
                <h1 className="header" >TRIVIA GAME</h1>
            </div>

            {/* <p style={{color: 'white', fontSize: '16px', marginBottom: '-5px'}}>Time: <span className='base-timer__label' id='base-timer__label'>60</span> Seconds</p> */}
            
            <div id="app">
            <div className="base-timer">
        <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
            <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
            <path
                id="base-timer-path-remaining"
                stroke-dasharray="283"
                // eslint-disable-next-line
                className="base-timer__path-remaining green ${remainingPathColor}"
                d="
                M 50, 50
                m -45, 0
                a 45,45 0 1,0 90,0
                a 45,45 0 1,0 -90,0
                "
            ></path>
            </g>
        </svg>
        <span id="base-timer-label" className="base-timer__label">{
            timeLeft
        }</span>
        </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center', margin: '0', padding: '0', paddingLeft: '30px', paddingRight: '30px'}} >
                <p id='qn' style={{fontSize: '15px', color: 'white'}} > {questionn}</p>
            </div>  

            <div className="slotparent"  style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems:'center', width: '350px', marginTop: '15px'}}>
                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option1" onClick={() => {Handleclick("option1")}} value="option1" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt1}</button>
                        <button className="grab" id="option2" onClick={() => {Handleclick("option2")}} value="option2" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt2}</button>
                    </div>

                    <div className="slotdiv" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', width: '90%', overflowX:'hidden'}} id='slotparent'>
                        <button className="grab" id="option3" onClick={() => {Handleclick("option3")}} value="option3" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt3}</button>
                        <button className="grab" id="option4" onClick={() => {Handleclick("option4")}} value="option4" style={{width:"130px", margin: '5px', border:'1px solid white', padding: '10px', color: 'white', backgroundColor: 'transparent', cursor: 'grab'}}>{opt4}</button>
                    </div>
            </div>

            <button className="grab" style={{backgroundColor: '#002277', color: 'white', width: '150px', height: '37px' , border: '1px solid white', cursor: 'grab', marginTop: '20px'}} onClick={handleSubmit}>NEXT</button>

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '35px'}}>
                <img style={{width: '200px'}} src={logo2} alt="Geely Logo"/>
            </div>
            
        </div>
    </div>
)
}

export default TriviaQuiz