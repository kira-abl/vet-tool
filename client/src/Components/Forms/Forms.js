import { useForm } from 'react-hook-form';
import "./Forms.css";
import React, { useState, useRef, useEffect } from "react";
import SingleSelect from "../Dropdown/DropdownBreeds.tsx"

export default function Form(props) {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data.value);

  //const [data, setData] = React.useState("none");
  const [show, setShow] = React.useState("hidden");


//console.log(data);
console.log(show);

  const values = getValues();
  console.log(values);

  const [male, setMale] = React.useState("radioBox");
  const [female, setFemale] = React.useState("radioBox");
  const [spayed, setSpayed] = React.useState("radioBox");
  const [spayedN, setSpayedN] = React.useState("radioBox");


  const onChangeAge = e => {

  props.setAnswers({ ...props.answers, "age": e.target.value})   
  
  };

  const onChangeWeight = e => {

    props.setAnswers({ ...props.answers, "weight": e.target.value})   
    
    };


  const onChange = e => {
  console.log(e.target.id);

  if (e.target.id === "radio") {
    setMale("radioBoxColor");
    setFemale("radioBox");
    props.setAnswers({ ...props.answers, "sex": "male"})
}
  if (e.target.id === "radio2")
  {
    setFemale("radioBoxColor");
    setMale("radioBox");
    props.setAnswers({ ...props.answers, "sex": "female"})
}

if (e.target.id === "spayed")
{
  setSpayed("radioBoxColor");
  setSpayedN("radioBox");
  props.setAnswers({ ...props.answers, "spayed": "yes"})
}

if (e.target.id === "spayed2")
{
  setSpayedN("radioBoxColor");
  setSpayed("radioBox");
  props.setAnswers({ ...props.answers, "spayed": "no"})
}
};


  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">
        <label for="age">Age (years)</label>
        <input onInput={onChangeAge} type="text" id="name" placeholder="Age" {...register("Age", {required: true, maxLength: 80})} />
      </div>

      <div className="field">
        <label for="weight">Weight (kg)</label>
        <input onInput={onChangeWeight} type="text" id="name" placeholder="Weight" {...register("Weight", {required: true, maxLength: 80})} />
      </div>

      <div style={{marginBottom: "16px"}}>
        <p className="label">Sex</p>
      </div>






<div className="radio" onChange={onChange}>
  <div className={male} id="radioBox">

    <label class="form-control">
    <input type="radio" name="radio" id='radio' />
    Male
      </label>
  </div>
  <div className={female} >
    <label class="form-control">
    <input  type="radio" name="radio" id='radio2' />
    Female
    </label>
  </div>
</div>

<div style={{marginBottom: "16px"}}>
  <p className="label">Spayed/Neutered</p>
</div>



<div className="radio" onChange={onChange}>
  <div className={spayed} id="radioBox1">

    <label class="form-control">
    <input type="radio" name="radio1" id='spayed' />
    Yes
      </label>
  </div>
  <div className={spayedN} >
    <label class="form-control">
    <input  type="radio" name="radio1" id='spayed2' />
    No
    </label>
  </div>
</div>


<div style={{marginBottom: "16px"}}>
  <p className="label">Breed</p>
</div>


<SingleSelect style={{marginTop: "0px"}}

answers={props.answers}
setAnswers={props.setAnswers}
show={show}
setShow={show}/>


<input type="submit" />

</form>
  );
}
