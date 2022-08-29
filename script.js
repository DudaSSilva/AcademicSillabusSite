function entrar(i1, i2){
  let user = document.getElementById(i1).value
  let pass = document.getElementById(i2).value

  let userValue = 'AcademicSyllabus2022'
  let passValue = 'ASapp2022'

  if(user == userValue && pass == passValue){
    window.location="../principalPage.html"
  }
}