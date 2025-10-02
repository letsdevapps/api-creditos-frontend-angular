# api-creditos-frontend-angular
API Creditos Frontend Angular

# Backend Springboot

Necessario que a aplicação backend-springboot esteja rodando na porta 8080 para o frontend-angular, existem 3 endereços de api principais expostos

Metodo getCreditos baseado em uma consulta findAll()

	http://localhost:8080/api/creditos

Metodo getCreditosPorNfse baseado em uma consulta findByNumeroNfse(numeroNfse)
	
	http://localhost:8080/api/creditos/{numeroNfse}

Exemplo:

	http://localhost:8080/api/creditos/7891011
	
Metodo getCreditoPorNumCredConstituido baseado em uma consulta findByNumeroCredito(numeroCredito)	
	
	http://localhost:8080/api/creditos/credito/{numeroCredito}
	
Exemplo:

	http://localhost:8080/api/creditos/credito/123456