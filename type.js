// Ainda nao esta pegando funcoes

// MÉTODO
function type(value) {
  const type = typeof value;
  if (type == "string" || type == "boolean") return type;
  else if (type == "number" && Number.isInteger(value)) return "integer";
  else if (type == "number" && !Number.isInteger(value)) return "float";
  else if (
    type === "object" &&
    Object.prototype.toString.apply(value) === "[object Array]"
  )
    return "array";
  // else if (
  //   type === "object" &&
  //   Object.prototype.toString.call(value) == '[object Function]'
  // )
  //   return "function";
  else return "object";
}

// IMPLEMENTAÇÃO
const valores = [["song", 2], { chave: "valor" }, 6.34, "stringuinha", false, 7];
for (let i = 0; i < valores.length; i++) console.log(valores[i] + " é: " + type(valores[i]));