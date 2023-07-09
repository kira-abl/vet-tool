import { useForm } from 'react-hook-form';
import "./Forms.css";
import React, { useState, useRef, useEffect } from "react";
import SingleSelect from "../Dropdown/DropdownBreeds.tsx"

export default function Form(props) {
  const { register, getValues, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data.value);

  //console.log(props.email, "forms email");

  const values = getValues();
  //console.log(values);

  const [vet, setVet] = React.useState("radioBox");
  const [vetN, setVetN] = React.useState("radioBox");

//Radio box onChange function:
//   const onChange = e => {
//   console.log(e.target.id);

//   if (e.target.id === "yes") {
//     setVet("radioBoxColor");
//     props.setAnswers({ ...props.answers, "vet": "yes"})
//     setVetN("radioBox");
// }
//   if (e.target.id === "no")
//   {
//     setVetN("radioBoxColor");
//     props.setAnswers({ ...props.answers, "vet": "no"})
//     setVet("radioBox");
// }

// };



const onChangeMail = e => {

  props.setAnswers({ ...props.answers, "email": e.target.value})

  // const emailRegex =
  // new RegExp(/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.([A-Za-z0-9]){2,}$/, "gm");
  
  
  // // console.log(emailRegex.test(e.target.value));

  // let email = emailRegex.test(e.target.value);
  // console.log(email);

  // // let email1 = emailRegex.test(e.target.value);
  // // console.log(email1);
  
  // if (email) {
  //   props.setAnswers({ ...props.answers, "email": e.target.value})
  //   console.log(props.answers.email);
  // }
  // else {
    
  //   console.log("False");
  // }

};


  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="field">

        <input onInput={onChangeMail} type="text" id="name" placeholder="Email Address" value={props.answers.email} {...register("Email", {required: true, maxLength: 80})} />
      </div>





      {/* <div style={{marginTop: "0px"}}>
        <p style={{textAlign: "center", fontWeight: "400", fontFamily: "Poppins", fontSize: "14px", lineHeight: "23.8px", marginBottom: "16px", marginTop: "0px" }}>If you are a licensed veterinarian please check</p>
      </div> */}






{/* <div className="radio" onChange={onChange}>
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
</div> */}








<input type="submit" />

</form>
  );
}


