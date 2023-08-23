let nome = "Talles";

for(let i = 0; i < 10; i = i + 1){
  if(i == 3){
    nome = "Pedro";
  }

  if(i == 5 && nome == "Pedro"){
    console.log("Pode parar o nome é pedro!");
    break;
  }
  console.log(i)
}
