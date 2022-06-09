import React from 'react';
import useCollapse from 'react-collapsed';


import './Box.css';

function Section(props) {
    const config = {
        defaultExpanded: props.defaultExpanded || false,
        collapsedHeight: props.collapsedHeight || 0
    };
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse(config);

    return (
    <div className="collapsible">
        <div className={(isExpanded ? 'headersHidden' : 'headers')} {...getToggleProps()}>
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

function Box() {
    return (
        <div className="preferences">

            <Section title="Type 1">
            <p>
                 Ribs, lumbar vertebrae, pelvic bones and all bony prominences evident from a distance. No discernible body fat. Obvious loss of muscle mass.
            </p>

            </Section>

            <Section title="Type 2">
                <p>
                Ribs, lumbar vertebrae and pelvic bones
                easily visible. No palpable fat. Some evidence
                of other bony prominence. Minimal loss of
                muscle mass.                </p>

            </Section>

            <Section title="Type 3">
            <p>
            Ribs easily palpated
and may be visible with no
palpable fat. Tops of lumbar
vertebrae visible. Pelvic
bones becoming prominent.
Obvious waist.                </p>
            </Section>

            <Section title="Type 4">
            <p>
            Ribs easily palpable, with minimal fat
covering. Waist easily noted, viewed from above.
Abdominal tuck evident.               </p>
            </Section>

            <Section title="Type 5">
            <p>
            Ribs palpable without
excess fat covering. Waist
observed behind ribs
when viewed from above.
Abdomen tucked up
when viewed.               </p>
            </Section>

            <Section title="Type 6">
            <p>
            Ribs palpable with slight excess fat covering.
Waist is discernible viewed from above but is not
prominent. Abdominal tuck apparent.               </p>
            </Section>

            <Section title="Type 7">
            <p>
            Ribs palpable with
difficulty; heavy fat cover.
Noticeable fat deposits
over lumbar area and base
of tail. Waist absent or
barely visible. Abdominal
tuck may be present.               </p>
            </Section>

            <Section title="Type 8">
            <p>
            Ribs not palpable under very heavy fat
cover, or palpable only with significant pressure.
Heavy fat deposits over lumbar area and base of
tail. Waist absent. No abdominal tuck. Obvious
abdominal distension may be present               </p>
            </Section>

            <Section title="Type 9">
            <p>
            Massive fat deposits
over thorax, spine and base
of tail. Waist and abdominal
tuck absent. Fat deposits
on neck and limbs. Obvious
abdominal distention               </p>
            </Section>


        </div>
    );
}

export default Box;
