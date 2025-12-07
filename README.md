## Vehicle Rental System (Express + TypeScript + PostgreSQL)

🎯 Project Overview
A backend API for a vehicle rental management system that handles:

- Vehicles - Manage vehicle inventory with availability tracking
- Customers - Manage customer accounts and profiles
- Bookings - Handle vehicle rentals, returns and cost calculation
- Authentication - Secure role-based access control (Admin and Customer roles)

 **Live API URL:** https://vehicle-rental-system-iota.vercel.app/

**GitHub Repository:** https://github.com/mdsamiulislam54/Vehicle-Rental-System-.git

---

##  Features

###  Authentication & Authorization

### User Roles
- **Admin** - Full system access to manage vehicles, users and all bookings
- **Customer** - Can register, view vehicles, create/manage own bookings

### Authentication Flow
- Passwords are hashed using bcrypt before storage into the database
- User login via /api/v1/auth/signin and receives a JWT (JSON Web Token)
- Protected endpoints require token in header: Authorization: Bearer <token>
- Validates the token and checks user permissions
- Access granted if authorized, otherwise returns 401 (Unauthorized) or 403 (Forbidden)



---

## 🛠️ Technology Stack
- Node.js + TypeScript
- Express.js (web framework)
- PostgreSQL (database)
- bcrypt (password hashing)
- jsonwebtoken (JWT authentication)

---

## Project Structure


```
src/
├── config/
│   ├── db.ts
│   └── index.ts
│
├── middleware/
│   └── verifyRole.ts
│
├── modules/
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.service.ts
│   │   └── auth.route.ts
│   │
│   ├── users/
│   │   ├── users.controller.ts
│   │   ├── users.service.ts
│   │   └── users.route.ts
│   │
│   ├── vehicles/
│   │   ├── vehicles.controller.ts
│   │   ├── vehicles.service.ts
│   │   └── vehicles.route.ts
│   │
│   └── bookings/
│       ├── bookings.controller.ts
│       ├── bookings.service.ts
│       └── bookings.route.ts
│
├── lib/
│
├── app.ts
└── server.ts
```


---

#  API Endpoints Overview:
## Authentication Routes

| Method | Endpoint              | Access | Description                     |
|--------|------------------------|---------|---------------------------------|
| POST   | /api/v1/auth/signup   | Public  | Register new user account       |
| POST   | /api/v1/auth/signin   | Public  | Login and receive JWT token     |


## Vehicle Management Routes

| Method | Endpoint                     | Access      | Description                                                          |
|--------|-------------------------------|-------------|----------------------------------------------------------------------|
| POST   | /api/v1/vehicles             | Admin only  | Add new vehicle (name, type, reg no, rent price, availability)       |
| GET    | /api/v1/vehicles             | Public      | View all vehicles                                                     |
| GET    | /api/v1/vehicles/:vehicleId  | Public      | View single vehicle details                                           |
| PUT    | /api/v1/vehicles/:vehicleId  | Admin only  | Update vehicle details / daily rent / availability                   |
| DELETE | /api/v1/vehicles/:vehicleId  | Admin only  | Delete vehicle (only if no active bookings exist)                    |


## User Management Routes

| Method | Endpoint               | Access          | Description                                       |
|--------|-------------------------|------------------|---------------------------------------------------|
| GET    | /api/v1/users          | Admin only       | View all users                                    |
| PUT    | /api/v1/users/:userId  | Admin or Own     | Admin updates any user; Customer updates own data |
| DELETE | /api/v1/users/:userId  | Admin only       | Delete user (only if no active bookings exist)    |


## Booking Management Routes:

| Method | Endpoint                        | Access                  | Description                                                                 |
|--------|----------------------------------|--------------------------|-----------------------------------------------------------------------------|
| POST   | /api/v1/bookings                | Customer or Admin        | Create new booking (validates vehicle, calculates price, marks booked)      |
| GET    | /api/v1/bookings                | Role-based               | Admin: View all bookings • Customer: View own bookings                     |
| PUT    | /api/v1/bookings/:bookingId     | Role-based               | Customer: Cancel before start • Admin: Mark returned (vehicle available)    |



---


##  Installation & Setup

###  Clone the repository

```bash
#1
git clone https://github.com/mdsamiulislam54/Vehicle-Rental-System-.git
cd vehicle-rental-system
```
```
#2 Install dependencies
pnpm install

```
```
#3 Setup environment variables
.env

```
```
#4 Run project in development mode
pnpm dev

```
```
#5 Build TypeScript
pnpm build

```

##  Testing

### Use Postman or Thunder Client and attach token:

```
Authorization → Bearer <token>
```
##  Deployment (Vercel)

```
dist/
```
## Vercel.json

```
{
  "version": 2,
  "builds": [
    {
      "src": "dist/server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "dist/server.js"
    }
  ]
}
```

## 🤝 Contributing

Pull requests are welcome!
Feel free to suggest improvements, refactors, or additional features.



#  What you need to give me 
```


If you want, I will also:

✔ Add images  
✔ Add API response examples  
✔ Add database table diagrams  
✔ Add logo/header for README

Just send:

**"Add advanced README"**  
or  
**"Add ER diagram"**

Ready to polish more!

```