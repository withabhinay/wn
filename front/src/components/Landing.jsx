import { Button } from "../components/ui/button"
import {
  CheckCircle,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  BarChart,
  Clock,
  Shield,
  Zap,
} from "lucide-react"
import { usePrivy } from '@privy-io/react-auth'


export default function Landing() {
    const { login } = usePrivy();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Wellnotes</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary">
              Testimonials
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary">
              Pricing
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <Button onClick={login}>Login</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Streamline Your Workflow Like Never Before
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Boost productivity, reduce overhead, and focus on what matters most with our all-in-one platform.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" className="gap-1" onClick={login}>
                    Start Instantly <ChevronRight className="h-4 w-4" />
                  </Button>
      
                </div>
              </div>
              <img
                src="./dashboard.svg"
                alt="Hero Image"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Powerful Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to manage your workflow efficiently in one place.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <BarChart className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Advanced Analytics</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Gain valuable insights with our comprehensive analytics dashboard. Track performance, identify
                    trends, and make data-driven decisions.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Time-Saving Automation</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Automate repetitive tasks and workflows to save time and reduce errors. Focus on strategic
                    initiatives instead of manual processes.
                  </p>
                </div>
              </div>
              <div className="grid gap-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Enterprise-Grade Security</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Rest easy knowing your data is protected with our state-of-the-art security measures. We use
                    industry-leading encryption and compliance standards.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Zap className="h-6 w-6 text-primary" />
                    <h3 className="text-xl font-bold">Seamless Integration</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Connect with your favorite tools and services. Our platform integrates with over 100+ applications
                    to create a unified workflow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don't just take our word for it. Here's what our customers have to say about StreamLine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "StreamLine has completely transformed how our team works. We've cut our project delivery time in
                    half and improved collaboration across departments."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    src="./dashboard.svg"
                    alt="Sarah Johnson"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "The analytics features alone are worth the investment. We've gained insights that have directly
                    contributed to a 30% increase in revenue."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    src="./dashboard.svg"
                    alt="Michael Chen"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Marketing Director, GrowthLabs</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    "As a small business owner, I needed something that wouldn't break the bank but still offered
                    enterprise features. StreamLine delivers exactly that."
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <img
                    src="./dashboard.svg"
                    alt="Jessica Martinez"
                    className="rounded-full"
                    width={40}
                    height={40}
                  />
                  <div className="ml-4">
                    <p className="text-sm font-medium">Jessica Martinez</p>
                    <p className="text-sm text-muted-foreground">Founder, Craft & Co</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that works best for your needs. No hidden fees or surprises.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              {/* Starter Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Starter</h3>
                  <p className="text-muted-foreground">Perfect for individuals and small teams</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>5 automation workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="mt-8">Get Started</Button>
              </div>

              {/* Pro Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm relative">
                <div className="absolute -top-4 left-0 right-0 mx-auto w-fit bg-primary text-primary-foreground px-3 py-1 text-sm font-medium rounded-full">
                  Most Popular
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Pro</h3>
                  <p className="text-muted-foreground">Ideal for growing businesses</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Up to 20 team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Advanced analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited automation workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>API access</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="default">
                  Get Started
                </Button>
              </div>

              {/* Enterprise Plan */}
              <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Enterprise</h3>
                  <p className="text-muted-foreground">For large organizations with complex needs</p>
                </div>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <ul className="mt-6 space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom analytics</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Unlimited automation workflows</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>24/7 dedicated support</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 h-4 w-4 text-primary" />
                    <span>SSO & advanced security</span>
                  </li>
                </ul>
                <Button className="mt-8" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Transform Your Workflow?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join thousands of satisfied customers who have streamlined their operations with our platform.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="gap-1">
                  Start Your Free Trial <ChevronRight className="h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule a Demo
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">No credit card required. 14-day free trial.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">StreamLine</span>
          </div>
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-6 md:px-0">
            <nav className="flex gap-4 md:gap-6">
              <a href="#" className="text-sm font-medium hover:text-primary">
                About
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Features
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Pricing
              </a>
              <a href="#" className="text-sm font-medium hover:text-primary">
                Contact
              </a>
            </nav>
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground md:text-right">
            &copy; {new Date().getFullYear()} StreamLine. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}