"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Icons } from "@/components/ui/icons"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface LoginModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function LoginModal({ open, onOpenChange }: LoginModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center">Enter your email and password to sign in</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" />
          </div>
          <Button className="w-full" type="submit">
            Sign In
          </Button>
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
        </div>
      </DialogContent>
    </Dialog>
  )
}

