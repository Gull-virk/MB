"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Eye, EyeOff, User, Grid2x2, Clock } from "lucide-react"

export function LoginForm() {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // demo only
  }

  return (
    <div className="flex w-full flex-col items-center px-6 py-10 sm:px-10">
      <div className="w-full max-w-sm">
        <div className="flex justify-center">
          <Image
            src="/mcb-live-logo.png"
            alt="MCB Live logo"
            width={180}
            height={72}
            priority
            className="h-16 w-auto object-contain"
          />
        </div>

        <div className="mt-8 text-center">
          <p className="text-sm font-medium text-mcb-green">Welcome to</p>
          <h1 className="text-2xl font-bold text-mcb-blue">MCB Live</h1>
          <button
            type="button"
            className="mx-auto mt-3 flex items-center gap-2 text-sm font-semibold text-mcb-blue transition-opacity hover:opacity-80"
          >
            <Grid2x2 className="h-4 w-4 text-mcb-green" />
            Explore Services
          </button>

          <div className="mt-4 rounded-md border border-mcb-green/30 bg-mcb-green/10 px-4 py-3">
            <p className="text-sm font-bold text-mcb-green">Golden Opportunity for you</p>
            <p className="mt-1 flex items-center justify-center gap-1.5 text-xs font-medium text-mcb-blue">
              <Clock className="h-3.5 w-3.5" />
              24 Hours Report Time
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-1">
          {/* Username */}
          <div className="flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 shadow-sm focus-within:border-mcb-blue">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              aria-label="Username"
              className="w-full bg-transparent text-sm italic text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <User className="h-5 w-5 shrink-0 text-muted-foreground" />
          </div>
          <button type="button" className="self-end pr-1 text-sm font-semibold text-mcb-blue hover:underline">
            Forgot Username?
          </button>

          {/* Password */}
          <div className="mt-3 flex items-center gap-2 rounded-md border border-border bg-card px-4 py-3 shadow-sm focus-within:border-mcb-blue">
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              aria-label="Password"
              className="w-full bg-transparent text-sm italic text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowPassword((s) => !s)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              className="shrink-0 text-muted-foreground hover:text-foreground"
            >
              {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
            </button>
          </div>
          <button type="button" className="self-end pr-1 text-sm font-semibold text-mcb-blue hover:underline">
            Forgot Password?
          </button>

          <button
            type="submit"
            className="mt-5 w-full rounded-md bg-mcb-blue-dark py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-mcb-blue"
          >
            Login
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <p className="font-semibold text-foreground">
            Not Registered Yet?{" "}
            <button type="button" className="text-mcb-blue hover:underline">
              Register for MCB Live
            </button>
          </p>
          <button
            type="button"
            className="mx-auto mt-4 flex items-center gap-2 font-semibold text-mcb-blue hover:underline"
          >
            <span className="grid h-6 w-6 place-items-center rounded bg-mcb-green text-[8px] font-bold text-whi
          </button>
        </div>
      </div>
    </div>
  )
}