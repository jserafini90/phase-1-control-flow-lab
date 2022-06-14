function scuberGreetingForFeet(distance){
  let response
  if (distance <= 400){ 
  response = "This one is on me!"
return response;}
else if (distance > 2000 && distance < 2500){
  response = "I will gladly take your thirty bucks."
  return response;}
else if (distance >= 2500){
  response = "No can do."
  return response;}
}

function ternaryCheckCity(city){
  return city === 'NYC'?"Ok, sounds good." :`No go.`
}

function switchOnCharmFromTip(tip){
  let msg;
  switch(tip){
    case "generous":
      msg = "Thank you so much."
      break;
      case "not as generous":
      msg = "Thank you."
      break;
      default:
    msg = `Bye.`
  }
  return msg
}