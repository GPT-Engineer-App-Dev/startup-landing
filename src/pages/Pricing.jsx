import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Pricing = () => {
  return (
    <div className="space-y-12">
      {/* Header Section */}
      <section className="text-center space-y-6">
        <h1 className="text-5xl font-bold">Pricing Plans</h1>
        <p className="text-xl text-muted-foreground">Choose the plan that’s right for you.</p>
      </section>

      {/* Pricing Tiers Section */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Basic</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold">$10/month</p>
              <p className="text-muted-foreground">$100/year</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
              </ul>
              <Button size="lg" variant="primary" className="mt-6">Get Started</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Pro</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold">$30/month</p>
              <p className="text-muted-foreground">$300/year</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
              </ul>
              <Button size="lg" variant="primary" className="mt-6">Get Started</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-center">Enterprise</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-2xl font-bold">$100/month</p>
              <p className="text-muted-foreground">$1000/year</p>
              <ul className="list-disc list-inside space-y-2 mt-4">
                <li>Feature A</li>
                <li>Feature B</li>
                <li>Feature C</li>
                <li>Feature D</li>
                <li>Feature E</li>
              </ul>
              <Button size="lg" variant="primary" className="mt-6">Contact Us</Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Feature Comparison Table */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Compare Features</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Basic</TableHead>
              <TableHead>Pro</TableHead>
              <TableHead>Enterprise</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Feature A</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature B</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature C</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature D</TableCell>
              <TableCell></TableCell>
              <TableCell>✔️</TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Feature E</TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell>✔️</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* FAQ Section */}
      <section className="space-y-6">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>What is included in the Basic plan?</AccordionTrigger>
            <AccordionContent>
              The Basic plan includes Feature A, Feature B, and Feature C.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I upgrade my plan later?</AccordionTrigger>
            <AccordionContent>
              Yes, you can upgrade your plan at any time from your account settings.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a free trial available?</AccordionTrigger>
            <AccordionContent>
              Yes, we offer a 14-day free trial for all new users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </div>
  );
};

export default Pricing;