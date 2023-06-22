import React, {useState, useRef, useEffect } from "react";


import './Box.css';

const Row = props => {

  

    const borderNormal = {
        borderColor: "rgba(10, 10, 11, 0.2)",
      };
    
      const borderYellow = {
        borderColor: "rgba(255, 211, 91, 1)",
      };

      
      
      const dogShow = {
        
      };

      const dogHide = {
        display: "none",
      };

      
  

    const [selected, setSelected] = React.useState("hidden");
    const [showRow, setShowRow] = React.useState("row");
    let imageTitle = props;
    const [imageLink, setImageLink] = React.useState(imageTitle.url);
    const [border, setBorder] = React.useState(borderNormal);
    const [dog, setDog] = React.useState(dogShow);
    const [dogYellow, setDogYellow] = React.useState(dogShow);
    const [icon, setIcon] = React.useState("fa-solid fa-chevron-down");

    
  
    const selectRow = () => setSelected("selected"); 
    const unSelectRow = () => setSelected("hidden"); 
    const showTitle = () => setShowRow("rowSelected");
    const hideTitle = () => setShowRow("row");
    const colorBorder = () => setBorder(borderYellow);
    const uncolorBorder = () => setBorder(borderNormal); 
    const colorDog = () => setDogYellow(dogShow);
    const uncolorDog = () => setDogYellow(dogHide); 
    const colorDog1 = () => setDog(dogShow);
    const uncolorDog1 = () => setDog(dogHide); 


    useEffect(() => {
      if (props.answers.bcs !== props.title) {uncolorBorder(); colorDog1(); uncolorDog()};
      if (props.answers.bcs === props.title) {colorBorder(); colorDog(); uncolorDog1()};
    }, [props.answers.bcs]);
     
      

    return (
      <div>
        <div className={showRow} style={border}>
        <div style={{paddingLeft: "1.5em"}}>   
        <img src={props.url} className="sideDog" style={dog}
             />
        <img src={props.url2} className="sideDog" style={dogYellow}     />
        </div>
        
            <div onClick={() => {
            { 
              props.answers.bcs === props.title ? props.setAnswers({ ...props.answers, "bcs": ''}) : props.setAnswers({ ...props.answers, "bcs": props.title});
              
              // props.setData(props.title);
            }
          }}>
            {props.title}
            </div>
            <div style={{paddingRight: "1.8em"}}>
        <i className={icon} 
        onClick={() => {
            {
              selected === "hidden" ? selectRow() : unSelectRow();
              showRow === "row" ? showTitle() : hideTitle();
              icon === "fa-solid fa-chevron-up" ? setIcon("fa-solid fa-chevron-down") : setIcon("fa-solid fa-chevron-up");
             
            }
          }}></i>   
        </div>
            </div>
        <div className={selected} style={border}>
             {props.children}
        </div>
       
    </div>
    );
  };


function Box(props) {

    console.log("Data in Box", props.answers.bcs);

    return (
//         <div className="preferences">
            <div>
                

            <Row title="Emaciated" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/1mini.png"} url2={"/assets/images/1ymini.png"}>
            <p>
                 Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass.
            </p>

            </Row>

            <Row title="Very Thin" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/2mini.png"} url2={"/assets/images/2ymini.png"}> 
            <p>
            Ribs, lumbar vertebrae and pelvic bones
                easily visible. No palpable fat. Some evidence
                of other bony prominence. Minimal loss of
                muscle mass.            </p>

            </Row>

            <Row title="Thin" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/3mini.png"} url2={"/assets/images/3ymini.png"}>
            <p>
            Ribs easily palpated and may be visible with no
palpable fat. Tops of lumbar
vertebrae visible. Pelvic
bones becoming prominent.
Obvious waist.                 </p>

            </Row>

            <Row title="Underweight" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/4mini.png"} url2={"/assets/images/4ymini.png"}>
            <p>
            Ribs easily palpable, with minimal fat
covering. Waist easily noted, viewed from above.
Abdominal tuck evident.                </p>

            </Row>

            <Row title="
            Ideal" answers={props.answers}
            setAnswers={props.setAnswers} url={"/assets/images/5mini.png"} url2={"/assets/images/5ymini.png"}>
            <p>
            Ribs palpable without
excess fat covering. Waist
observed behind ribs
when viewed from above.
Abdomen tucked up
when viewed.                 </p>

            </Row>

            <Row title="Overweight" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/6mini.png"} url2={"/assets/images/6ymini.png"}>
            <p>
            Ribs palpable with slight excess fat covering.
 Waist is discernible viewed from above but is not
prominent. Abdominal tuck apparent.                </p>

            </Row>

            <Row title="Heavy" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/7mini.png"} url2={"/assets/images/7ymini.png"}>
            <p>
            Ribs palpable with
difficulty; heavy fat cover.
 Noticeable fat deposits
over lumbar area and base
of tail. Waist absent or
barely visible. Abdominal
tuck may be present.                </p>

            </Row>

            <Row title="Obese" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/8mini.png"} url2={"/assets/images/8ymini.png"}>
            <p>
            Ribs not palpable under very heavy fat
cover, or palpable only with significant pressure.
Heavy fat deposits over lumbar area and base of
tail. Waist absent. No abdominal tuck. Obvious
abdominal distension may be present.                 </p>

            </Row>

            <Row title="Severly Obese" answers={props.answers}
      setAnswers={props.setAnswers} url={"/assets/images/9mini.png"} url2={"/assets/images/9ymini.png"}>
            <p>
            Massive fat deposits
over thorax, spine and base
of tail. Waist and abdominal
tuck absent. Fat deposits
on neck and limbs. Obvious
abdominal distention.                  </p>

            </Row>

          </div>
    );
}

export default Box;