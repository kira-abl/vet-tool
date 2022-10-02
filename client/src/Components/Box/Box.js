import React from 'react';
import useCollapse from 'react-collapsed';


import './Box.css';

const Row = props => {
  

    const [selected, setSelected] = React.useState("hidden");
    const [showRow, setShowRow] = React.useState("row");
  
    const selectRow = () => setSelected("selected"); 
    const unSelectRow = () => setSelected("hidden"); 
    const showTitle = () => setShowRow("rowSelected");
    const hideTitle = () => setShowRow("row");

    
    console.log("Selected", selected);
    console.log("Data in Row", props.data);
    
  
    // useEffect(() => {
    //   if (props.mood != props.moodChosen) unSelectMood();
    //   else if (props.mood === props.moodChosen) selectMood();
    // }, [props.mood]);
  
    return (
      <div>
        <div className={showRow}>
        <div>   
        <img src={props.dog} className="sideDog"     />
        </div>
            <div onClick={() => {
            {
              selected === "hidden" ? selectRow() : unSelectRow();
              showRow === "row" ? showTitle() : hideTitle();
              props.setData(props.title);
            }
          }}>
            {props.title}
            </div>
            <div>
        <i className={"fa-solid fa-chevron-down"}></i>   
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
      setData={props.setData} dog={"/assets/images/1.png"}> 
            <p>
                 Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass.
            </p>

            </Row>

            <Row title="Very Thin" data={props.data}
      setData={props.setData}>
            <p>
            Ribs easily palpated
and may be visible with no
palpable fat. Tops of lumbar
vertebrae visible. Pelvic
bones becoming prominent.
Obvious waist.              </p>

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

//             <Section title="Type 4">
//             <p>
//             Ribs easily palpable, with minimal fat
// covering. Waist easily noted, viewed from above.
// Abdominal tuck evident.               </p>
//             </Section>

//             <Section title="Type 5">
//             <p>
//             Ribs palpable without
// excess fat covering. Waist
// observed behind ribs
// when viewed from above.
// Abdomen tucked up
// when viewed.               </p>
//             </Section>

//             <Section title="Type 6">
//             <p>
//             Ribs palpable with slight excess fat covering.
// Waist is discernible viewed from above but is not
// prominent. Abdominal tuck apparent.               </p>
//             </Section>

//             <Section title="Type 7">
//             <p>
//             Ribs palpable with
// difficulty; heavy fat cover.
// Noticeable fat deposits
// over lumbar area and base
// of tail. Waist absent or
// barely visible. Abdominal
// tuck may be present.               </p>
//             </Section>

//             <Section title="Type 8">
//             <p>
//             Ribs not palpable under very heavy fat
// cover, or palpable only with significant pressure.
// Heavy fat deposits over lumbar area and base of
// tail. Waist absent. No abdominal tuck. Obvious
// abdominal distension may be present               </p>
//             </Section>

//             <Section title="Type 9">
//             <p>
//             Massive fat deposits
// over thorax, spine and base
// of tail. Waist and abdominal
// tuck absent. Fat deposits
// on neck and limbs. Obvious
// abdominal distention               </p>
//             </Section>


//         </div>
    );
}

export default Box;
