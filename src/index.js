const { response, request } = require('express');
const express = require('express');

const app = express();

///// API recives JSONS files, every data file pass through express.json()
//identificar que a API vai receber dados em formato de JSON
//o use faz com que todas os dados passem pela função express.json()
app.use(express.json());

const projects = [];

//two attributes
//dois atributos (recurso, arrow function que retorna a resposta (geralmente em json {} || [] ))
app.get('/projects', (request, response) => {
  //query params
  const params = request.query;
  console.log(params);
  //{ title: 'React', owner: 'Priscila' }

  const { title, owner } = request.query;
  console.log(title);
  // React
  console.log(owner);
  // Priscila

  return response.json(['Projeto 01', 'Projeto 02']);
});

app.post('/projects', (request, response) => {
  //request body params:
  const body = request.body;
  console.log(body);

  return response.json(['Projeto 01', 'Projeto 02', 'Projeto 03']);
});

//every PUT has a identifier parameter (id)
//todo PUT tem que passar um parâmetro identificador (id)
app.put('/projects/:id', (request, response) => {
  //rote params
  const { id } = request.params;
  console.log(id);

  return response.json(['Projeto 04', 'Projeto 02', 'Projeto 03']);
});

//every DELETE has a identifier parameter
//todo DELETE tem que passar um parametro identificador
app.delete('/projects/:id', (request, response) => {
  return response.json(['Projeto 02', 'Projeto 03']);
});

//escutar a porta 3333
app.listen(3333, () => {
  console.log('Back-end started! 😜');
});
