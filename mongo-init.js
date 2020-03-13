use eventsDatabase

db.createUser(
    {
        user : "EventsUser",
        pwd : "4ip0events",
        roles : [
            {
                role : "readWrite",
                db : "eventsDatabase"
            }
        ]
    }
)
