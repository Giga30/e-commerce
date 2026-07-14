'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export default function Signup(){
    const [show, setShow] = useState(false)

    return (
        <div className="flex items-center justify-center min-h-screen">
            <form action="">
                <Card className="w-full max-w-sm">
                    <CardHeader className="text-center gap-4">
                        <div>
                            <CardTitle>Create your account</CardTitle>
                            <CardDescription>Please fill in the details to get started.</CardDescription>
                        </div>
                        <Separator />
                    </CardHeader>
                    <CardContent>
                        <div className="grid gap-4 md:grid-cols-2">
                            <Field>
                                <FieldLabel htmlFor="firstname">First Name</FieldLabel>
                                <Input placeholder="First Name" id="firstname" type="text" />
                            </Field>
                            <Field>
                                <FieldLabel htmlFor="lastname">Last Name</FieldLabel>
                                <Input placeholder="Last Name" id="lastname" type="text"/>
                            </Field>
                            <Field className="md:col-span-2">
                                <FieldLabel htmlFor="email">Email address</FieldLabel>
                                <Input placeholder="Enter your email address" id="email" type="email"/>
                            </Field>
                            <Field className="md:col-span-2">
                                <FieldLabel>Password</FieldLabel>
                                <div className="relative">
                                    <Input placeholder="Enter your password" type={show ? "text": "password"}/>
                                    <Button onClick={() => setShow((v) => !v)} type="button" variant={"ghost"} className="absolute right-2">
                                        {show ? <EyeOff /> : <Eye />}
                                    </Button>
                                </div>
                            </Field>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                        <div className="flex gap-2 items-start w-full">
                            <Checkbox id="tospp" />
                            <Label htmlFor="tospp" className="text-xs">I agree to the Terms of Service, and Privacy Policy</Label>
                        </div>
                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                        <div className="mt-2">
                            <span className="">Already have an account? </span> 
                            <Button variant={"link"} className="p-0"><a href="/login">Login</a></Button>
                        </div>
                    </CardFooter>
                </Card>
            </form>

        </div>
    )
}