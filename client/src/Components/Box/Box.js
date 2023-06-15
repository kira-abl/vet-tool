import React from 'react';
import useCollapse from 'react-collapsed';


import './Box.css';

const Row = props => {

    const borderNormal = {
        borderColor: "red",
      };
    
      const borderYellow = {
        padding: "yellow",
      };
  

    const [selected, setSelected] = React.useState("hidden");
    const [showRow, setShowRow] = React.useState("row");
    // const [imageTitle, setImageTitle] = React.useState(props);
    let imageTitle = props;
    const [imageLink, setImageLink] = React.useState(imageTitle.url);

    
  
    const selectRow = () => setSelected("selected"); 
    const unSelectRow = () => setSelected("hidden"); 
    const showTitle = () => setShowRow("rowSelected");
    const hideTitle = () => setShowRow("row");
    const changeColor = () => setImageLink(imageTitle.url2);
    const changeColorBack = () => setImageLink(imageTitle.url);


    
    console.log("Selected", selected);
    console.log("Data in Row", imageTitle);
    console.log("Image", imageLink);
      

    return (
      <div>
        <div className={showRow}>
        <div>   
        <img src={imageLink} className="sideDog"     />
        </div>
            <div onClick={() => {
            {
              imageLink === imageTitle.url ? changeColor() : changeColorBack();
              selected === "hidden" ? selectRow() : unSelectRow();
              showRow === "row" ? showTitle() : hideTitle();
              props.setData(props.title);
            }
          }}>
            {props.title}
            </div>
            <div>
        <i className={"fa-solid fa-chevron-down"}
        onClick={() => {
            {
              selected === "hidden" ? selectRow() : unSelectRow();
              showRow === "row" ? showTitle() : hideTitle();
            }
          }}></i>   
        </div>
            </div>
        <div className={selected}>
             {props.children}
        </div>
       
    </div>
    );
  };

function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
    <div className="collapsible">
        <div className={(isExpanded ? 'headersHidden' : 'headers')} {...getToggleProps()}>
        <div className="icon" style={{ color: "#F26A56" }}>
            <i className={'fa-solid fa-chevron-' + (isExpanded ? 'down' : 'right')}></i>
            </div>   
            <div className="title">{props.title}</div>
            <div className="icon" style={{ color: "#F26A56" }}>
                <i className={'fa-solid fa-chevron-' + (isExpanded ? 'down' : 'right')}></i>
            </div>
        </div>
        <div {...getCollapseProps()}>
            <div className="content">
                {props.children}
            </div>
        </div>
    </div>
    );
}

function Box(props) {

    console.log("Data in Box", props.data);

    return (
//         <div className="preferences">
            <div>
                

            <Row title="Emaciated" data={props.data}
      setData={props.setData} url={"/assets/images/Emanciated.png"} url2={"/assets/images/1yellow.png"}>
            <p>
                 Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass.
            </p>

            </Row>

            <Row title="Very Thin" data={props.data}
      setData={props.setData} url={"/assets/images/2.png"} url2={"/assets/images/2yellow.png"}> 
            <p>
            Ribs, lumbar vertebrae and pelvic bones
                easily visible. No palpable fat. Some evidence
                of other bony prominence. Minimal loss of
                muscle mass.            </p>

            </Row>

            <Row title="Thin" data={props.data}
      setData={props.setData} url={"/assets/images/3.png"} url2={"/assets/images/3yellow.png"}>
            <p>
            Ribs easily palpated and may be visible with no
palpable fat. Tops of lumbar
vertebrae visible. Pelvic
bones becoming prominent.
Obvious waist.                 </p>

            </Row>

            <Row title="Underweight" data={props.data}
      setData={props.setData} url={"/assets/images/4.png"} url2={"/assets/images/4yellow.png"}>
            <p>
            Ribs easily palpable, with minimal fat
covering. Waist easily noted, viewed from above.
Abdominal tuck evident.                </p>

            </Row>

            <Row title="
            Ideal" data={props.data}
      setData={props.setData} url={"/assets/images/5.png"} url2={"/assets/images/5yellow.png"}>
            <p>
            Ribs palpable without
excess fat covering. Waist
observed behind ribs
when viewed from above.
Abdomen tucked up
when viewed.                 </p>

            </Row>

            <Row title="Overweight" data={props.data}
      setData={props.setData} url={"/assets/images/6.png"} url2={"/assets/images/6yellow.png"}>
            <p>
            Ribs palpable with slight excess fat covering.
 Waist is discernible viewed from above but is not
prominent. Abdominal tuck apparent.                </p>

            </Row>

            <Row title="Heavy" data={props.data}
      setData={props.setData} url={"/assets/images/7.png"} url2={"/assets/images/7yellow.png"}>
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
      setData={props.setData} url={"/assets/images/8.png"} url2={"/assets/images/8yellow.png"}>
            <p>
            Ribs not palpable under very heavy fat
cover, or palpable only with significant pressure.
Heavy fat deposits over lumbar area and base of
tail. Waist absent. No abdominal tuck. Obvious
abdominal distension may be present.                 </p>

            </Row>

            <Row title="Severly Obese" data={props.data}
      setData={props.setData} url={"/assets/images/9.png"} url2={"/assets/images/9yellow.png"}>
            <p>
            Massive fat deposits
over thorax, spine and base
of tail. Waist and abdominal
tuck absent. Fat deposits
on neck and limbs. Obvious
abdominal distention.                  </p>

            </Row>

          </div>

          
          

//             <Section title="Type 2">
//                 <p>
//                 Ribs, lumbar vertebrae and pelvic bones
//                 easily visible. No palpable fat. Some evidence
//                 of other bony prominence. Minimal loss of
//                 muscle mass.                </p>

//             </Section>

//             <Section title="Type 3">
//             <p>
//             Ribs easily palpated
// and may be visible with no
// palpable fat. Tops of lumbar
// vertebrae visible. Pelvic
// bones becoming prominent.
// Obvious waist.                </p>
//             </Section>


    );
}

export default Box;
