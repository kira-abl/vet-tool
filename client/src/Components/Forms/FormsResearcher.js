import { useForm } from 'react-hook-form';
import "./Forms.css";
import React, { useState, useRef, useEffect } from "react";
import SingleSelect from "../Dropdown/DropdownBreeds.tsx"

export default function Form(props) {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data.value);

  console.log(props.email, "forms email");

  const values = getValues();
  console.log(values);

  const [vet, setVet] = React.useState("radioBox");
  const [vetN, setVetN] = React.useState("radioBox");


  const onChange = e => {
  console.log(e.target.id);

  if (e.target.id === "yes") {
    setVet("radioBoxColor");
    props.setUser("yes")
    setVetN("radioBox");
}
  if (e.target.id === "no")
  {
    setVetN("radioBoxColor");
    props.setUser("no")
    setVet("radioBox");
}

};

const onChangeMail = e => {
  console.log(e.target.value);
  props.setEmail(e.target.value)


  

};


  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">

        <input onInput={onChangeMail} type="text" id="name" placeholder="Email Address" {...register("Email", {required: true, maxLength: 80})} />
      </div>





      <div style={{marginTop: "0px"}}>
        <p style={{textAlign: "center", fontWeight: "400", fontFamily: "Poppins", fontSize: "14px", lineHeight: "23.8px", marginBottom: "16px", marginTop: "0px" }}>If you are a licensed veterinarian please check</p>
      </div>






<div className="radio" onChange={onChange}>
  <div className={vet} id="radioBox1">

    <label class="form-control">
    <input type="radio" name="radio1" id='yes' />
    Yes
      </label>
  </div>
  <div className={vetN} >
    <label class="form-control">
    <input  type="radio" name="radio1" id='no' />
    No
    </label>
  </div>
</div>








<input type="submit" />

</form>
  );
}
