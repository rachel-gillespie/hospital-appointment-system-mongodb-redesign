use(hospital_appointment_20118715);

// 3.0 Database

// 3.1 Collections
db.createCollection("patient", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Patient Object Validation",
            required: ["patient_id", "name", "date_of_birth", "phone_number"],
            properties: {
                patient_id: { bsonType: "int" },
                name: {
                    bsonType: "object",
                    required: ["first", "last"],
                    properties: {
                        first: { bsonType: "string" },
                        last: { bsonType: "string" }
                    }
                },
                date_of_birth: { bsonType: "date" },
                gender: { bsonType: "string" },
                email_address: { bsonType: "object" },
                phone_number: { bsonType: "object" },
                blood_type: { bsonType: "string" },
                registration_date: { bsonType: "date" }
            }
        }
    }
})

db.createCollection("doctor", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Doctor Object Validation",
            required: ["doctor_id", "name", "phone_number", "specialisation"],
            properties: {
                doctor_id: { bsonType: "int" },
                name: { bsonType: "string" },
                email_address: { bsonType: "object" },
                phone_number: { bsonType: "object" },
                specialisation: { bsonType: "string" },
                years_of_experience: { bsonType: "int" },
                qualification: {
                    bsonType: "array",
                    items: {
                        bsonType: "string"
                    }
                }
            }
        }
    }
})

db.createCollection("appointment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Appointment Object Validation",
            required: ["appointment_id", "name", "date_of_birth", "phone_number"],
            properties: {
                appointment_id: { bsonType: "int" },
                date: { bsonType: "date" },
                time: { bsonType: "string" },
                status: { bsonType: "object" },
                reason_for_visit: { bsonType: "object" },
                notes: { bsonType: "string" },
                doctors: { 
                    bsonType: "array", 
                    items: {
                        bsonType: "object"
                        
                    }
                },
                patient_id: { bsonType: "int" }
            }
        }
    }
})

// 3.2 Documents

// Patient document
db.patient.insertOne(
    {
        "patient_id": 101,
        "name": { "first": "Sarah", "last": "Murphy" },
        "date_of_birth": ISODate("1985-03-12"),
        "gender": "female",
        "email_address": { "home": "sarah.murphy@gmail.com", "work": "smurphy@outlook.ie" },
        "phone_number": { "mobile": "0861234567", "landline": "0211234567" },
        "blood_type": "A+",
        "registration_date": ISODate("2020-03-05")
    }
)
// Doctor document
db.doctor.insertOne(
    {
        "doctor_id": 564,
        "name": "Dr. Ciarán Walsh",
        "email_address": { "clinic": "c.walsh@hospital.ie", "receptionist": "receptionofc.walsh@hospital.ie" },
        "phone_number": { "mobile": "0861112233", "work": "0214567890" },
        "specialisation": "Cardiology",
        "years_of_experience": 14,
        "qualification": ["MB BCh", "MRCPI"]
    }
)
// Appointment document
db.appointment.insertOne(
    {
        "appointment_id": 5001,
        "date": ISODate("2025-04-10"),
        "time": "9:30",
        "status": "completed",
        "reason_for_visit": "chest pain",
        "notes": "referred to specialist",
        "doctors": [
            {
                "doctor_id": 564,
                "roles": "lead"
            }
        ],
        "patient_id": 101
    }
)

// 3.3 Find Queries

// 3.4 Aggregations