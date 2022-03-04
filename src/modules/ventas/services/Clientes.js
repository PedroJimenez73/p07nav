const customers = [
    {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'Iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
]

export function getCustomers() {
    return customers;
}

export function setCustomer(customer) {
     customers.push(customer);
}

export function getCustomerByCif(cif) {
    let customerFounded = customers.filter(elem => elem.cif === cif);    
    return customerFounded[0];
}