import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <h1 className="text-center my-10 text-4xl">Get in Touch</h1>
      <div className="text-center tracking-tighter"> 
    <p className="my-4">{CONTACT?.address}</p>
    <p className="my-4">{CONTACT?.phoneNo}</p>
    <a href="#" className="border-b">{CONTACT?.email}</a>
      </div>
    </div>
  )
}

export default Contact