import {useFormik} from "formik";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Item from "../Components/Item";

import {useState} from 'react';
import {useRef} from 'react';

import {useReactToPrint} from "react-to-print";


export const Token=()=>{
  
  const [date,setDate]=useState(new Date());
  const [dueDate,setDueDate] = useState(new Date());
  const [val,setVal]=useState([]);
  

  const formik = useFormik({
    initialValues:{
      invoiceNo:0,
      date:{date},
      dueDate:{dueDate},
      tax:"",
      discount:"",
      bankName:"",
      accName:"",
      accNo:0,
      clientName:"",
      clientNo:0,
      clientAddress:"",
      orgName:"",
      orgNo:0,
      orgAddress:"",
      termsConditions:"",
    },
    onSubmit:values=>{
      alert(JSON.stringify(values));
    }
  });

  const handleAdd = () => {
    const abc=[...val,1];
    console.log(val)
    setVal(abc)

  };

  const handleChange = () => {

  };
  
  const handleDelete = (item) => {
    const xyz=[...val];
    xyz.splice(item,1);
    setVal(xyz);


  };

  var element = document.getElementById("main");
  
  
  
  
  
    const componentRef=useRef();
    const handlePrint = useReactToPrint({content: () => componentRef.current})
    return(

      <div ref={componentRef}>
                      <html >
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
	integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
	crossOrigin="anonymous"
	
></script>
              <header>
                <h1>InVoice</h1>
            </header>
            
            <main id="main">
                <form onSubmit={formik.handleSubmit}>
                    <section id="metadata"  className=" items-start font-arial flex flex-col">
                    <div className="">
{/* ********************************************** */}
                        <h2>Metadata:</h2>

                        <div className="flex">
                          <label htmlFor="invoiceNo" className="metadata">Invoice no.:</label>
                          <input type="text" id="invoiceNo" name="invoiceNo" onChange={formik.handleChange} value={formik.values.invoiceNo} />
                        </div>

                        <div className="flex">
                          <label htmlFor="date" className="metadata">Date:</label>
                          <DatePicker type="text" id="date" name="date" selected={date} onChange={(date)=>setDate(date)} value={formik.values.date}/>
                        </div>

                        <div className="flex">
                          <label htmlFor="dueDate" className="metadata">Date:</label>
                          <DatePicker type="text" id="dueDate" name="dueDate"  onChange={(dueDate)=>setDueDate(dueDate)} selected={dueDate} value={formik.values.dueDate} />
                        </div>

                        <div className="flex">
                          <label htmlFor="tax" className="metadata">Tax rate:</label>
                          <input type="text" id="tax" name="tax" onChange={formik.handleChange} value={formik.values.tax} />
                        </div>

                        <div className="flex">
                          <label htmlFor="discount" className="metadata">Discount rate:</label>
                          <input type="text" id="discount" name="discount" onChange={formik.handleChange} value={formik.values.discount} />
                        </div>
{/* ********************************************** */}
                        <h2>Payment information:</h2>

                        <div className="flex">
                          <label htmlFor="bankName" className="metadata">Bank name:</label>
                          <input type="text" id="bankName" name="bankName" onChange={formik.handleChange} value={formik.values.bankName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="accName" className="metadata">Account Name:</label>
                          <input type="text" id="accName" name="accName" onChange={formik.handleChange} value={formik.values.accName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="accNo" className="metadata">Account No.:</label>
                          <input type="text" id="accNo" name="accNo" onChange={formik.handleChange} value={formik.values.accNo} />
                        </div>
{/* ********************************************** */}
                        <h2>Client details:</h2>

                        <div className="flex">
                          <label htmlFor="clientName" className="metadata"> Name:</label>
                          <input type="text" id="clientName" name="clientName" onChange={formik.handleChange} value={formik.values.clientName} />

                        </div>

                        <div className="flex">
                          <label htmlFor="clientAddress" className="metadata">Contact no.:</label>
                          <input type="text" id="clientAddress" name="clientAddress" onChange={formik.handleChange} value={formik.values.clientAddress} />
                        </div>

                        <div className="flex">
                          <label htmlFor="clientNo" className="metadata">Address:</label>
                          <input type="text" id="clientNo" name="clientNo" onChange={formik.handleChange} value={formik.values.clientNo} />
                        </div>
{/* ********************************************** */}
                        <h2>Organisation details:</h2>

                        <div className="flex">
                          <label htmlFor="orgName" className="metadata"> Name:</label>
                          <input type="text" id="orgName" name="orgName" onChange={formik.handleChange} value={formik.values.orgName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="orgAddress" className="metadata">Contact no.:</label>
                          <input type="text" id="orgAddress" name="orgAddress" onChange={formik.handleChange} value={formik.values.orgAddress} />
                        </div>

                        <div className="flex">
                          <label htmlFor="orgNo" className="metadata">Address:</label>
                          <input type="text" id="orgNo" name="orgNo" onChange={formik.handleChange} value={formik.values.orgNo} />
                        </div>
{/* ********************************************** */}
                        <h2>Terms & Conditions:</h2>

                        <div className="flex">
                          <label htmlFor="termsConditions" className="termsConditions"></label>
                          <input type="text" id="termsConditions" name="termsConditions" onChange={formik.handleChange} value={formik.values.termsConditions} />
                        </div>

                        {val.map((i)=>{
                          return(
                            <div key={i} className="flex">
                              <Item ref={componentRef}/>
                              <button onClick={()=>handleDelete(i)}>Delete</button>
                            </div>
                          )
                        })}

                        <button type="button" id="addItem" onClick={()=>handleAdd()}>add</button>
                    </div>
{/* ********************************************** */}
                    <div id="submit">
                      <button type='submit'>Submit</button>
                    </div>

                </section>
                </form>
                
            </main>

            <footer>

            </footer>
            {console.log("element:",element) 
            }
            
        </html>
        
        <button onClick={handlePrint}>print</button>

      </div>
//             <ReactToPrint trigger={()=><button>Print</button>} content={()=>componentRef.current}>

//             </ReactToPrint>
            
    )
}