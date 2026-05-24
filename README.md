# Hospital Appointment System — MongoDB Redesign

A MongoDB redesign of a Hospital Appointment System relational database,
built as part of a Database Design and Implementation assignment.

## Technologies Used

- MongoDB
- mongosh

## Overview

This project adapts a subset of a relational hospital database schema 
into a MongoDB document-oriented database. It demonstrates the use of 
embedded documents and references across three collections.

## Collections

### Doctor
Stores doctor details as standalone documents. Qualifications are stored 
as an array of strings. Years of experience is stored as an integer to 
support range queries.

### Patient
Stores patient details as standalone documents. Multi-value fields such 
as email address and phone number are modelled as nested objects, since 
the keys carry meaningful information (e.g. home/work, mobile/landline).

### Appointment
The most complex collection. Stores a reference to the associated patient 
via `patient_id`. The original `InvolvedIn` relationship is embedded as 
an array of subdocuments called `doctors`, each containing a `doctor_id` 
and `role`.

## File Structure

- `rachelgillespie_ca2.js` — full implementation script including:
  - Database and collection creation with JSON schemas
  - Sample documents (10 patients, 10 doctors, 11 appointments)
  - 5 find queries
  - 2 aggregation pipelines

## Running the Script

1. Start MongoDB locally
2. Open mongosh
3. Run the following:

use('hospital_appointment_db')
load("rachelgillespie_ca2.js")

## Queries Included

- Find all appointments for a specific doctor, sorted by date
- Find appointments for a doctor within a date range
- Find cancelled or scheduled appointments with projection
- Find appointments for a patient with a limit
- Find appointments for a specific patient with a specific doctor

## Aggregations Included

- Total appointments per doctor
- Scheduled appointment details joined with patient contact information