import React,{useState} from 'react'




const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        msg:"",
    });
    const InputEvent = (event) =>{
        const{name,value} = event.target;
    
    
        setData((prevVal) => {
           return{ 
           ...prevVal,
           [name] : value,  
           }
           
        })
    };
    const formSubmit = (e) =>{
        e.preventDefault();
        alert(`Name is ${data.fullname}, Email is ${data.email}, Phone num is ${data.phone}, Message is ${data.msg} `)
    }
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Contact Us </h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto"></div>
                    <form onSubmit={formSubmit}>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                            <input type="text" className="form-control" required id="exampleFormControlInput1" placeholder="Enter Your Name"
                            name="fullname"
                            value={data.fullname} 
                            onChange={InputEvent}/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Phone Number</label>
                            <input type="number" className="form-control" required id="exampleFormControlInput1" 
                             name="phone"
                             value={data.phone} 
                             onChange={InputEvent} 
                            placeholder="Enter your 10 digit Number"
                           />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="email" className="form-control" required id="exampleFormControlInput1"
                             name="email"
                             value={data.email}
                             onChange={InputEvent}
                             placeholder="name@example.com" 
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" required rows="3" name="msg"
                            value={data.msg}
                            onChange={InputEvent}
                             ></textarea>
                        </div>

                        <div className="mb-3">
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit" >Submit form
                                </button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
