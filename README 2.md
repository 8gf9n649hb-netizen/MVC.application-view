# MVC Demo (Node.js + Express + EJS)

A minimal example showing the **Model-View-Controller** pattern, the
architecture behind most Full Stack Development (FSD) frameworks
(Express, Django, Ruby on Rails, Spring MVC, ASP.NET MVC, etc.).

## What is MVC?

| Layer | Job | File(s) here |
|---|---|---|
| **Model** | Owns the data and business rules. Talks to the database. | `models/user.model.js` |
| **View** | Pure presentation — turns data into HTML the user sees. | `views/users/*.ejs` |
| **Controller** | Receives the request, calls the Model, chooses a View, sends the response. | `controllers/user.controller.js` |
| **Routes** (glue, not strictly part of MVC) | Maps a URL + HTTP method to a Controller function. | `routes/user.routes.js` |

**Request flow:**
`Browser → Route → Controller → Model (get/save data) → Controller → View → Browser`

The key idea a fresher should take away: **each layer only knows
about its own job.** The Model doesn't know about HTTP. The View
doesn't know about the database. The Controller doesn't render HTML
itself — it just coordinates. This separation makes the app easier
to test, debug, and extend as it grows.

## How to run

```bash
npm install
npm start
```

Then open `http://localhost:3000/users` in your browser.

You can add a user, see it appear in the list, and delete it — a
full round trip through Route → Controller → Model → View.

## Where to go next
- Swap the in-memory array in `user.model.js` for a real database
  (MongoDB with Mongoose, or MySQL with Sequelize) — only the Model
  file changes, nothing else needs to.
- Add validation logic inside the Controller before calling
  `User.create()`.
- Add more resources (e.g. `product.model.js`, `product.controller.js`,
  `product.routes.js`) following the exact same pattern.
