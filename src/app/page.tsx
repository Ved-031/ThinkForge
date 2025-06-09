"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Brain, BarChart3, Mic, BookOpen, Sparkles, ChevronRight, Target, Zap, LayoutDashboard, Lightbulb, User, NotebookText } from 'lucide-react';

import { Logo } from '@/components/logo';
import { Badge } from '@/components/ui/badge';
import { Button, buttonVariants } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export default function Home() {
    const router = useRouter();

    const primaryColor = '#4a8f9e';
    const secondaryColor = '#6699cc';

    const gradientStyle = {
        background: `linear-gradient(135deg, ${primaryColor} 0%, ${secondaryColor} 100%)`
    };

    const bgGradientStyle = {
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #1e293b 100%)'
    };

    const overlayStyle = {
        background: `linear-gradient(135deg, rgba(74, 143, 158, 0.1) 0%, rgba(102, 153, 204, 0.1) 100%)`
    };

    return (
        <div className="min-h-screen" style={bgGradientStyle}>
            {/* Navigation */}
            <nav className="z-50 border-b border-white/10 backdrop-blur-xl bg-white/5 fixed top-0 left-0 right-0">
                <div className="max-w-7xl mx-auto px-4 md:px-5">
                    <div className="flex justify-between items-center h-16">
                        <Logo
                            iconClassname="text-white"
                            titleClassname="text-white"
                        />
                        <div className="flex items-center space-x-8">
                            {/* <div className='flex items-center gap-x-6'>
                                <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
                                <a href="#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                                <a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a>
                            </div> */}
                            <div className='flex items-center gap-x-2'>
                                <Button
                                    variant="outline"
                                    className="border-[#4a8f9e]/50 text-[#4a8f9e] hover:bg-[#4a8f9e]/10 hover:text-lightteal"
                                    onClick={() => router.push('/sign-in')}
                                >
                                    Sign In
                                </Button>
                                <Button
                                    className="hidden sm:block text-white hover:opacity-90"
                                    style={gradientStyle}
                                    onClick={() => router.push('/dashboard')}
                                >
                                    Get Started
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="overflow-hidden flex items-center justify-center h-screen">
                <div className="absolute inset-0" style={overlayStyle} />
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center space-y-6">
                        <Badge className="text-white border-[#4a8f9e]/30 hover:bg-[#4a8f9e]/30 transition-all duration-300" style={{ background: 'rgba(74, 143, 158, 0.2)' }}>
                            <Sparkles className="w-3 h-3 mr-1" />
                            Powered by Advanced AI
                        </Badge>

                        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                            Transform
                            <span className="bg-clip-text text-transparent ml-4" style={{ ...gradientStyle, WebkitBackgroundClip: 'text' }}>Education</span>{" "}
                            with AI
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Revolutionize learning with AI-powered quiz generation, intelligent dashboards,
                            oral test simulations, and personalized guidance for both teachers and students.
                        </p>

                        <div className="flex flex-col w-full md:flex-row gap-4 justify-center items-center pt-8">
                            <Button
                                size="lg"
                                className="text-white hover:opacity-90 text-[17px] px-8 py-6 group w-full md:w-auto"
                                style={gradientStyle}
                                onClick={() => router.push('/sign-up')}
                            >
                                Start Free Trial
                                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <a
                                className={buttonVariants({
                                    variant: "outline",
                                    size: "lg",
                                    className: "border-[#4a8f9e]/50 text-[#4a8f9e] hover:bg-[#4a8f9e]/10 text-[17px] hover:text-lightteal px-8 py-6 w-full md:w-auto"
                                })}
                                href='#features'
                            >
                                See Features
                            </a>
                        </div>

                        <div className="hidden md:flex items-center justify-center space-x-8 pt-12 text-gray-400">
                            <Badge
                                className="text-white border-[#4a8f9e]/30 hover:bg-[#4a8f9e]/30 transition-all duration-300 text-[14px] px-4 py-2"
                                style={{ background: 'rgba(74, 143, 158, 0.2)' }}
                            >
                                <LayoutDashboard className="w-3 h-3 mr-1" />
                                Dashboard
                            </Badge>
                            <Badge
                                className="text-white border-[#4a8f9e]/30 hover:bg-[#4a8f9e]/30 transition-all duration-300 text-[14px] px-4 py-2"
                                style={{ background: 'rgba(74, 143, 158, 0.2)' }}
                            >
                                <Lightbulb className="w-3 h-3 mr-1" />
                                Quiz
                            </Badge>
                            <Badge
                                className="text-white border-[#4a8f9e]/30 hover:bg-[#4a8f9e]/30 transition-all duration-300 text-[14px] px-4 py-2"
                                style={{ background: 'rgba(74, 143, 158, 0.2)' }}
                            >
                                <User className="w-3 h-3 mr-1" />
                                Oral
                            </Badge>
                            <Badge
                                className="text-white border-[#4a8f9e]/30 hover:bg-[#4a8f9e]/30 transition-all duration-300 text-[14px] px-4 py-2"
                                style={{ background: 'rgba(74, 143, 158, 0.2)' }}
                            >
                                <NotebookText className="w-3 h-3 mr-1" />
                                Assignment
                            </Badge>
                        </div>
                    </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 w-20 h-20 rounded-full blur-xl animate-pulse" style={{ background: 'rgba(74, 143, 158, 0.3)' }} />
                <div className="absolute top-40 right-20 w-32 h-32 rounded-full blur-xl animate-pulse delay-1000" style={{ background: 'rgba(102, 153, 204, 0.3)' }} />
                <div className="absolute bottom-20 left-1/4 w-16 h-16 rounded-full blur-xl animate-pulse delay-500" style={{ background: 'rgba(74, 143, 158, 0.4)' }} />
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <Badge className="text-white border-[#6699cc]/30 mb-4" style={{ background: 'rgba(102, 153, 204, 0.2)' }}>
                            Features
                        </Badge>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Everything You Need for
                            <span className="bg-clip-text text-transparent ml-2" style={{ ...gradientStyle, WebkitBackgroundClip: 'text' }}> Smart Learning</span>
                        </h2>
                        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                            Comprehensive AI-powered tools designed to enhance both teaching and learning experiences
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="border-[#4a8f9e]/30 hover:border-[#4a8f9e]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(74, 143, 158, 0.1) 0%, rgba(102, 153, 204, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={gradientStyle}>
                                    <Brain className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">AI Quiz Generation</CardTitle>
                                <CardDescription className="text-gray-300">
                                    Generate intelligent quizzes instantly from any content using advanced AI algorithms
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-[#6699cc]/30 hover:border-[#6699cc]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(102, 153, 204, 0.1) 0%, rgba(74, 143, 158, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%)` }}>
                                    <BarChart3 className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">Smart Dashboards</CardTitle>
                                <CardDescription className="text-gray-300">
                                    Comprehensive analytics and insights for both teachers and students with real-time data
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-[#4a8f9e]/30 hover:border-[#4a8f9e]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(74, 143, 158, 0.1) 0%, rgba(102, 153, 204, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={gradientStyle}>
                                    <Mic className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">Oral Test Simulation</CardTitle>
                                <CardDescription className="text-gray-300">
                                    Practice speaking skills with AI-powered oral examination simulations
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-[#6699cc]/30 hover:border-[#6699cc]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(102, 153, 204, 0.1) 0%, rgba(74, 143, 158, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%)` }}>
                                    <Target className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">Personal Guidance</CardTitle>
                                <CardDescription className="text-gray-300">
                                    AI-driven personalized learning paths and recommendations for each student
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-[#4a8f9e]/30 hover:border-[#4a8f9e]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(74, 143, 158, 0.1) 0%, rgba(102, 153, 204, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={gradientStyle}>
                                    <BookOpen className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">Assignment Checker</CardTitle>
                                <CardDescription className="text-gray-300">
                                    AI-powered assignment checker for quick and accurate grading
                                </CardDescription>
                            </CardHeader>
                        </Card>

                        <Card className="border-[#6699cc]/30 hover:border-[#6699cc]/50 transition-all duration-300 hover:scale-105 group" style={{ background: 'linear-gradient(135deg, rgba(102, 153, 204, 0.1) 0%, rgba(74, 143, 158, 0.05) 100%)' }}>
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform" style={{ background: `linear-gradient(135deg, ${secondaryColor} 0%, ${primaryColor} 100%)` }}>
                                    <Zap className="w-6 h-6 text-white" />
                                </div>
                                <CardTitle className="text-white text-xl">Instant Feedback</CardTitle>
                                <CardDescription className="text-gray-300">
                                    Real-time AI feedback and suggestions to improve learning outcomes
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            {/* <section className="py-20 backdrop-blur-sm" style={overlayStyle}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">10K+</div>
                            <div className="text-gray-300">Active Teachers</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">50K+</div>
                            <div className="text-gray-300">Students Served</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">1M+</div>
                            <div className="text-gray-300">Quizzes Generated</div>
                        </div>
                        <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-white">99%</div>
                            <div className="text-gray-300">Satisfaction Rate</div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(74, 143, 158, 0.2) 0%, rgba(102, 153, 204, 0.2) 100%)' }} />
                <div className="relative max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Transform Your
                        <span className="bg-clip-text text-transparent ml-2" style={{ ...gradientStyle, WebkitBackgroundClip: 'text' }}> Teaching Experience?</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                        Join thousands of educators already using AI to create better learning experiences
                    </p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="text-white hover:opacity-90 text-lg px-8 py-6 w-full md:w-auto"
                            style={gradientStyle}
                            onClick={() => router.push('/sign-up')}
                        >
                            Start Your Free Trial
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="border-[#4a8f9e]/50 text-[#4a8f9e] hover:bg-gray-100/90 text-lg hover:text-lightteal px-8 py-6 w-full md:w-auto"
                            onClick={() => router.push('/dashboard')}
                        >
                            Demo
                        </Button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-gray-800 bg-gray-900/50 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="space-y-4">
                            <Logo
                                iconClassname='text-white'
                                titleClassname='text-white'
                            />
                            <p className="text-gray-400">
                                Empowering education through artificial intelligence
                            </p>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Product</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Company</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-white font-semibold mb-4">Support</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} ThinkForge. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
