# 🛒 E-Commerce Mock Project

A full-stack, production-inspired e-commerce application built with modern web technologies. The project demonstrates a scalable architecture with a secure backend, persistent database design, authentication system, API validation, and a dynamic product catalog experience.

The application focuses on clean separation of concerns, type safety, security best practices, and a smooth user shopping experience.

# 🚧 Project Status

This project is currently under active development.


# ✨ Features

## 🛒 Shopping Features

- Product details pages
- Add/remove cart items
- Quantity updates
- Checkout flow
- Order history
- Product reviews
- Wishlist management

## 🛍️ Customer Experience

- Dynamic product catalog
- Product browsing and filtering
- Shopping cart management
- Persistent cart sessions
- Responsive UI design
- Theme customization
- Optimized data fetching and caching
- Form validation with user-friendly error handling

## 💳 Payment System

Stripe integration using test mode.

Features:
- PaymentIntent API
- Secure checkout flow
- Payment confirmation through webhooks
- Order status synchronization

## 🔐 Authentication & Security

- Secure user registration and login
- Password hashing using bcrypt
- JWT-based authentication
- Protected API routes
- Request payload validation
- Secure database schema validation

## ⚡ Performance & Architecture

- Server-state caching with TanStack Query
- Client-state management with Zustand
- Optimized API communication
- Modular backend architecture
- Type-safe frontend development
- Cloud-hosted database infrastructure

# 🏛️ Backend Architecture

The backend follows a layered architecture:
```
HTTP Request  
      |
      ↓
   Routes
      |
      ↓
 Controllers
      |
      ↓
  Services
      |
      ↓
Repositories
      |
      ↓
 Mongoose Models
      |
      ↓
 MongoDB Atlas
```

### Controllers
Handle HTTP requests and responses.

### Services
Contain business logic and application rules.

### Repositories
Abstract database operations.

### Models
Define MongoDB schemas using Mongoose.

---

# 🔌 API Overview

## Authentication

| Method | Endpoint | Description |
|-|-|-|
| POST | /api/auth/register | Create account |
| POST | /api/auth/login | Login user |

## Products

| Method | Endpoint | Description |
|-|-|-|
| GET | /api/products | Get products |
| GET | /api/products/:id | Get product |
| POST | /api/products | Create product (Admin) |

## Orders

| Method | Endpoint | Description |
|-|-|-|
| POST | /api/orders | Create order |
| GET | /api/orders/me | User orders |

---

# 🗄️ Database Design
```
User
|
├── Cart
|
├── Orders
|
└── Reviews

Product
|
├── Category
|
└── Reviews
```
---

# 🏗️ Tech Stack

## Frontend (Client-Side)

### Framework
- **Next.js (App Router)**
- **TypeScript**

### Styling & UI
- **Tailwind CSS**
- **Shadcn/UI**

### State Management

**Zustand**
- Persistent UI state
- Theme management
- Shopping cart sessions

**TanStack Query**
- Server-state management
- API data fetching
- Caching
- Automatic cache invalidation

### Validation

**Zod**
- Client-side schema validation
- Form parsing
- Type-safe validation rules

---

## Backend (Server-Side)

### Runtime & Framework

- **Node.js**
- **Express.js**

### Database

- **MongoDB Atlas**

### ODM

**Mongoose**

Used for:

- Database schemas
- Data modeling
- Schema validation
- MongoDB interactions

### Authentication & Security

**Bcrypt**

- One-way password hashing
- Password protection before database storage
- Implemented using Mongoose pre-save hooks

**JWT (JSON Web Token)**

- Stateless authentication
- Token-based authentication and authorization
- Protected API access

### API Validation

**Zod Middleware**

Used as a validation layer to:

- Validate incoming requests
- Parse request bodies
- Prevent invalid data from reaching business logic

---
