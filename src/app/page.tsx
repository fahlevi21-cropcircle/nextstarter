"use client";

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Rocket, Palette, Code, Zap, CheckCircle } from 'lucide-react';
import { useState } from 'react';


export default function Home() {
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (name.trim()) {
      setSubmitted(true);
    }
  };

  const features = [
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Next.js 14",
      description: "React framework with App Router, SSR, and more"
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid styling"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "shadcn/ui",
      description: "Beautiful, accessible React components"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "TypeScript Ready",
      description: "Full TypeScript support out of the box"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full">
              <Rocket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Next.js Starter Template
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A modern development setup with Next.js, Tailwind CSS, and shadcn/ui components
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Next.js 14</Badge>
            <Badge variant="secondary">Tailwind CSS</Badge>
            <Badge variant="secondary">shadcn/ui</Badge>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="demo" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="demo">Live Demo</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="setup">Setup Guide</TabsTrigger>
            </TabsList>

            <TabsContent value="demo" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Interactive Form Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Demo</CardTitle>
                    <CardDescription>
                      Try out the form components with validation
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Your Name</Label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="Enter your name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                      <Button onClick={handleSubmit} className="w-full">
                        Submit
                      </Button>
                    </div>
                  </CardContent>
                  <CardFooter>
                    {submitted && (
                      <Alert className="w-full">
                        <CheckCircle className="h-4 w-4" />
                        <AlertDescription>
                          Hello {name}! Form submitted successfully.
                        </AlertDescription>
                      </Alert>
                    )}
                  </CardFooter>
                </Card>

                {/* Status Card */}
                <Card>
                  <CardHeader>
                    <CardTitle>System Status</CardTitle>
                    <CardDescription>
                      All components are working perfectly
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Next.js App Router</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Tailwind CSS</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">shadcn/ui Components</span>
                      <Badge variant="default" className="bg-green-100 text-green-800">
                        Active
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-lg">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Setup Instructions</CardTitle>
                  <CardDescription>
                    Get started with this template in minutes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-semibold">Create Next.js App</h4>
                        <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 block">
                          npx create-next-app@latest my-app --typescript --tailwind --eslint
                        </code>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-semibold">Install shadcn/ui</h4>
                        <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 block">
                          npx shadcn-ui@latest init
                        </code>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-semibold">Add Components</h4>
                        <code className="text-sm bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded mt-1 block">
                          npx shadcn-ui@latest add button card input etc.
                        </code>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        ✓
                      </div>
                      <div>
                        <h4 className="font-semibold">Start Building</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                          You're ready to start building amazing applications!
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <p className="text-slate-600 dark:text-slate-400">
            Built with ❤️ using Next.js, Tailwind CSS, and shadcn/ui
          </p>
        </div>
      </div>
    </div>)
}
