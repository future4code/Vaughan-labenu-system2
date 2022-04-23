import app from "./app"
import { changeModule } from "./endpoints/changingModule"
import { creatingEstHobby } from "./endpoints/creatingEstHobby"
import { creatingStudents } from "./endpoints/creatingStudents"
import { creatingTeacher } from "./endpoints/creatingTeacher"
import { creatingTurma} from "./endpoints/creatingTurma"
import { getSudentAge } from "./endpoints/getStudentAgebyId"
import { searchingStudentByName } from "./endpoints/searchingStudentByName"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searchingTurmas"




app.post("/estudante" , creatingStudents)

app.get("/estudante" , searchingStudentByName)

app.post("/turmas" , creatingTurma)

app.get("/turmas/validas" ,  SearchingTurmaAtiva) 

app.get("/turmas/invalidas" ,  SearchingTurmaInativas) 


app.put("/turmas" ,  changeModule) 
 

app.post("/docente", creatingTeacher)

app.get("/id/estudante", getSudentAge)

// Nao devia existir somente para teste
app.post("/estudanteHobby", creatingEstHobby)