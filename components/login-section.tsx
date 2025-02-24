"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/ui/icons"

export default function LoginSection() {
  return (
    <section
      id="login"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-100 to-gray-300"
    >
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center">Sign In</CardTitle>
          <CardDescription className="text-center">Enter your email and password to sign in</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-center">
            <a href="#" className="text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            <Icons.google className="mr-2 h-4 w-4" />
            Sign In with Google
          </Button>
          <div className="text-sm text-center">
            Not registered?{" "}
            <a href="#" className="text-primary hover:underline">
              Create account
            </a>
          </div>
        </CardFooter>
      </Card>
    </section>
  )
}

