const ListCustomers = (props) => {
    const customer = props.customer;
    const company = props.company;
    const phone = props.phone;
    const email = props.email;
    const country = props.country;
    const status = props.status;

    return ( <tr>
        <th>{customer}</th>
        <th>{company}</th>
        <th>{phone}</th>
        <th>{email}</th>
        <th>{country}</th>
        <th>{status ? <>Active</> : <>Inactive</>}</th>
    </tr>);
}
 
export default ListCustomers;