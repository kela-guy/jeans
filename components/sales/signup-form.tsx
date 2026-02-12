"use client"

import { useState } from "react"

export function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  return (
    <section className="py-20" id="signup">
      <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
        {"טופס הרשמה"}
      </h2>

      <form
        className="mx-auto mt-10 flex w-full max-w-sm flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault()
        }}
      >
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {"שם מלא"}
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="rounded border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            placeholder={"הכניסי את שמך המלא"}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {"אימייל"}
          </label>
          <input
            id="email"
            type="email"
            required
            dir="ltr"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="rounded border border-border bg-background px-4 py-3 text-sm text-foreground text-left placeholder:text-right placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            placeholder={"הכניסי את האימייל שלך"}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-sm font-medium text-foreground">
            {"טלפון"}
          </label>
          <input
            id="phone"
            type="tel"
            required
            dir="ltr"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="rounded border border-border bg-background px-4 py-3 text-sm text-foreground text-left placeholder:text-right placeholder:text-muted-foreground focus:border-foreground focus:outline-none"
            placeholder={"הכניסי מספר טלפון"}
          />
        </div>

        <button
          type="submit"
          className="mt-2 w-full rounded bg-foreground py-4 text-base font-bold text-primary-foreground transition-opacity hover:opacity-90"
        >
          {"!אני רוצה להתחיל עכשיו"}
        </button>

        <p className="text-center text-xs text-muted-foreground">
          {"הפרטים שלך מאובטחים ולא יועברו לצד שלישי"}
        </p>
      </form>
    </section>
  )
}
