# Koomwan

Database Design

#User
{
  "_id": "ObjectId",
  "username": "string",
  "password": "string", // Hashed password
  "phone": "string",
  "email": "string",
  "role": "string", // e.g., "user", "doctor", "admin"
  "userhealthinfo": "ObjectId",
  
  "created_at": "timestamp",
  "updated_at": "timestamp"
}

#UserHealthInfo
{
  "_id": "ObjectId",
  "user": "ObjectId",

  "diabetestype": "string", // Type 1, Type 2, Gestational
  "birthdate": "date",
  "gender": "string",
  "height": "number",
  "weight": "number",

  "healthrecords": ["_id": "ObjectId",...],
  
  "created_at": "timestamp",
  "updated_at": "timestamp"
}

#HealthRecords
{
  "_id": "ObjectId",
  "userhealthinfo": "ObjectId", // Reference to UserHealthInfo

  "recordtime": "timestamp",
  "height": "number",
  "weight": "number",
  "bloodsugar": "number",
  "reading": "number", // Blood sugar level
  "notes": "string",
  "created_at": "timestamp"
}
