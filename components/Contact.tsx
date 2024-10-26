"use client"

import { Mail, Phone, Github, Linkedin, Twitter } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { useState } from "react";
import { Textarea } from "./ui/textarea";

export const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {

  }

  return (
    <div className="relative max-w-7xl mx-auto px-6 py-10">
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="text-3xl mb-10 font-bold">Contact Me</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="flex justify-center flex-col">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 ">
              <p className="text-muted-foreground">
                I&apos;d love to hear from you! Whether you have a question or just want to say hi, feel free to reach out.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Mail className="text-primary w-5 h-5" />
                  </div>
                  <span>campbellsfrost@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Phone className="text-primary w-5 h-5" />
                  </div>
                  <span>+1 (843) 610-1011</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: Github, href: 'https://github.com/campbell-frost', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/campbell-frost-39656a207/', label: 'LinkedIn' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-secondary-foreground p-2 rounded-full hover:bg-secondary/80 transition-colors"
                    >
                      <social.icon className="w-5 h-5" />
                      <span className="sr-only">{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" name="message" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}