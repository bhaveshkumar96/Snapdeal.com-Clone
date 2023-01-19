import { Footer } from "../Components/Footer";
import { Navbar } from "../Components/Navbar";
export const AdminPortal = () => {
  return (
    <>
      <Navbar />
<div>
    <form>
<input type="text" placeholder="Enter Product Name"/>
<input type="link"  placeholder="Enter Product Image url"/>
<input type="number"  placeholder="Enter Product Price"/>
<input type="submit" />

    </form>


</div>
      <Footer/>
    </>
  );
};
