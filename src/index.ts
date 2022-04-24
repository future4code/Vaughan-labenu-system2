import app from "./app"
import { GetAllDocentesDB } from "./data"
import { changingClassUsuario } from "./endpoints/changingClassUsers"
import { changeModule } from "./endpoints/changingModule"
import { creatingEstHobby } from "./endpoints/creatingEstHobby"
import { creatingStudents } from "./endpoints/creatingStudents"
import { creatingTeacher } from "./endpoints/creatingTeacher"
import { creatingTurma } from "./endpoints/creatingTurma"
import { getALLClasses } from "./endpoints/getAllClasses"
import { getSudentAge } from "./endpoints/getStudentAgebyId"
import { GetAllDocentes } from "./endpoints/gettingAllTeachers"
import { searchingStudentByName } from "./endpoints/searchingStudentByName"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searchingTurmas"
import { SearchingDocenteByName } from "./endpoints/searchinTeacher"




app.post("/estudante", creatingStudents)

app.get("/estudante", searchingStudentByName)

app.put('/estudante', changingClassUsuario)

app.get("/id/estudante", getSudentAge)

app.post("/turmas", creatingTurma)

app.get("/turmas", getALLClasses)

app.get("/turmas/validas", SearchingTurmaAtiva)

app.get("/turmas/invalidas", SearchingTurmaInativas)

app.put("/turmas", changeModule)

app.get("/docente", GetAllDocentes)

app.put('/docente', changingClassUsuario)

app.get("/docente/nome", SearchingDocenteByName)

app.post("/docente", creatingTeacher)



// Nao devia existir somente para teste
app.post("/estudanteHobby", creatingEstHobby)



