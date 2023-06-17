import React, {useState, useRef, useEffect } from "react";


import './Box.css';

const Row = props => {

  

    const borderNormal = {
        borderColor: "rgba(10, 10, 11, 0.2)",

      };
    
      const borderYellow = {
        borderColor: "#FFD35B",
        //color: "#FFD35B",
        background: "rgba(255, 211, 91, 0.2)",
        //opacity: "0.4",
        
      };

      
      
      const dogShow = {
        
      };

      const dogHide = {
        color: "yellow",
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
      if (props.data !== props.title) {uncolorBorder();};
      if (props.data === props.title) {colorBorder();};
    }, [props.data]);
     
      

    return (
      <div>
        <div className={showRow} style={border}>
        <div style={{paddingLeft: "1.5em"}}>   
        <img src={props.url} className="sideDog"
             />
        {/* <img src={props.url2} className="sideDog" style={dogYellow}     /> */}
        </div>
        
            <div onClick={() => {
            { 
              props.data === props.title ? props.setData("none") : props.setData(props.title);
              
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

    console.log("Data in Box", props.data);

    return (
//         <div className="preferences">
            <div>
                

            <Row title="Emaciated" data={props.data}
      setData={props.setData} url="/assets/images/Emanciated-min.webp" >
            <p>
                 Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass.
            </p>

            </Row>

            <Row title="Very Thin" data={props.data}
      setData={props.setData} url="/assets/images/2-min.png" > 
            <p>
            Ribs, lumbar vertebrae and pelvic bones
                easily visible. No palpable fat. Some evidence
                of other bony prominence. Minimal loss of
                muscle mass.            </p>

            </Row>

            <Row title="Thin" data={props.data}
      setData={props.setData} url="/assets/images/3-min.webp" >
            <p>
            Ribs easily palpated and may be visible with no
palpable fat. Tops of lumbar
vertebrae visible. Pelvic
bones becoming prominent.
Obvious waist.                 </p>

            </Row>

            <Row title="Underweight" data={props.data}
      setData={props.setData} url="/assets/images/4-min.webp" >
            <p>
            Ribs easily palpable, with minimal fat
covering. Waist easily noted, viewed from above.
Abdominal tuck evident.                </p>

            </Row>

            <Row title="
            Ideal" data={props.data}
      setData={props.setData} url="/assets/images/5-min.webp" >
            <p>
            Ribs palpable without
excess fat covering. Waist
observed behind ribs
when viewed from above.
Abdomen tucked up
when viewed.                 </p>

            </Row>

            <Row title="Overweight" data={props.data}
      setData={props.setData} url="/assets/images/6-min.webp" >
            <p>
            Ribs palpable with slight excess fat covering.
 Waist is discernible viewed from above but is not
prominent. Abdominal tuck apparent.                </p>

            </Row>

            <Row title="Heavy" data={props.data}
      setData={props.setData} url="/assets/images/7-min.webp" >
            <p>
            Ribs palpable with
difficulty; heavy fat cover.
 Noticeable fat deposits
over lumbar area and base
of tail. Waist absent or
barely visible. Abdominal
tuck may be present.                </p>

            </Row>

            <Row title="Obese" data={props.data}
      setData={props.setData} url="/assets/images/8-min.webp" >
            <p>
            Ribs not palpable under very heavy fat
cover, or palpable only with significant pressure.
Heavy fat deposits over lumbar area and base of
tail. Waist absent. No abdominal tuck. Obvious
abdominal distension may be present.                 </p>

            </Row>

            <Row title="Severly Obese" data={props.data}
      setData={props.setData} url="/assets/images/9-min.webp" >
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
