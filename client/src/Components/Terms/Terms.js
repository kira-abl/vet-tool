import React, { useState, useRef, useEffect } from "react";
import "./Terms.css";
import Logos from "../Logos/Logos.js";
import Button from "../Button/Button.js";
import { Link } from "react-router-dom";
import Form from "../Forms/FormsResearcher.js";

const Terms = props => {

  useEffect(() => {
  window.scrollTo(0, 0)
  }, [])

  return (
    <div>
    <Logos
      h3=<h3>Canine Body Condition Score
      TERMS & CONDITIONS</h3>
      

    />

    <div className="terms">
      
      
    <p style={{ textAlign: "center"}}>Last Updated July 31 2022.</p>
    
    

      
      Welcome to our Terms and Conditions (the "Terms") of Camine Body Condition Score Application https://beamish-sunburst-99ce83.netlify.app/ (the '"App"). This App is part of a research collaboration between Stay Labs Inc., subsidiary company of Petsapien Ltd. (herein together: “Stay Labs”) and Tech4Animals Lab, University of Haifa (herein: "Tech4Animals") (herein together: the "Collaboration", "We", "Us", or "Our"). These Terms are a legal agreement between you and the Collaboration, and they apply to your use of the App. Your use of the App is designed to provide us with information about the dogs under your examination (the "Dog Data") and to helps Us to improve Our hands-off assessment and scoring tool to assess dog's nutrition and wellbeing (the "Research").
      <br></br>   

      <p>
      BEFORE USING THE APP, PLEASE READ THIS TERMS CAREFULLY. BY USING THE APP, YOU AGREE TO BE LEGALLY BOUND BY ALL TERMS HEREIN.
      </p>
      <p>
      We may modify, change, or update these Terms, at any time and in our sole discretion. If we make changes to these Terms, we will post the updated Terms on the App along with the revision of the "Last Updated" date at the top of these Terms and we will send you a notice re the changes via email.
      </p>

      <ol>
      <li><span className="bold">Use of the App</span>

        <ol>
          <li>For you to use the App and provide Us with the Dog's Data, you will be asked to provide your email address.
</li>
          <li>The Dog's Data will include general information about the dogs under your examination, such as age, weight, sex, breed, etc. 
</li>
          <li>Without derogating from the above, you will provide Us with pictures of the dogs while using the App. Such pictures shall be considered as part of the Dog's Data
</li>
        </ol>
      </li>
      <li> <span className="bold">Data Usage</span> 
      <ol>
          <li>We may use the Dog's Data for research purposes and for any academic and/or commercial purposes at our sole discretion. 
</li>
          <li>We will not share the Dog's Data with any third party without your prior consent. </li>
          <li>Other than your email address, We will not collect any information about you. 
</li>
<li>We will use your email address solely for the following purposes: (i) Research-specific updates and inquiries (ii) to link between the dogs and the veterinarian who examined them. It is hereby clarified that We will not use your email address for marketing purposes without your express permission. 
</li>
          <li>The Dog's Data and the email address We collect will be stored on a secured server.
</li>
        </ol>
      </li>
      <li> <span className="bold">Ownership, Content, and Links</span> 
        <ol>
          <li>All intellectual property rights, including copyrights, patents, database rights, designs, trademarks, any data including without limitation the Dog's Data, regardless of whether they are registered or not, the App and its name, the software, the designs, photos, illustrations, sounds and all other content, including the manner of their presentation (the "Content”) are owned solely by the Collaboration or its affiliates, or third parties as the case may be, and shall remain our or their property. No use shall be made thereof except for the permitted use of the App under these Terms.
</li>
          <li>You may use and view the Content solely for your personal information and for using the App, and for no other purpose, including without limitation, any commercial purpose, and you shall preserve intact all copyright and other proprietary notices. You are strictly forbidden to use the Content, except as explicitly permitted in these Terms or as otherwise explicitly permitted in the Content or in a writing signed by us. Your use of the App and/or your participation in the Research does not entitle you to an interest in or rights to receive any material or intellectual property we generate, even if the Dog's Data you provided to Us is used in Our processes. 
</li>
          <li>Links in our App to other sites operated by third parties, do not constitute sponsorship, endorsement, or approval by the App of the content, policies, or practices of such linked sites. These linked sites are not controlled, operated, or maintained by us, and we are not responsible for the content, availability, security, policies, or practices of linked sites, including, but not limited to, privacy policies and practices. These links are provided for your own convenience only, and you are responsible for any damage that may occur from your access to them.
</li>
        </ol>
      </li>
      <li> <span className="bold">No Payment. No Credits</span>        
       <ol>
          <li>Your use of the App and/or your participation in the Research and/or your provision of Dog's Data to Us does not entitle you to any payment and/or other compensation even if the Dog's Data you provided to Us is used in Our processes.
</li>
          <li>Your use of the App and/or your participation in the Research and/or your provision of Dog's Data to Us does not entitle you to receive any credit rights in any of Ours publications, even if the Dog's Data you provided to Us is used in Our processes.
</li>
        </ol>
      </li>
      <li> <span className="bold">Liability</span>        
        <ol>
          <li>THE COLLABORATION MAKES NO WARRANTIES OR REPRESENTATIONS WHATSOEVER WITH RESPECT TO THE APP, ITS CONTENT AND ANY LINKED SITES, INCLUDING THE AVAILABILITY OF THE CONTENT, ANY INFORMATION, AND MATERIALS ON IT, OR THE ACCURACY, COMPLETENESS, OR TIMELINESS OF THAT CONTENT, INFORMATION, AND MATERIALS. THE COLLABORATION ALSO DOES NOT WARRANT OR REPRESENT THAT YOUR USE OF THE APP WILL BE UNINTERRUPTED OR FREE OF ERRORS OR OMISSIONS, THAT DEFECTS WILL BE CORRECTED, OR THAT THE APP IS FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS. WITHOUT LIMITING THE FOREGOING, ALL CONTENT PROVIDED ON OR THROUGH THE APP ARE PROVIDED TO USERS “AS IS,“ WITH NO WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, SECURITY, OR ACCURACY. 
          <br/>
          Please note that some jurisdictions may not allow the exclusion of implied warranties, so some of the above exclusions may not apply to You. Check Your local laws for any restrictions or limitations regarding the exclusion of implied warranties.

</li>
          
        </ol>
      </li>
      <li> <span className="bold">Governing Law, jurisdiction and Venue</span> 
        <ol>
          <li>These Terms shall be governed by and construed in accordance with the laws of the State of Israel, without regard to or application of choice of law rules or principles. Any Dispute between the parties shall be resolved in the courts of Tel-Aviv, Israel. 
</li>
        </ol>
      </li>
      <li> <span className="bold">Severability</span>
        <ol>
          <li>If any term, clause, or provision of these Terms is held invalid or unenforceable, then that term, clause or provision will be severable from these Terms and will not affect the validity or enforceability of any remaining part of that term, clause or provision, or any other term, clause or provision of these Terms.
</li>
        </ol>
      </li>
      <li> <span className="bold">Miscellaneous
</span>
        <ol>
          <li>All the sections above, constitute the entire agreement between you and Us in relation to Our App. 
</li>
          <li>The Collaboration may change these Terms at any given time, at its sole discretion and without giving advance notice. You will be notified in the App and/or via email regarding the changes, but in any event, the binding wording of these Terms is the wording published on the App at the relevant time of your use.
</li>
          <li>You may contact Us with queries regarding these Terms and/or the App and/or the Research by sending an email to [tech4animals@labs.hevra.haifa.ac.il].
</li>
        </ol>
      </li>
    </ol>




      
    </div>
           

    


      <Link to="/validation" style={{ textDecoration: "none" }}>
      <Button width="165px" bcolor="#F26A56" height="48px" color="#FFFFFF" className="buttonNav" border="0px"  >
        {" "}
        Done{" "}
      </Button>
      </Link>

      


    </div>
  );
};

export default Terms;
