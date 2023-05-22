function registerRegularClient(name, email, password, type) {
  // Lógica para registrar um cliente regular
  if (type === 'CPF') {
    // Lógica específica para clientes pessoa física (CPF)
    console.log("Cliente Regular (CPF) Registrado");
  } else if (type === 'CNPJ') {
    // Lógica específica para clientes varejistas (CNPJ)
    console.log("Cliente Regular (CNPJ) Registrado");
  } else {
    console.log("Tipo de cliente inválido");
  }
}

function registerPremiumClient(name, email, password, membershipLevel, type) {
  // Lógica para registrar um cliente premium
  if (type === 'CPF') {
    // Lógica específica para clientes pessoa física (CPF)
    console.log("Cliente Premium (CPF) Registrado");
  } else if (type === 'CNPJ') {
    // Lógica específica para clientes varejistas (CNPJ)
    console.log("Cliente Premium (CNPJ) Registrado");
  } else {
    console.log("Tipo de cliente inválido");
  }
}

registerRegularClient("John Doe", "john@example.com", "password123", "CPF");
registerPremiumClient("Jane Smith", "jane@example.com", "password456", "Gold", "CNPJ");
