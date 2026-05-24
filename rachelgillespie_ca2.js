// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// 3.0 Database
use("hospital_appointment_20118715");

// 3.1 Collections
// Patient collection
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

// Doctor collection
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

// Appointment collection
db.createCollection("appointment", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            title: "Appointment Object Validation",
            required: ["appointment_id", "date", "time", "status", "patient_id"],
            properties: {
                appointment_id: { bsonType: "int" },
                date: { bsonType: "date" },
                time: { bsonType: "string" },
                status: { bsonType: "string" },
                reason_for_visit: { bsonType: "string" },
                notes: { bsonType: "string" },
                doctors: {
                    bsonType: "array",
                    items: {
                        bsonType: "object",
                        properties: {
                            doctor_id: { bsonType: "int" },
                            roles: { bsonType: "string" }
                        }
                    }
                },
                patient_id: { bsonType: "int" }
            }
        }
    }
})

// 3.2 Documents
// Patients
db.patient.insertMany([
    {
        "patient_id": 101,
        "name": { "first": "Sarah", "last": "Murphy" },
        "date_of_birth": ISODate("1985-03-12"),
        "gender": "female",
        "email_address": { "home": "sarah.murphy@gmail.com", "work": "smurphy@outlook.ie" },
        "phone_number": { "mobile": "0861234567", "landline": "0211234567" },
        "blood_type": "A+",
        "registration_date": ISODate("2020-03-05")
    },
    {
        "patient_id": 102,
        "name": { "first": "James", "last": "O'Brien" },
        "date_of_birth": ISODate("1972-11-28"),
        "gender": "male",
        "email_address": { "home": "jobrien@gmail.com" },
        "phone_number": { "mobile": "0871234568", "landline": "0214567890" },
        "blood_type": "O-",
        "registration_date": ISODate("2019-06-15")
    },
    {
        "patient_id": 103,
        "name": { "first": "Aoife", "last": "Kelly" },
        "date_of_birth": ISODate("1990-07-04"),
        "gender": "female",
        "email_address": { "home": "aoife.kelly@hotmail.com", "work": "akelly@work.ie" },
        "phone_number": { "mobile": "0851234569" },
        "blood_type": "B+",
        "registration_date": ISODate("2021-01-20")
    },
    {
        "patient_id": 104,
        "name": { "first": "Conor", "last": "Byrne" },
        "date_of_birth": ISODate("1988-05-17"),
        "gender": "male",
        "email_address": { "home": "conor.byrne@gmail.com" },
        "phone_number": { "mobile": "0861234570", "landline": "0212345678" },
        "blood_type": "AB+",
        "registration_date": ISODate("2018-09-10")
    },
    {
        "patient_id": 105,
        "name": { "first": "Niamh", "last": "Doyle" },
        "date_of_birth": ISODate("1995-02-28"),
        "gender": "female",
        "email_address": { "home": "niamh.doyle@gmail.com", "work": "ndoyle@work.ie" },
        "phone_number": { "mobile": "0871234571" },
        "blood_type": "A-",
        "registration_date": ISODate("2022-03-14")
    },
    {
        "patient_id": 106,
        "name": { "first": "Liam", "last": "Fitzpatrick" },
        "date_of_birth": ISODate("1965-08-30"),
        "gender": "male",
        "email_address": { "home": "liam.fitz@gmail.com" },
        "phone_number": { "mobile": "0851234572", "landline": "0213456789" },
        "blood_type": "O+",
        "registration_date": ISODate("2017-11-05")
    },
    {
        "patient_id": 107,
        "name": { "first": "Ciara", "last": "Brennan" },
        "date_of_birth": ISODate("1993-04-12"),
        "gender": "female",
        "email_address": { "home": "ciara.brennan@hotmail.com" },
        "phone_number": { "mobile": "0861234573" },
        "blood_type": "B-",
        "registration_date": ISODate("2020-07-22")
    },
    {
        "patient_id": 108,
        "name": { "first": "Seán", "last": "McCarthy" },
        "date_of_birth": ISODate("1979-12-03"),
        "gender": "male",
        "email_address": { "home": "sean.mccarthy@gmail.com", "work": "smccarthy@work.ie" },
        "phone_number": { "mobile": "0871234574", "landline": "0214567891" },
        "blood_type": "A+",
        "registration_date": ISODate("2016-04-18")
    },
    {
        "patient_id": 109,
        "name": { "first": "Orla", "last": "Quinn" },
        "date_of_birth": ISODate("2001-09-15"),
        "gender": "female",
        "email_address": { "home": "orla.quinn@gmail.com" },
        "phone_number": { "mobile": "0851234575" },
        "blood_type": "AB-",
        "registration_date": ISODate("2023-02-01")
    },
    {
        "patient_id": 110,
        "name": { "first": "Declan", "last": "Ryan" },
        "date_of_birth": ISODate("1958-06-22"),
        "gender": "male",
        "email_address": { "home": "declan.ryan@eircom.net" },
        "phone_number": { "mobile": "0861234576", "landline": "0215678901" },
        "blood_type": "O+",
        "registration_date": ISODate("2015-08-30")
    }
])
// Doctors
db.doctor.insertMany([
    {
        "doctor_id": 564,
        "name": "Dr. Ciarán Walsh",
        "email_address": { "clinic": "c.walsh@hospital.ie", "receptionist": "receptionofc.walsh@hospital.ie" },
        "phone_number": { "mobile": "0861112233", "work": "0214567890" },
        "specialisation": "Cardiology",
        "years_of_experience": 14,
        "qualification": ["MB BCh", "MRCPI"]
    },
    {
        "doctor_id": 565,
        "name": "Dr. Niamh Brennan",
        "email_address": { "clinic": "n.brennan@hospital.ie", "personal": "nbrenn@gmail.com" },
        "phone_number": { "mobile": "0872223344", "work": "0214567892" },
        "specialisation": "Neurology",
        "years_of_experience": 9,
        "qualification": ["MB BCh", "FRCPI"]
    },
    {
        "doctor_id": 566,
        "name": "Dr. Patrick Gallagher",
        "email_address": { "clinic": "p.gallagher@hospital.ie" },
        "phone_number": { "mobile": "0863334455", "work": "0214567893" },
        "specialisation": "Orthopaedics",
        "years_of_experience": 17,
        "qualification": ["MB BCh", "FRCSI", "MCh Orth"]
    },
    {
        "doctor_id": 567,
        "name": "Dr. Siobhán O'Connor",
        "email_address": { "clinic": "s.oconnor@hospital.ie", "personal": "siobhan.oc@gmail.com" },
        "phone_number": { "mobile": "0874445566", "work": "0214567894" },
        "specialisation": "Paediatrics",
        "years_of_experience": 11,
        "qualification": ["MB BCh", "MRCPCH"]
    },
    {
        "doctor_id": 568,
        "name": "Dr. Fergus Healy",
        "email_address": { "clinic": "f.healy@hospital.ie" },
        "phone_number": { "mobile": "0865556677", "work": "0214567895" },
        "specialisation": "Cardiology",
        "years_of_experience": 22,
        "qualification": ["MB BCh", "FRCPI", "FESC"]
    },
    {
        "doctor_id": 569,
        "name": "Dr. Aoibhinn Mullen",
        "email_address": { "clinic": "a.mullen@hospital.ie", "personal": "aoibhinn.m@gmail.com" },
        "phone_number": { "mobile": "0876667788", "work": "0214567896" },
        "specialisation": "Dermatology",
        "years_of_experience": 7,
        "qualification": ["MB BCh", "MRCPI"]
    },
    {
        "doctor_id": 570,
        "name": "Dr. Brendan Nolan",
        "email_address": { "clinic": "b.nolan@hospital.ie" },
        "phone_number": { "mobile": "0867778899", "work": "0214567897" },
        "specialisation": "Oncology",
        "years_of_experience": 19,
        "qualification": ["MB BCh", "FRCPI", "MRCP"]
    },
    {
        "doctor_id": 571,
        "name": "Dr. Caoimhe Burke",
        "email_address": { "clinic": "c.burke@hospital.ie", "personal": "caoimhe.b@gmail.com" },
        "phone_number": { "mobile": "0878889900", "work": "0214567898" },
        "specialisation": "Psychiatry",
        "years_of_experience": 13,
        "qualification": ["MB BCh", "MRCPsych"]
    },
    {
        "doctor_id": 572,
        "name": "Dr. Eoin Sheridan",
        "email_address": { "clinic": "e.sheridan@hospital.ie" },
        "phone_number": { "mobile": "0869990011", "work": "0214567899" },
        "specialisation": "Gastroenterology",
        "years_of_experience": 16,
        "qualification": ["MB BCh", "FRCPI", "MRCP"]
    },
    {
        "doctor_id": 573,
        "name": "Dr. Roisín Flood",
        "email_address": { "clinic": "r.flood@hospital.ie", "personal": "roisin.flood@gmail.com" },
        "phone_number": { "mobile": "0870001122", "work": "0214567900" },
        "specialisation": "Endocrinology",
        "years_of_experience": 8,
        "qualification": ["MB BCh", "MRCPI"]
    }
])
// Appointments
db.appointment.insertMany([
    {
        "appointment_id": 5001,
        "date": ISODate("2025-04-10"),
        "time": "9:30",
        "status": "completed",
        "reason_for_visit": "chest pain",
        "notes": "referred to specialist",
        "doctors": [{ "doctor_id": 564, "roles": "lead" }],
        "patient_id": 101
    },
    {
        "appointment_id": 5002,
        "date": ISODate("2025-04-15"),
        "time": "10:00",
        "status": "scheduled",
        "reason_for_visit": "follow-up consultation",
        "notes": "blood pressure monitoring",
        "doctors": [{ "doctor_id": 564, "roles": "lead" }],
        "patient_id": 101
    },
    {
        "appointment_id": 5003,
        "date": ISODate("2025-03-18"),
        "time": "11:15",
        "status": "cancelled",
        "reason_for_visit": "headaches and dizziness",
        "notes": "patient cancelled",
        "doctors": [{ "doctor_id": 565, "roles": "lead" }],
        "patient_id": 102
    },
    {
        "appointment_id": 5004,
        "date": ISODate("2025-02-10"),
        "time": "14:30",
        "status": "completed",
        "reason_for_visit": "knee pain",
        "notes": "referred for physiotherapy",
        "doctors": [{ "doctor_id": 566, "roles": "lead" }, { "doctor_id": 567, "roles": "assisting" }],
        "patient_id": 103
    },
    {
        "appointment_id": 5005,
        "date": ISODate("2025-05-02"),
        "time": "09:00",
        "status": "scheduled",
        "reason_for_visit": "skin rash",
        "doctors": [{ "doctor_id": 569, "roles": "lead" }],
        "patient_id": 104
    },
    {
        "appointment_id": 5006,
        "date": ISODate("2024-12-20"),
        "time": "15:00",
        "status": "completed",
        "reason_for_visit": "diabetes management",
        "notes": "insulin dosage adjusted",
        "doctors": [{ "doctor_id": 573, "roles": "lead" }],
        "patient_id": 105
    },
    {
        "appointment_id": 5007,
        "date": ISODate("2025-01-08"),
        "time": "11:00",
        "status": "cancelled",
        "reason_for_visit": "anxiety and depression",
        "notes": "rescheduled",
        "doctors": [{ "doctor_id": 571, "roles": "lead" }],
        "patient_id": 106
    },
    {
        "appointment_id": 5008,
        "date": ISODate("2025-03-25"),
        "time": "13:30",
        "status": "completed",
        "reason_for_visit": "stomach pain",
        "notes": "endoscopy recommended",
        "doctors": [{ "doctor_id": 572, "roles": "lead" }],
        "patient_id": 107
    },
    {
        "appointment_id": 5009,
        "date": ISODate("2025-04-28"),
        "time": "10:45",
        "status": "scheduled",
        "reason_for_visit": "chest tightness",
        "doctors": [{ "doctor_id": 568, "roles": "lead" }, { "doctor_id": 564, "roles": "assisting" }],
        "patient_id": 108
    },
    {
        "appointment_id": 5010,
        "date": ISODate("2025-02-14"),
        "time": "16:00",
        "status": "completed",
        "reason_for_visit": "routine check-up",
        "notes": "all clear",
        "doctors": [{ "doctor_id": 567, "roles": "lead" }],
        "patient_id": 109
    },
    {
        "appointment_id": 5011,
        "date": ISODate("2025-05-10"),
        "time": "08:30",
        "status": "scheduled",
        "reason_for_visit": "cancer screening",
        "doctors": [{ "doctor_id": 570, "roles": "lead" }],
        "patient_id": 110
    }
])

// 3.3 Find Queries
// Find all appointments involving a specific doctor, sorted by date
db.appointment.find(
    { "doctors": { $elemMatch: { "doctor_id": 564 } } }
).sort({ date: 1 })

// Find all appointments for a specific doctor within a date range
db.appointment.find(
    {
        "doctors": { $elemMatch: { "doctor_id": 564 } },
        "date": { $gte: ISODate("2024-12-16"), $lte: ISODate("2025-04-10") }
    }
)

// Find appointments with status "cancelled" or "scheduled", with projection
db.appointment.find(
    { "status": { $in: ["cancelled", "scheduled"] } },
    { "date": 1, "time": 1, "doctors": 1, "patient_id": 1 }
)

// Find appointments for a specific patient by patient_id, limit to 2 results
db.appointment.find(
    { "patient_id": 101 }
).limit(2)

// Find appointments for a specific patient with a particular doctor, with projection
db.appointment.find(
    {
        "patient_id": 101,
        "doctors": { $elemMatch: { "doctor_id": 564 } }
    },
    { "date": 1, "time": 1, "doctors": 1, "patient_id": 1 }
)

// 3.4 Aggregations
// Find how many appointments each doctor has
db.appointment.aggregate([
    { $unwind: "$doctors" },
    { $group: { _id: "$doctors.doctor_id", total_appointments: { $sum: 1 } } },
    { $sort: { total_appointments: -1 } }
])

// Find appointment details along with the patient's full name and contact information
db.appointment.aggregate([
    { $match: { "status": "scheduled" } },
    {
        $lookup: {
            from: "patient",
            localField: "patient_id",
            foreignField: "patient_id",
            as: "patient_info"
        }
    },
    {
        $project: { "patient_info.name": 1, "patient_info.email_address": 1, "patient_info.phone_number": 1, "date": 1, "time": 1 }
    }
])
