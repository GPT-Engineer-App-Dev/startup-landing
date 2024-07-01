import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Package2 } from "lucide-react";

function Index() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Welcome to SaaS Startup</h1>
        <p className="text-xl text-muted-foreground">
          Revolutionizing the way you manage your business.
        </p>
        <Button size="lg" variant="primary">
          Get Started
        </Button>
        <img src="/images/hero-image.png" alt="Hero" className="mx-auto mt-6" />
      </section>

      {/* Features Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle className="text-center">Feature One</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Description of the first amazing feature.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle className="text-center">Feature Two</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Description of the second amazing feature.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Package2 className="h-10 w-10 mx-auto" />
              <CardTitle className="text-center">Feature Three</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-center">
                Description of the third amazing feature.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>John Doe</CardTitle>
                <p className="text-muted-foreground">CEO, Company</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "This product has transformed our business. Highly recommended!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Jane Smith</CardTitle>
                <p className="text-muted-foreground">CTO, Another Company</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "An essential tool for our daily operations. Fantastic support!"
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://via.placeholder.com/150" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Sam Wilson</CardTitle>
                <p className="text-muted-foreground">Manager, Some Company</p>
              </div>
            </CardHeader>
            <CardContent>
              <p>
                "A game-changer in our industry. We can't imagine working without it."
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}

export default Index;