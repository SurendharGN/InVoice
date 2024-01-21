import {useFormik} from "formik";

import { Link } from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

import Item from "../Components/Item";

import {useState} from 'react';
import {useRef} from 'react';

import {useReactToPrint} from "react-to-print";
import Preview from "./Preview";


export const Token=()=>{
  
  const [date,setDate]=useState(new Date());
  const [dueDate,setDueDate] = useState(new Date());
  const [val,setVal]=useState([]);
  const [showInvoice,setShowInvoice]=useState(true);


  

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
      orgName:"",
      orgNo:0,
      orgAddress:"",
      termsConditions:"",
    },
    
  });

  const handleAdd = () => {
    const abc=[...val,1];
    console.log(val)
    setVal(abc)

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
      <div>
        {showInvoice?(<div ref={componentRef}>
          <html >
          <script
            src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"
	integrity="sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg=="
	crossOrigin="anonymous"
	
></script>
              <header>
                <h1>InVoice</h1>
                {console.log(JSON.stringify(dueDate))}
            </header>
            
            <main id="main">
                <form onSubmit={formik.handleSubmit}>
                    <section id="metadata"  className=" items-start font-arial flex flex-col">
                    <div className="">
{/* Metadata */}
                        <h2 className="font-bold font-sans text-lg">Metadata:</h2>

                        <div className="flex">
                          <label htmlFor="invoiceNo" className="metadata">Invoice no.:</label>
                          <input className='border rounded-sm' type="number" id="invoiceNo" name="invoiceNo" onChange={formik.handleChange} value={formik.values.invoiceNo} />
                        </div>

                        <div className="flex">
                          <label htmlFor="date" className="metadata">Date:</label>
                          <DatePicker type="text" id="date" name="date" selected={date} onChange={(date)=>setDate(JSON.stringify(date))} value={formik.values.date}/>
                        </div>

                        {console.log("date:",date)}

                        <div className="flex">
                          <label htmlFor="dueDate" className="metadata">Date:</label>
                          <DatePicker type="text" id="dueDate" name="dueDate"  onChange={(dueDate)=>setDueDate(JSON.stringify(dueDate))} selected={dueDate} value={dueDate} />
                        </div>
                        {console.log("duedate:",dueDate)}

                        <div className="flex">
                          <label htmlFor="tax" className="metadata">Tax rate:</label>
                          <input type='number' placeholder="0%" id="tax" name="tax" onChange={formik.handleChange} value={formik.values.tax} />
                        </div>

                        <div className="flex">
                          <label htmlFor="discount" className="metadata">Discount rate:</label>
                          <input type='number' placeholder="0%" id="discount" name="discount" onChange={formik.handleChange} value={formik.values.discount} />
                        </div>
{/* Payment information */}
                        <h2 className="font-bold  text-lg">Payment information:</h2>

                        <div className="flex">
                          <label htmlFor="bankName" className="metadata">Bank name:</label>
                          <input type="text" id="bankName" name="bankName" onChange={formik.handleChange} value={formik.values.bankName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="accName" className="metadata">Account Name:</label>
                          <input type="text" id="accName" name="accName" onChange={formik.handleChange} value={formik.values.accName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="accNo" className="metadata">Account Number:</label>
                          <input type="text" id="accNo" name="accNo" onChange={formik.handleChange} value={formik.values.accNo} />
                        </div>
{/* Client details */}
                        <h2 className="font-bold  text-lg">Client details:</h2>

                        <div className="flex">
                          <label htmlFor="clientName" className="metadata"> Name:</label>
                          <input type="text" id="clientName" name="clientName" onChange={formik.handleChange} value={formik.values.clientName} />

                        </div>

                        <div className="flex">
                          <label htmlFor="clientAddress" className="metadata">Contact number:</label>
                          <input type="text" id="clientAddress" name="clientAddress" onChange={formik.handleChange} value={formik.values.clientAddress} />
                        </div>

                        
{/* Organization details */}
                        <h2 className="font-bold  text-lg">Organisation details:</h2>

                        <div className="flex">
                          <label htmlFor="orgName" className="metadata"> Name:</label>
                          <input type="text" id="orgName" name="orgName" onChange={formik.handleChange} value={formik.values.orgName} />
                        </div>

                        <div className="flex">
                          <label htmlFor="orgAddress" className="metadata">Contact number:</label>
                          <input type="text" id="orgAddress" name="orgAddress" onChange={formik.handleChange} value={formik.values.orgAddress} />
                        </div>

                        <div className="flex">
                          <label htmlFor="orgNo" className="metadata">Address:</label>
                          <input type="text" id="orgNo" name="orgNo" onChange={formik.handleChange} value={formik.values.orgNo} />
                        </div>
{/* Terms and conditions */}
                        <h2 className="font-bold  text-lg">Terms & Conditions:</h2>

                        <div className="flex">
                          <label htmlFor="termsConditions" className="termsConditions"></label>
                          <input type="text" id="termsConditions" name="termsConditions" onChange={formik.handleChange} value={formik.values.termsConditions} />
                        </div>

                        <div className='flex gap-40'>
                          <p>Description</p>
                          <p>Quantity</p>
                          <p>Rate</p>
                          <p >Amount</p>
                        </div>

                        {val.map((k,i)=>{
                          return(
                            <div key={i} className="flex my-6 h-10">
                              <div>{i}</div>
                              <Item ref={componentRef}/>
                              <button className="mx-16" onClick={()=>handleDelete(i)}>Delete</button>
                            </div>
                          )
                        })}

                        <button type="button" id="addItem" onClick={()=>handleAdd()}>add</button>
                    </div>
{/* Preview */}
                    <div id="submit">
                      <button onClick={()=>{setShowInvoice(false)}}>Preview</button>
                    </div>

                </section>
                </form>
                
            </main>
            <footer>

            </footer>
            
        </html>
        
        <button onClick={handlePrint}>print</button>
        </div>):(<div className="">
          <button onClick={()=>{setShowInvoice(true)}}>Edit</button>
  <Preview
      invoiceNo={formik.values.invoiceNo}
      tax={formik.values.tax}
      discount={formik.values.discount}
      bankName={formik.values.bankName}
      accName={formik.values.accName}
      accNo={formik.values.accNo}
      clientName={formik.values.clientName}
      clientNo={formik.values.clientNo}
      orgName={formik.values.orgName}
      orgNo={formik.values.orgNo}
      orgAddress={formik.values.orgAddress}
      termsConditions={formik.values.termsConditions} 
      />
</div>)}
      </div>
      
        

      
    )
}