import { ethers } from "ethers";

const Buy = ({state})=>{



const Donor = async (event)=>{
    event.preventDefault();
    const {contract} = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(contract,name,message);

const amount = {value: ethers.utils.parseEther("0.01")};
const transaction = await contract.Donor(name,message,amount);
await transaction.wait();
console.log("transaction is done");

};

  return (
    <>
      <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={Donor}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Pay
          </button>
        </form>
      </div>
    </>
  );
};
export default Buy;