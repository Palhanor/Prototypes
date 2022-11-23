// INCOMPLETO
function linEq(equation) {
  // Tratar o input para o formato desejado (que roda no eval())
  // verificar qual o grau
  // Disparar a funcao referente ao grau
  if (grau == 1) return deg1(equation);
}

function deg1(equation) {
  let [ax, b] = equation.includes("+")
    ? equation.split("+")
    : equation.split("-");
  let a = ax.includes("*x") ? ax.replace("*x", "") : 1;
  b = b ? b : 0;
  const result = equation.includes("+") ? "-" + b + "/" + a : b + "/" + a;
  return eval(result);
}

// Não funciona com subtração
// Verificar a=1
// Verificar b=0
// Verificar c=0
function deg2(equation) {
  // quebrar com subtração ou ambos
  let [ax2, bx, c] = equation.split("+");
  let a = ax2.replace("*x**2", "");
  let b = bx.replace("*x", "");
  // Aplicar bhaskara
  return [a, b, c];
}
