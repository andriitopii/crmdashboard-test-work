import ListCustomers from "../../components/list-customers/ListCustomers";
import "./Customers.scss";

const Customers = () => {
  return (
    <>
      <h1>Hello Eveno</h1>
      <section className="section-customers section">
        <table>
            <thead>
                <tr>
                    <th>Customer Name</th>
                    <th>Company</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Country</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                <ListCustomers customer="Joe" company="Topii Web studio" phone="123987128973" email="andriitopii@icloud.com" country="Ukraine" status={false}/>
                
            </tbody>
        </table>
      </section>
    </>
  );
};

export default Customers;
