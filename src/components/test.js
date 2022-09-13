const ListUsers = ({users = [ { id: 1, firstname :"userFirstname1", lastname : "userLastname1"},
 { id: 2, firstname :"userFirstname2", lastname : "userLastname2"}, 
 { id: 3, firstname :"userFirstname3", lastname: "userLastname3"},]})=>{
    const sortUsers = users?.sort((a,b)=>a.lastname < b.lastname ? -1 : 1) 
     return ( 
        <div>
            {!users?.length && <div>Aucun résultat </div>}
            {!!users && 
            <ul>
                {sortUsers.map(({id, firstname, lastname})=> <li key={id}> {firstname} {lastname}</li>
                )}
            </ul>
        }
        </div>
    
    )
    }
    