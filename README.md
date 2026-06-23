# 🏥 Hospital Appointment System — MongoDB Redesign

## Project Overview
A MongoDB redesign of a Hospital Appointment System relational database. This project adapts a subset of the relational schema into a document-oriented database using three collections, demonstrating embedded documents, references, JSON schema validation, find queries, and aggregation pipelines. Built as part of a Higher Diploma in Computer Science Databases module.

## Features
- 3 collections — Doctor, Patient, Appointment — with JSON schema validation
- Sample data: 10 doctors, 10 patients, 11 appointments
- Multi-value fields (email addresses, phone numbers) modelled as nested objects with meaningful keys (e.g. home/work, mobile/landline)
- Doctor qualifications stored as an array of strings
- The `InvolvedIn` relationship embedded as an array of subdocuments within Appointment, each with a `doctor_id` and `role`
- 5 find queries using `$elemMatch`, `$in`, `$gte`/`$lte`, projections, and `.limit()`
- 2 aggregation pipelines using `$unwind`, `$group`, `$sort`, `$match`, `$lookup`, and `$project`

## Tech Stack
| Category | Technology |
|---|---|
| Database | MongoDB |
| Shell | mongosh |

## Collections

### Doctor
Stores doctor details as standalone documents. Qualifications are stored as an array of strings. Years of experience is stored as an integer to support range queries.

### Patient
Stores patient details as standalone documents. Multi-value fields such as email address and phone number are modelled as nested objects, since the keys carry meaningful information (e.g. home/work, mobile/landline).

### Appointment
The most complex collection. Stores a reference to the associated patient via `patient_id`. The original `InvolvedIn` relationship is embedded as an array of subdocuments called `doctors`, each containing a `doctor_id` and `role`.

## Files
| File | Description |
|---|---|
| `hospital_appointment_db.js` | Full implementation — collection creation with JSON schemas, sample documents, find queries, and aggregation pipelines |

## Setup Instructions

### Prerequisites
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running locally
- [mongosh](https://www.mongodb.com/try/download/shell) (MongoDB Shell)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/rachel-gillespie/hospital-appointment-system-mongodb-redesign
cd hospital-appointment-system-mongodb-redesign
```

## How to Run
1. Start MongoDB locally
2. Open mongosh
3. Load the script:
```js
use('hospital_appointment_db')
load("hospital_appointment_db.js")
```

## Queries Included
- Find all appointments for a specific doctor, sorted by date
- Find appointments for a doctor within a date range
- Find cancelled or scheduled appointments with projection
- Find appointments for a patient with a limit
- Find appointments for a specific patient with a specific doctor

## Aggregations Included
- Total appointments per doctor (using `$unwind`, `$group`, `$sort`)
- Scheduled appointment details joined with patient contact information (using `$match`, `$lookup`, `$project`)
