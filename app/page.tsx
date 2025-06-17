"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Shield,
  Car,
  Building,
  Menu,
  X,
  MessageSquare,
  Send,
  Play,
  Camera,
  Globe,
  Network,
  Wifi,
  Settings,
  Award,
  Briefcase,
  Calendar,
  Star,
  Rocket,
  Heart,
  Users,
} from "lucide-react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const titles = [
    "INNOVATION ENGINEER",
    "FULL-STACK DEVELOPER",
    "AI/ML ENTHUSIAST",
    "IOT SPECIALIST",
    "SYSTEMS ARCHITECT",
  ]

  // Enhanced typewriter animation
  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const current = titles[currentIndex]
        if (!isDeleting) {
          if (currentText !== current) {
            setCurrentText(current.substring(0, currentText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (currentText !== "") {
            setCurrentText(current.substring(0, currentText.length - 1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % titles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting, titles])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent("Portfolio Contact from " + formData.name)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)
    const mailtoLink = `mailto:langelihlemoyes76@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")
    setFormData({ name: "", email: "", message: "" })
  }

  const handleHireMe = () => {
    const subject = encodeURIComponent("Hiring Inquiry - Langelihle Moyo")
    const body = encodeURIComponent(`Hello Langelihle,

I am interested in hiring you for a project. Please let me know your availability and rates.

Best regards,`)
    const mailtoLink = `mailto:langelihlemoyes76@gmail.com?subject=${subject}&body=${body}`
    window.open(mailtoLink, "_blank")
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent("Hello Langelihle! I'm interested in discussing a project with you.")
    const whatsappLink = `https://wa.me/263782115424?text=${message}`
    window.open(whatsappLink, "_blank")
  }

  const handleVideoPlay = (videoId: string) => {
    setSelectedVideo(videoId)
  }

  const closeVideoModal = () => {
    setSelectedVideo(null)
  }

  const skills = [
    { name: "Java & Spring Boot", level: 95, icon: "☕" },
    { name: "JavaScript & React", level: 90, icon: "⚛️" },
    { name: "AI/ML Integration", level: 88, icon: "🤖" },
    { name: "API Development", level: 92, icon: "🔗" },
    { name: "IoT Systems", level: 85, icon: "📡" },
    { name: "Database Design", level: 88, icon: "🗄️" },
  ]

  const experiences = [
    {
      company: "Telone Digital Innovation Department",
      position: "Digital Innovation Engineer",
      duration: "2 Years",
      period: "2025 - Present",
      description:
        "Leading digital transformation projects, developing AI/ML solutions, and implementing IoT systems for telecommunications infrastructure.",
      achievements: ["SmartCity Traffic System", "InsureMe Platform", "IoT Hardware Integration"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      company: "Scentpro Enterprises",
      position: "Technical Support Engineer",
      duration: "2 1/2 Years",
      period: "2022 - 2025",
      description:
        "Provided comprehensive technical support and developed innovative solutions including the Virtual Fiscal Device that replaced imported hardware.",
      achievements: ["Virtual Fiscal Device Innovation", "Website Development", "System Interfacing"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      company: "Focal Point",
      position: "Part-time Developer",
      duration: "Concurrent",
      period: "2020 - 2022",
      description:
        "Developed full-stack applications and managed network infrastructure while expanding expertise in modern web technologies.",
      achievements: ["Full-Stack Development", "Network Setup", "System Deployment"],
      gradient: "from-blue-600 to-indigo-500",
    },
  ]

  const projects = [
    {
      title: "SmartCity Traffic System",
      description:
        "AI-powered traffic violation management using image recognition and automated notifications for Zimbabwe's Vision 2030.",
      tech: ["Java", "Spring AI", "Computer Vision", "IoT"],
      icon: <Car className="w-6 h-6" />,
      type: "AI/ML Project",
      hasVideo: true,
      vimeoId: "1093948640",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "InsureMe Platform",
      description:
        "Insurance comparison platform enabling clients to compare packages and choose the best insurer through Telone's network.",
      tech: ["Java", "Spring Boot", "React", "Microservices"],
      icon: <Shield className="w-6 h-6" />,
      type: "Full-Stack Platform",
      hasVideo: true,
      youtubeId: "4baSzB_NHtQ",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Virtual Fiscal Device",
      description:
        "Revolutionary software solution replacing imported hardware, integrating POS systems with ZIMRA's tax system.",
      tech: ["Java", "API Gateway", "Tax Integration"],
      icon: <Database className="w-6 h-6" />,
      type: "Innovation Project",
      hasVideo: true,
      youtubeId: "nAeOmvxw-sA",
      gradient: "from-blue-600 to-indigo-500",
    },
    {
      title: "Boom Gates Installation",
      description:
        "Upgraded railway crossing at PPC Bulawayo Factory with automated boom gates and traffic lights using infrared sensors.",
      tech: ["IoT", "Sensors", "Automation", "Safety Systems"],
      icon: <Settings className="w-6 h-6" />,
      type: "IoT Infrastructure",
      hasVideo: false,
      hasImage: true,
      imagePath: "/images/boom-gates.png",
      gradient: "from-indigo-500 to-blue-700",
    },
    {
      title: "Scentpro Website",
      description:
        "Revitalized company website with marketplace features, boosting engagement and generating consistent revenue.",
      tech: ["Web Development", "SEO", "E-commerce"],
      icon: <Globe className="w-6 h-6" />,
      type: "Web Development",
      hasVideo: false,
      link: "https://www.scentpro.co.zw/",
      gradient: "from-blue-700 to-cyan-400",
    },
    {
      title: "Hotel Management System",
      description: "Comprehensive hotel management system with ZIMRA fiscalisation integration for tax compliance.",
      tech: ["Java", "Spring", "MySQL", "Tax Systems"],
      icon: <Building className="w-6 h-6" />,
      type: "Enterprise System",
      hasVideo: false,
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      title: "CCTV Security System",
      description:
        "Strategic CCTV installation at Napier Office Park with 24/7 monitoring capabilities for enhanced security.",
      tech: ["Security Systems", "Network Setup", "Monitoring"],
      icon: <Camera className="w-6 h-6" />,
      type: "Security Infrastructure",
      hasVideo: false,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Network Infrastructure",
      description:
        "Complete network installation for Wiltshire Explosives including infrastructure setup and IP phone systems.",
      tech: ["Networking", "Infrastructure", "VoIP"],
      icon: <Network className="w-6 h-6" />,
      type: "Network Engineering",
      hasVideo: false,
      gradient: "from-indigo-600 to-blue-400",
    },
    {
      title: "Fiber Optic Installation",
      description:
        "Cross-border telecommunications project running fiber optic cable for MTN from South Africa to Zambia.",
      tech: ["Fiber Optics", "Telecommunications", "Infrastructure"],
      icon: <Wifi className="w-6 h-6" />,
      type: "Telecommunications",
      hasVideo: false,
      gradient: "from-blue-400 to-cyan-600",
    },
  ]

  const stats = [
    { number: "4+", label: "Years Experience", icon: <Calendar className="w-8 h-8" /> },
    { number: "15+", label: "Projects Completed", icon: <Code className="w-8 h-8" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Heart className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-8 h-8" /> },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white overflow-x-hidden relative">
      {/* Enhanced Blue-Themed Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-indigo-900/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(96,165,250,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(147,197,253,0.1),transparent_50%)]"></div>

        {/* Blue Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Blue Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Video Modal - Supports both YouTube and Vimeo */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-blue-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full rounded-2xl"
                src={
                  selectedVideo === "1093948640"
                    ? `https://player.vimeo.com/video/${selectedVideo}?h=fbdba7b2a6&autoplay=1&title=0&byline=0&portrait=0&badge=0&autopause=0&player_id=0&app_id=58479`
                    : `https://www.youtube.com/embed/${selectedVideo}?autoplay=1`
                }
                title="Video player"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-xl z-40 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent animate-gradient">
              Langelihle.dev
            </div>

            <div className="hidden md:flex space-x-8">
              {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-gray-300 hover:text-blue-400 transition-all duration-300 group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>

            <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-500/20 animate-in slide-in-from-top">
              <div className="flex flex-col space-y-4">
                {["Home", "About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center z-10 max-w-6xl mx-auto">
          <div className="space-y-12">
            <div className="space-y-8">
              <p className="text-2xl text-blue-300 animate-fade-in flex items-center justify-center gap-3">
                <Rocket className="w-6 h-6 text-blue-400 animate-bounce" />
                Hello, I'm
              </p>

              {/* Professional Blue-Themed Name Display */}
              <div className="flex flex-col items-center justify-center">
                <div className="flex items-center space-x-4 md:space-x-6">
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">Langelihle</h1>
                  <div className="h-12 md:h-16 lg:h-20 w-0.5 bg-blue-400 animate-pulse shadow-lg shadow-blue-400/50"></div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                    Moyo
                  </h1>
                </div>
                <div className="mt-6 md:mt-8">
                  <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 rounded-full mx-auto shadow-lg shadow-blue-400/30"></div>
                </div>
              </div>
            </div>

            <div className="h-20 flex items-center justify-center">
              <div className="text-center">
                <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text border-r-4 border-blue-400 pr-6 animate-pulse">
                  {currentText}
                </span>
              </div>
            </div>

            <p className="text-xl md:text-2xl text-blue-100 max-w-5xl mx-auto leading-relaxed animate-fade-in-up">
              Crafting <span className="text-blue-400 font-bold">innovative solutions</span> that bridge technology and
              real-world impact. Specializing in <span className="text-cyan-400 font-bold">AI/ML</span>,
              <span className="text-blue-300 font-bold"> IoT systems</span>, and
              <span className="text-indigo-300 font-bold"> full-stack development</span>.
            </p>
          </div>

          {/* Enhanced Blue CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mt-20 animate-fade-in-up">
            <Button
              onClick={handleHireMe}
              size="lg"
              className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-700 hover:via-blue-600 hover:to-cyan-600 text-white font-bold px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-blue-500/40 text-xl border-2 border-blue-400/50 hover:border-blue-300"
            >
              <Star className="w-6 h-6 mr-3 animate-spin-slow" />
              HIRE ME
            </Button>

            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:from-cyan-600 hover:via-blue-600 hover:to-indigo-600 text-white font-bold px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/40 text-xl"
            >
              <a href="#projects" className="flex items-center">
                <Code className="w-6 h-6 mr-3" />
                View My Work
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900 font-bold px-12 py-6 rounded-full transform hover:scale-110 transition-all duration-300 text-xl backdrop-blur-sm"
              onClick={handleWhatsApp}
            >
              <MessageSquare className="w-6 h-6 mr-3" />
              Let's Connect
            </Button>
          </div>

          {/* Blue Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 p-6 rounded-3xl border border-blue-500/30 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm shadow-xl">
                  <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-12 mt-16 animate-fade-in-up">
            {[
              { icon: Github, href: "https://github.com/Lange591", color: "hover:text-blue-300" },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/moyo-langelihle-8bb3b3230",
                color: "hover:text-blue-400",
              },
              { icon: Mail, href: "mailto:langelihlemoyes76@gmail.com", color: "hover:text-cyan-400" },
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`text-blue-500 ${color} transform hover:scale-150 transition-all duration-300 p-4 rounded-full hover:bg-blue-500/10 backdrop-blur-sm`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="w-12 h-12" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            About Me
          </h2>

          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-8">
                <p className="text-3xl text-blue-100 leading-relaxed">
                  Innovation Engineer with <span className="text-blue-400 font-bold text-4xl">4+ years</span> of
                  experience building cutting-edge solutions that drive real-world impact.
                </p>
                <p className="text-xl text-blue-200 leading-relaxed">
                  From developing AI-powered traffic systems supporting{" "}
                  <span className="text-cyan-400 font-semibold">Zimbabwe's Vision 2030</span> to creating software
                  solutions that replace imported hardware, I specialize in transforming complex challenges into
                  elegant, scalable solutions.
                </p>
                <p className="text-xl text-blue-200 leading-relaxed">
                  Mentored by <span className="text-blue-400 font-semibold">Dr. Thambo Nyathi</span> (University of
                  Pretoria) and collaborated with senior developers at LiveScore South Africa, I bring both technical
                  excellence and innovative thinking to every project.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-10 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <Award className="w-12 h-12 text-blue-400 mb-6" />
                  <h3 className="font-bold text-white mb-4 text-xl">Education</h3>
                  <p className="text-blue-200">BSc (Hons) Computer Science</p>
                  <p className="text-blue-400 font-semibold">NUST • 2021</p>
                </div>
                <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 p-10 rounded-3xl border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                  <Briefcase className="w-12 h-12 text-cyan-400 mb-6" />
                  <h3 className="font-bold text-white mb-4 text-xl">Current Role</h3>
                  <p className="text-blue-200">Innovation Engineer</p>
                  <p className="text-cyan-400 font-semibold">Telone • Present</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 p-12 rounded-3xl border border-blue-500/30 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 shadow-2xl">
                <h3 className="text-4xl font-bold mb-10 text-white">Quick Facts</h3>
                <div className="space-y-8">
                  {[
                    { icon: MapPin, text: "Chitungwiza, Harare, Zimbabwe", color: "text-red-400" },
                    { icon: Mail, text: "langelihlemoyes76@gmail.com", color: "text-blue-400" },
                    { icon: Phone, text: "+263782115424", color: "text-green-400" },
                    { icon: Calendar, text: "Available for Projects", color: "text-cyan-400" },
                  ].map(({ icon: Icon, text, color }, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-6 p-6 bg-blue-900/30 rounded-2xl hover:bg-blue-800/40 transition-all duration-300 transform hover:scale-105 border border-blue-500/20"
                    >
                      <Icon className={`w-8 h-8 ${color}`} />
                      <span className="text-blue-100 text-xl">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="relative py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Professional Journey
          </h2>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-slate-800/90 to-blue-900/90 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-[1.02] backdrop-blur-sm shadow-2xl hover:shadow-blue-500/20"
              >
                <CardHeader className="pb-8">
                  <div className="flex items-start justify-between">
                    <div className="space-y-4">
                      <CardTitle className="text-white text-3xl group-hover:text-blue-400 transition-colors">
                        {exp.position}
                      </CardTitle>
                      <div className="flex items-center gap-4">
                        <span
                          className={`text-2xl font-bold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent`}
                        >
                          {exp.company}
                        </span>
                        <Badge variant="outline" className="border-blue-500 text-blue-300 text-sm">
                          {exp.period}
                        </Badge>
                      </div>
                    </div>
                    <Badge className={`bg-gradient-to-r ${exp.gradient} text-white px-6 py-3 text-lg font-semibold`}>
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-8">
                  <p className="text-blue-100 text-xl leading-relaxed">{exp.description}</p>
                  <div className="space-y-4">
                    <h4 className="font-bold text-cyan-400 text-xl">Key Achievements:</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {exp.achievements.map((achievement, i) => (
                        <div
                          key={i}
                          className="bg-blue-900/30 p-4 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-colors"
                        >
                          <span className="text-blue-200 text-lg">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-3xl text-blue-300">Innovation in action • Building the future</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group bg-gradient-to-br from-slate-800/95 to-blue-900/95 border-blue-500/30 hover:border-blue-400/50 transition-all duration-500 transform hover:scale-[1.05] hover:shadow-2xl hover:shadow-blue-500/30 backdrop-blur-sm"
              >
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className={`p-5 bg-gradient-to-r ${project.gradient} rounded-2xl group-hover:scale-125 transition-transform duration-300 shadow-lg`}
                    >
                      {project.icon}
                    </div>
                    <div>
                      <CardTitle className="text-white text-2xl group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </CardTitle>
                      <Badge variant="secondary" className="bg-blue-900/50 text-blue-300 mt-2">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-8">
                  {/* Video Demo - Supports both YouTube and Vimeo */}
                  {project.hasVideo && (project.youtubeId || project.vimeoId) && (
                    <div
                      className="relative bg-slate-900 rounded-3xl overflow-hidden group/video border border-blue-500/20 cursor-pointer"
                      onClick={() => handleVideoPlay(project.youtubeId || project.vimeoId!)}
                    >
                      <div className="aspect-video bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center relative">
                        {project.youtubeId ? (
                          <>
                            {/* YouTube Thumbnail */}
                            <img
                              src={`https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`}
                              alt={`${project.title} Demo`}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors"></div>
                            <div className="relative z-10 text-center">
                              <div className="bg-blue-500/90 rounded-full p-6 group-hover/video:scale-125 transition-transform duration-300 shadow-2xl">
                                <Play className="w-12 h-12 text-white" />
                              </div>
                              <p className="text-white text-xl font-semibold mt-4 drop-shadow-lg">Watch Demo</p>
                            </div>
                          </>
                        ) : (
                          <>
                            {/* Vimeo Custom Background */}
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-800 to-slate-800 flex items-center justify-center">
                              <div className="text-center">
                                <Play className="w-16 h-16 text-blue-400 mx-auto mb-2" />
                                <p className="text-blue-300 text-lg font-semibold">Vimeo Demo</p>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-black/40 group-hover/video:bg-black/20 transition-colors"></div>
                            <div className="relative z-10 text-center">
                              <div className="bg-blue-500/90 rounded-full p-6 group-hover/video:scale-125 transition-transform duration-300 shadow-2xl">
                                <Play className="w-12 h-12 text-white" />
                              </div>
                              <p className="text-white text-xl font-semibold mt-4 drop-shadow-lg">Watch Demo</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Image Demo */}
                  {project.hasImage && (
                    <div className="relative rounded-3xl overflow-hidden border border-blue-500/20">
                      <div className="aspect-video bg-gradient-to-br from-slate-800 to-blue-900 flex items-center justify-center">
                        <div className="text-center">
                          <Camera className="w-24 h-24 text-blue-400 mx-auto mb-4" />
                          <p className="text-blue-300 text-xl font-semibold">Project Image</p>
                          <p className="text-blue-400 mt-2">Boom Gates Programming</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent"></div>
                    </div>
                  )}

                  <p className="text-blue-100 leading-relaxed text-lg">{project.description}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-blue-500 text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-colors text-sm px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 py-4 text-lg font-semibold transform hover:scale-105 shadow-lg"
                    onClick={() => project.link && window.open(project.link, "_blank")}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    {project.link ? "Visit Website" : "View Details"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 bg-gradient-to-b from-blue-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold text-center mb-24 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {skills.map((skill, index) => (
              <div key={index} className="group space-y-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-6">
                    <span className="text-4xl">{skill.icon}</span>
                    <span className="text-white font-bold text-2xl">{skill.name}</span>
                  </div>
                  <span className="text-blue-400 font-bold text-3xl">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-6 overflow-hidden border border-blue-500/20">
                  <div
                    className="bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-400 h-6 rounded-full transition-all duration-1000 ease-out group-hover:shadow-lg group-hover:shadow-blue-500/50"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Let's Build Something Amazing
            </h2>
            <p className="text-3xl text-blue-300">Ready to turn your ideas into reality?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <Card className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-green-500/40 hover:border-green-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <MessageSquare className="w-24 h-24 text-green-400 mx-auto mb-8" />
                <h3 className="text-4xl font-bold mb-6 text-white">WhatsApp</h3>
                <p className="text-blue-200 mb-8 text-xl">Quick chat and instant responses</p>
                <Button
                  onClick={handleWhatsApp}
                  className="bg-green-500 hover:bg-green-600 text-white px-12 py-5 rounded-full text-xl font-semibold transform hover:scale-110 transition-all duration-300"
                >
                  Start Conversation
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-blue-500/40 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <Mail className="w-24 h-24 text-blue-400 mx-auto mb-8" />
                <h3 className="text-4xl font-bold mb-6 text-white">Email</h3>
                <p className="text-blue-200 mb-8 text-xl">Detailed project discussions</p>
                <p className="text-blue-400 font-mono text-2xl">langelihlemoyes76@gmail.com</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-slate-800/95 to-blue-900/95 border-blue-500/30 backdrop-blur-sm shadow-2xl">
            <CardHeader>
              <CardTitle className="text-center text-4xl text-white">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid md:grid-cols-2 gap-8">
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-blue-900/30 border-blue-500 text-white placeholder-blue-300 focus:border-blue-400 rounded-2xl py-5 text-xl"
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-blue-900/30 border-blue-500 text-white placeholder-blue-300 focus:border-blue-400 rounded-2xl py-5 text-xl"
                  />
                </div>
                <Textarea
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={8}
                  className="bg-blue-900/30 border-blue-500 text-white placeholder-blue-300 focus:border-blue-400 rounded-2xl text-xl"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 hover:from-blue-700 hover:via-cyan-600 hover:to-blue-600 text-white font-bold py-6 rounded-2xl transform hover:scale-[1.02] transition-all duration-300 text-xl shadow-lg"
                >
                  <Send className="w-6 h-6 mr-3" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-20 px-6 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-10">
            <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
              Langelihle.dev
            </h3>
          </div>
          <p className="text-blue-200 mb-6 text-xl">
            © 2024 Langelihle Moyo. Crafting the future, one line of code at a time.
          </p>
          <p className="text-blue-400 text-lg">Innovation Engineer • Full-Stack Developer • AI/ML Enthusiast</p>
        </div>
      </footer>
    </div>
  )
}
