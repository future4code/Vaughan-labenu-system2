import app from "./app"
import { Docente1, Estudante1  } from "./classes"
import { changeModule } from "./endpoints/changingModule"
import { creatingTurma} from "./endpoints/creatingTurma"
import { SearchingTurmaAtiva, SearchingTurmaInativas } from "./endpoints/searching"



app.post("/turmas" , creatingTurma)


app.get("/turmas/validas" ,  SearchingTurmaAtiva) 


app.get("/turmas/invalidas" ,  SearchingTurmaInativas) 



app.put("/turmas" ,  changeModule) 
 


