use score_table;
db.dropDatabase();

db.scores.insertMany([
    {
        "username": "charlie05",
        "score": 10,
        "rank": 1,
        "QA_history": [
            {
            "category": "geography",
            "question": "What is the capital of Chad ?",
            "answer": "N'djamena",
            "isCorrect": false
            },
            {
                "category": "language",
                "question": "The word rodent comes from the italian 'rodere', which means?",
                "answer": "Gnaw",
                "isCorrect": true
            }
            ]
    },
    {
        "username": "sushi04",
        "score": 10,
        "rank": 1,
        "QA_history": [
            {
                "category": "mathematics",
                "question": "What is x to the power of zero equal to?",
                "answer": "One",
                "isCorrect": false
            },
            {
                "category": "mathematics",
                "question": "How many corners are there in a cube",
                "answer": "Eight",
                "isCorrect": true
            }
            ]
    }
])