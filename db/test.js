const { v4: uuidv4 } = require('uuid');

module.exports = {
    users: [
        {
            "id": uuidv4(),
            "email": "simons@gmail.com",
            "password": "$2b$10$cGRkot1J38LFpge9ibVGo.i3oom8FA/7QzRy3SLBWTaIF9sRRKo6W"
        },
        {
            "id": uuidv4(),
            "email": "charlie@gmail.com",
            "password": "$2b$10$cGRkot1J38LFpge9ibVGo.i3oom8FA/7QzRy3SLBWTaIF9sRRKo6W"
        },
        {
            "id": uuidv4(),
            "email": "lya@gmail.com",
            "password": "$2b$10$cGRkot1J38LFpge9ibVGo.i3oom8FA/7QzRy3SLBWTaIF9sRRKo6W"
        }
    ]
}