# 🛒 E-Commerce Mock Project

A full-stack, production-oriented e-commerce application built with modern web technologies. The project demonstrates a scalable architecture with a secure backend, persistent database design, authentication system, API validation, and a dynamic product catalog experience.

The application focuses on clean separation of concerns, type safety, security best practices, and a smooth user shopping experience.

---

# ✨ Features

## 🛍️ Customer Experience

- Dynamic product catalog
- Product browsing and filtering
- Shopping cart management
- Persistent cart sessions
- Responsive UI design
- Theme customization
- Optimized data fetching and caching
- Form validation with user-friendly error handling

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
- Secure session handling
- Protected API access

### API Validation

**Zod Middleware**

Used as an API gateway layer to:

- Validate incoming requests
- Parse request bodies
- Prevent invalid data from reaching business logic

---
