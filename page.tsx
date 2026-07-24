import Image from "next/image"
import { LoginForm } from "@/components/login-form"

export default function Page() {
  return (
    <main className="flex min-h-svh w-full flex-col md:flex-row">
      {/* Left: image panel */}
      <div className="relative h-56 w-full md:h-auto md:w-1/2">
        <Image
          src="/qr-scan.png"
          alt="Person scanning a QR code with a smartphone"
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      {/* Cyan divider */}
      <div className="hidden w-2 bg-mcb-cyan md:block" aria-hidden="true" />

      {/* Right: login panel */}
      <div className="flex flex-1 items-center justify-center bg-background">
        <LoginForm />
      </div>
    </main>
  )
}