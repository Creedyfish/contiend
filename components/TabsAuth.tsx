"use client";
import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LoginForm } from "./forms/LoginForm";
import { SignUpForm } from "./forms/SignUpForm";
import { LogIn } from "lucide-react";
import { ForgotPasswordForm } from "./forms/ForgotPasswordForm";
import { signIn } from "next-auth/react";
export function TabsAuth() {
  const [tab, setTab] = useState("login");

  const onTabChange = (value: string) => {
    setTab(value);
  };

  return (
    <Tabs value={tab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle className="">Welcome Back! </CardTitle>
            <CardDescription>
              Please enter your username and password to sign in.
            </CardDescription>
          </CardHeader>
          <CardContent className=" space-y-2">
            <LoginForm setTab={setTab} />
            <Button
              onClick={() =>
                signIn("google", {
                  callbackUrl: "/",
                })
              }
            >
              Sign in with Google
            </Button>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Sign Up</CardTitle>
            <CardDescription>
              Create your account here. After signing up, you'll be logged in.
            </CardDescription>
          </CardHeader>
          <CardContent className="max-h-[300px] space-y-2 overflow-auto">
            <SignUpForm />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="forgot">
        <Card>
          <CardHeader className="gap-2">
            <div
              onClick={() => {
                setTab("login");
              }}
              className="text-black"
            >
              <button className="flex gap-1 font-medium text-card-foreground transition-all duration-100 ease-in-out hover:scale-105 focus:scale-100">
                <MoveLeft />
                <div> Return to Login </div>
              </button>
            </div>
            <CardTitle className="">Forgot Password </CardTitle>
            <CardDescription>
              Please enter your email to send an email to your account.
            </CardDescription>
          </CardHeader>
          <CardContent className=" space-y-2">
            <ForgotPasswordForm />
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  );
}
