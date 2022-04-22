import app from "./app"
import { changeModule } from "./endpoints/changingModule"
import { creatingEstHobby } from "./endpoints/creatingEstHobby"
import { creatingTurma} from "./endpoints/creatingTurma"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searchingTurmas"




app.post("/turmas" , creatingTurma)


app.get("/turmas/validas" ,  SearchingTurmaAtiva) 


app.get("/turmas/invalidas" ,  SearchingTurmaInativas) 



app.put("/turmas" ,  changeModule) 
 

// Nao devia existir somente para teste
app.post("/estudanteHobby", creatingEstHobby)