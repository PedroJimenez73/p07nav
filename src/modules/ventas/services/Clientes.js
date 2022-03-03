const customers = [
    {nombre: 'Iberdrola', cif: 'A12345678', localidad: 'Bilbao'},
    {nombre: 'Iberdrola Gas', cif: 'A76876866', localidad: 'Bilbao'},
    {nombre: 'Jazztel', cif: 'A87654321', localidad: 'Madrid'},
    {nombre: 'La Caixa', cif: 'A4444444', localidad: 'Barcelona'},
]

export function getCustomers() {
    return customers;
}

export function findCustomer(term) {
    let customersFounded = []
    if (term !=='') {
        const pattern = new RegExp("^" + term);
        customersFounded = customers.filter(elem => pattern.test(elem.nombre))        
    }
    return customersFounded;
}