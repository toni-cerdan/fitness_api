CREATE TABLE Users (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL
);
CREATE TABLE Workouts (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    duration TIME(6) NOT NULL,
    volume DECIMAL(18, 0) NOT NULL,
    date DATE NOT NULL,
    new_prs SMALLINT NOT NULL,
    user_id VARCHAR(50) NOT NULL,
    FOREIGN KEY(user_id) REFERENCES Users(id)
);
CREATE TABLE Categories (name VARCHAR(50) PRIMARY KEY);
CREATE TABLE Body_parts (name VARCHAR(50) PRIMARY KEY);
CREATE TABLE Exercises (
    id VARCHAR(50) PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    category VARCHAR(50) NULL,
    body_part VARCHAR(50) NULL,
    FOREIGN KEY(body_part) REFERENCES Body_parts(name),
    FOREIGN KEY(category) REFERENCES Categories(name)
);
CREATE TABLE Workout_exercises (
    workout_id VARCHAR(50) NOT NULL UNIQUE,
    exercise_id VARCHAR(50) NOT NULL UNIQUE,
    position SMALLINT NOT NULL,
    PRIMARY KEY(workout_id, exercise_id),
    FOREIGN KEY(workout_id) REFERENCES Workouts(id),
    FOREIGN KEY(exercise_id) REFERENCES Exercises(id)
);
CREATE TABLE Sets (
    id VARCHAR(50) PRIMARY KEY,
    set SMALLINT NOT NULL,
    reps SMALLINT NOT NULL,
    weight DECIMAL(18, 0) NOT NULL,
    position SMALLINT NOT NULL,
    exercise_id VARCHAR(50) NOT NULL,
    workout_id VARCHAR(50) NOT NULL,
    FOREIGN KEY (workout_id) REFERENCES Workout_exercises(workout_id),
    FOREIGN KEY (exercise_id) REFERENCES Workout_exercises(exercise_id)
);