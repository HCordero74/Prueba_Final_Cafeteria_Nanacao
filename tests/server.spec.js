const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de Cafés", () => {

  // Requerimiento 1: GET /cafes devuelve status 200 y un arreglo con al menos 1 objeto
  test("GET /cafes devuelve status 200 y un arreglo con al menos 1 objeto", async () => {
    const response = await request(server).get("/cafes");
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
    expect(response.body.length).toBeGreaterThan(0);
  });

  // Requerimiento 2: DELETE /cafes/:id devuelve status 404 si el id no existe
  test("DELETE /cafes/:id devuelve status 404 al intentar eliminar un café con un id que no existe", async () => {
    const jwtToken = "token_ejemplo";
    const idInexistente = 999;
    
    const response = await request(server)
      .delete(`/cafes/${idInexistente}`)
      .set("Authorization", jwtToken);
    
    expect(response.statusCode).toBe(404);
  });

  // Requerimiento 3: POST /cafes agrega un nuevo café y devuelve un código 201
  test("POST /cafes agrega un nuevo café y devuelve un código 201", async () => {
    const nuevoCafe = { id: 5, nombre: "Espresso" };
    
    const response = await request(server)
      .post("/cafes")
      .send(nuevoCafe);
    
    expect(response.statusCode).toBe(201);
    expect(response.body).toContainEqual(nuevoCafe);
  });

  // Requerimiento 4: PUT /cafes devuelve status 400 si el id del parámetro no coincide con el del payload
  test("PUT /cafes devuelve un status 400 si intentas actualizar un café con un id en los parámetros diferente al del payload", async () => {
    const cafeActualizado = { id: 2, nombre: "Café Modificado" };
    
    const response = await request(server)
      .put("/cafes/1")
      .send(cafeActualizado);
    
    expect(response.statusCode).toBe(400);
  });

});
