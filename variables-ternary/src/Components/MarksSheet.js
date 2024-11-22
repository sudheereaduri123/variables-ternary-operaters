import React from 'react'

export default function MarksSheet(props) {
    let engMarks= Number(props.engMarks);
    let comMarks= Number(props.comMarks);
    let telMarks=Number(props.telMarks);
    let hinMarks= Number(props.hinMarks);
    let MathsMarks=Number(props.MathsMarks);
    let SciMarks=Number(props.SciMarks);
    let SocMarks=Number(props.SocMarks);

    let totalMarks=engMarks+comMarks+telMarks+hinMarks+MathsMarks+SciMarks+SocMarks
  return (
    <div>
        <table>
            <caption>{props.name}  Sudheer MarksSheet</caption>
            <thead>
                   <tr>
                    <td>Subjet</td>
                 <td>Max.Marks</td>
              <td>Marks Gained</td>
                    <td>Result</td>
                   <td>Remarks</td>
                   </tr>
                <tbody>
                <tr>
                    <td>English</td>
                    <td>100</td>
                    <td>{engMarks}</td>
                    <td>{engMarks>=35 ? "pass":"fail"}</td>
                    <td>Good</td>
                </tr>
                <tr>
                    <td>Computers</td>
                    <td>100</td>
                    <td>{comMarks}</td>
                    <td>{comMarks>=35 ? "pass":"fail"}</td>
                    <td>Good</td>
                </tr>
                  <tr>
                    <td>Telugu</td>
                    <td>100</td>
                    <td>{telMarks}</td>
                    <td>{telMarks >=35 ? "pass":"fail"}</td>
                    <td>excellent</td>
                </tr> 
                 <tr>
                    <td>Hindi</td>
                    <td>100</td>
                    <td>{hinMarks}</td>
                    <td>{hinMarks >=35 ? "pass":"fail"}</td>
                    <td>Excellent</td>
                </tr> 
                 <tr>
                    <td>Maths</td>
                    <td>100</td>
                    <td>{MathsMarks}</td>
                    <td>{MathsMarks >=35 ? "pass":"fail"}</td>
                    <td>VeryGood</td>
                </tr> 
                 <tr>
                    <td>Science</td>
                    <td>100</td>
                    <td>{SciMarks}</td>
                    <td>{SciMarks >=35 ? "pass":"fail"}</td>
                    <td>Good</td>
                </tr> 
                 <tr>
                    <td>Social</td>
                    <td>100</td>
                    <td>{SocMarks}</td>
                    <td>{SocMarks >=35 ? "pass":"fail"}</td>
                    <td>Good</td>
                </tr> 
                 <tr>
                    <td>Total</td>
                    <td>700</td>
                    <td>596</td>
                    <td>Pass</td>
                    <td>Good</td>
                </tr>

                    <tfoot>

                    </tfoot>
                </tbody>
            </thead>
        </table>
      
    </div>
  )
}
